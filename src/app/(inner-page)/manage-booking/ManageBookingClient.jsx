"use client";
import React, { useState, useEffect, useMemo, useCallback } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import BackToTop from "@/components/BackToTop";
import Breadcrumb from "@/components/Breadcrumb";
import {
  removeBookingToken,
  getLatestBookingToken,
  setLatestBookingToken,
} from "@/lib/bookingStorage";

const USER_TZ =
  (typeof Intl !== "undefined" &&
    Intl.DateTimeFormat().resolvedOptions().timeZone) ||
  "UTC";

// Booking token storage helpers imported from @/lib/bookingStorage

function asArray(json) {
  if (!json) return [];
  if (Array.isArray(json)) return json;
  if (Array.isArray(json.data)) return json.data;
  if (Array.isArray(json.slots)) return json.slots;
  if (Array.isArray(json.availability)) return json.availability;
  return [];
}
function slotToIso(slot) {
  if (!slot) return null;
  if (typeof slot === "string") return slot;
  return slot.start || slot.scheduled_at || slot.start_time || slot.iso || null;
}
function startOfDayLocal(date) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
}
function endOfDayLocal(date) {
  const d = new Date(date);
  d.setHours(23, 59, 59, 999);
  return d;
}
function toLocalDateInputValue(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}
function addOneDayYmd(ymd) {
  const d = new Date(`${ymd}T00:00:00`);
  d.setDate(d.getDate() + 1);
  return toLocalDateInputValue(d);
}
function formatLongDate(iso) {
  try {
    return new Intl.DateTimeFormat(undefined, {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: USER_TZ,
    }).format(new Date(iso));
  } catch {
    return String(iso);
  }
}
function formatTime(iso) {
  try {
    return new Intl.DateTimeFormat(undefined, {
      hour: "numeric",
      minute: "2-digit",
      timeZone: USER_TZ,
    }).format(new Date(iso));
  } catch {
    return String(iso);
  }
}
function Spinner({ label }) {
  return (
    <div className="mb-spinner-wrap" role="status" aria-live="polite">
      <span className="mb-spinner" aria-hidden="true" />
      {label && <span className="mb-spinner-label">{label}</span>}
    </div>
  );
}
function ErrorBanner({ message }) {
  if (!message) return null;
  return (
    <div className="mb-error-banner" role="alert">
      <i className="far fa-exclamation-circle" aria-hidden="true" /> {message}
    </div>
  );
}

export default function ManageBookingClient() {
  const breadcrumbs = [
    { label: "Home", link: "/" },
    { label: "Manage Booking" },
  ];
  const searchParams = useSearchParams();

  const [token, setToken] = useState("");
  const [tokenInput, setTokenInput] = useState("");
  const [appointment, setAppointment] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [mode, setMode] = useState("view"); // view | reschedule | cancel
  const [date, setDate] = useState("");
  const [slots, setSlots] = useState([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [slotsError, setSlotsError] = useState("");
  const [newIso, setNewIso] = useState("");
  const [actionError, setActionError] = useState("");
  const [actionLoading, setActionLoading] = useState(false);
  const [cancelled, setCancelled] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  /* resolve token from URL or localStorage on mount */
  useEffect(() => {
    const fromUrl = searchParams?.get("token") || searchParams?.get("booking_token");
    let t = fromUrl || "";
    if (!t) t = getLatestBookingToken();
    if (t) {
      setToken(t);
      setTokenInput(t);
    }
  }, [searchParams]);

  const fetchAppointment = useCallback(async (tok) => {
    if (!tok) return;
    setLoading(true);
    setError("");
    setAppointment(null);
    setCancelled(false);
    try {
      const res = await fetch(
        `/api/proxy-appointments/${encodeURIComponent(tok)}`,
        { cache: "no-store" }
      );
      const json = await res.json();
      if (!res.ok) {
        setError(json?.error || "Could not load your booking.");
      } else {
        const appt = json?.data || json?.appointment || json;
        setAppointment(appt);
      }
    } catch {
      setError("Could not load your booking. Please try again.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (token) fetchAppointment(token);
  }, [token, fetchAppointment]);

  const appointmentTypeSlug = useMemo(
    () =>
      appointment?.type_slug ||
      appointment?.appointment_type_slug ||
      (typeof appointment?.type === "object" && appointment?.type?.slug) ||
      appointment?.appointment_type?.slug ||
      appointment?.appointment_type?.id ||
      "",
    [appointment]
  );
  const scheduledAt = useMemo(
    () => appointment?.scheduled_at || appointment?.start || appointment?.start_time || "",
    [appointment]
  );

  /* availability for reschedule */
  const fetchAvailability = useCallback(
    async (dateStr) => {
      if (!dateStr || !appointmentTypeSlug) return;
      setLoadingSlots(true);
      setSlotsError("");
      setSlots([]);
      setNewIso("");
      try {
        // Per Wehoware spec, from/to are YYYY-MM-DD and `from` must be before `to`.
        // For a single selected day, send `to` as the next calendar day.
        const toDate = addOneDayYmd(dateStr);
        const url =
          `/api/proxy-appointments?op=availability` +
          `&appointment_type_slug=${encodeURIComponent(appointmentTypeSlug)}` +
          `&from=${encodeURIComponent(dateStr)}&to=${encodeURIComponent(toDate)}`;
        const res = await fetch(url, { cache: "no-store" });
        const json = await res.json();
        if (!res.ok) {
          setSlotsError(json?.error || "Could not load available times.");
        } else {
          setSlots(asArray(json));
        }
      } catch {
        setSlotsError("Could not load available times.");
      } finally {
        setLoadingSlots(false);
      }
    },
    [appointmentTypeSlug]
  );

  useEffect(() => {
    if (mode === "reschedule" && date && appointmentTypeSlug)
      fetchAvailability(date);
  }, [mode, date, appointmentTypeSlug, fetchAvailability]);

  const handleReschedule = async () => {
    if (!newIso) return;
    setActionLoading(true);
    setActionError("");
    try {
      const res = await fetch(
        `/api/proxy-appointments/${encodeURIComponent(token)}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ scheduled_at: newIso, timezone: USER_TZ }),
        }
      );
      const json = await res.json();
      if (!res.ok) {
        setActionError(json?.error || "Could not reschedule. Please try again.");
      } else {
        setSuccessMsg("Your appointment has been rescheduled.");
        setMode("view");
        await fetchAppointment(token);
      }
    } catch {
      setActionError("Could not reschedule. Please try again.");
    } finally {
      setActionLoading(false);
    }
  };

  const handleCancel = async () => {
    setActionLoading(true);
    setActionError("");
    try {
      const res = await fetch(
        `/api/proxy-appointments/${encodeURIComponent(token)}`,
        { method: "DELETE" }
      );
      const json = await res.json();
      if (!res.ok) {
        setActionError(json?.error || "Could not cancel. Please try again.");
      } else {
        setCancelled(true);
        setMode("view");
        removeBookingToken(token);
      }
    } catch {
      setActionError("Could not cancel. Please try again.");
    } finally {
      setActionLoading(false);
    }
  };

  const handleLoadToken = (e) => {
    e.preventDefault();
    if (tokenInput.trim()) {
      setToken(tokenInput.trim());
      setLatestBookingToken(tokenInput.trim());
    }
  };

  const today = useMemo(() => startOfDayLocal(new Date()), []);
  const maxDate = useMemo(() => {
    const d = new Date(today);
    d.setDate(d.getDate() + 30);
    return toLocalDateInputValue(d);
  }, [today]);
  const slotIsos = useMemo(
    () => slots.map(slotToIso).filter(Boolean),
    [slots]
  );

  return (
    <div className="">
      <Header />
      <Breadcrumb title="Manage Booking" breadcrumbs={breadcrumbs} />

      <section className="mb-section rts-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="mb-wrap">
                <div className="mb-head">
                  <h2 className="title">Manage Your Booking</h2>
                  <p className="mb-sub">
                    View, reschedule, or cancel your appointment.
                  </p>
                </div>

                {/* token entry if none */}
                {!token && (
                  <div className="mb-card">
                    <form className="mb-form" onSubmit={handleLoadToken}>
                      <div className="mb-field">
                        <label htmlFor="token" className="mb-label">
                          Booking reference
                        </label>
                        <input
                          id="token"
                          type="text"
                          className="mb-input"
                          placeholder="Paste your booking reference"
                          value={tokenInput}
                          onChange={(e) => setTokenInput(e.target.value)}
                        />
                      </div>
                      <button type="submit" className="mb-btn mb-btn--primary">
                        Find Booking
                      </button>
                    </form>
                    <p className="mb-hint">
                      Don't have a reference?{" "}
                      <Link href="/book-appointment">Book an appointment</Link>.
                    </p>
                  </div>
                )}

                {token && loading && <Spinner label="Loading your booking…" />}
                {token && !loading && error && (
                  <div className="mb-card">
                    <ErrorBanner message={error} />
                    <form className="mb-form" onSubmit={handleLoadToken}>
                      <div className="mb-field">
                        <label htmlFor="token2" className="mb-label">
                          Try another booking reference
                        </label>
                        <input
                          id="token2"
                          type="text"
                          className="mb-input"
                          placeholder="Paste your booking reference"
                          value={tokenInput}
                          onChange={(e) => setTokenInput(e.target.value)}
                        />
                      </div>
                      <button type="submit" className="mb-btn mb-btn--primary">
                        Find Booking
                      </button>
                    </form>
                  </div>
                )}

                {token && !loading && !error && appointment && (
                  <div className="mb-card">
                    {successMsg && (
                      <div className="mb-success-banner" role="status">
                        <i className="far fa-check-circle" aria-hidden="true" />{" "}
                        {successMsg}
                      </div>
                    )}

                    {cancelled ? (
                      <div className="mb-cancelled">
                        <div className="mb-cancelled-icon" aria-hidden="true">
                          <i className="far fa-times-circle" />
                        </div>
                        <h3 className="mb-cancelled-title">
                          Appointment Cancelled
                        </h3>
                        <p className="mb-cancelled-sub">
                          Your appointment has been cancelled. If this was a
                          mistake, you can book a new one below.
                        </p>
                        <div className="mb-nav mb-nav--center">
                          <Link
                            href="/book-appointment"
                            className="mb-btn mb-btn--primary"
                          >
                            Book a New Appointment
                          </Link>
                        </div>
                      </div>
                    ) : mode === "view" ? (
                      <>
                        <div className="mb-detail-card">
                          <div className="mb-detail-row">
                            <span className="mb-detail-key">Type</span>
                            <span className="mb-detail-val">
                              {(typeof appointment?.type === "string"
                                ? appointment.type
                                : appointment?.type?.name) ||
                                appointment?.appointment_type?.name ||
                                appointment?.appointment_type_name ||
                                "—"}
                            </span>
                          </div>
                          <div className="mb-detail-row">
                            <span className="mb-detail-key">Date</span>
                            <span className="mb-detail-val">
                              {scheduledAt ? formatLongDate(scheduledAt) : "—"}
                            </span>
                          </div>
                          <div className="mb-detail-row">
                            <span className="mb-detail-key">Time</span>
                            <span className="mb-detail-val">
                              {scheduledAt ? formatTime(scheduledAt) : "—"}
                            </span>
                          </div>
                          <div className="mb-detail-row">
                            <span className="mb-detail-key">Status</span>
                            <span className="mb-detail-val">
                              <span className="mb-badge">
                                {appointment?.status || "—"}
                              </span>
                            </span>
                          </div>
                          {appointment?.guest_name && (
                            <div className="mb-detail-row">
                              <span className="mb-detail-key">Name</span>
                              <span className="mb-detail-val">
                                {appointment.guest_name}
                              </span>
                            </div>
                          )}
                        </div>

                        {actionError && <ErrorBanner message={actionError} />}

                        <div className="mb-nav">
                          <button
                            type="button"
                            className="mb-btn mb-btn--primary"
                            onClick={() => {
                              setMode("reschedule");
                              setSuccessMsg("");
                              setDate("");
                              setSlots([]);
                              setNewIso("");
                            }}
                          >
                            <i className="far fa-calendar-alt" aria-hidden="true" />{" "}
                            Reschedule
                          </button>
                          <button
                            type="button"
                            className="mb-btn mb-btn--danger"
                            onClick={() => {
                              setMode("cancel");
                              setSuccessMsg("");
                              setActionError("");
                            }}
                          >
                            <i className="far fa-trash-alt" aria-hidden="true" />{" "}
                            Cancel Appointment
                          </button>
                        </div>
                      </>
                    ) : mode === "reschedule" ? (
                      <div className="mb-reschedule">
                        <h3 className="mb-mode-title">Reschedule Appointment</h3>
                        <div className="mb-field">
                          <label htmlFor="mb-date" className="mb-label">
                            Choose a new date
                          </label>
                          <input
                            id="mb-date"
                            type="date"
                            className="mb-input"
                            min={toLocalDateInputValue(today)}
                            max={maxDate}
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                          />
                        </div>

                        <div className="mb-slots-title">Available times</div>
                        {loadingSlots ? (
                          <Spinner label="Finding available times…" />
                        ) : slotsError ? (
                          <ErrorBanner message={slotsError} />
                        ) : !date ? (
                          <p className="mb-empty">
                            Please pick a date to see available times.
                          </p>
                        ) : slotIsos.length === 0 ? (
                          <p className="mb-empty">
                            No times available on this day. Try another date.
                          </p>
                        ) : (
                          <div className="mb-slot-grid">
                            {slotIsos.map((iso) => (
                              <button
                                type="button"
                                key={iso}
                                className={`mb-slot${iso === newIso ? " is-selected" : ""}`}
                                onClick={() => setNewIso(iso)}
                                aria-pressed={iso === newIso}
                              >
                                {formatTime(iso)}
                              </button>
                            ))}
                          </div>
                        )}

                        {actionError && <ErrorBanner message={actionError} />}

                        <div className="mb-nav">
                          <button
                            type="button"
                            className="mb-btn mb-btn--ghost"
                            onClick={() => setMode("view")}
                            disabled={actionLoading}
                          >
                            Back
                          </button>
                          <button
                            type="button"
                            className="mb-btn mb-btn--primary"
                            onClick={handleReschedule}
                            disabled={!newIso || actionLoading}
                          >
                            {actionLoading ? (
                              <>
                                <span
                                  className="mb-btn-spinner"
                                  aria-hidden="true"
                                />{" "}
                                Saving…
                              </>
                            ) : (
                              "Confirm Reschedule"
                            )}
                          </button>
                        </div>
                      </div>
                    ) : mode === "cancel" ? (
                      <div className="mb-cancel-confirm">
                        <h3 className="mb-mode-title">Cancel this appointment?</h3>
                        <p className="mb-cancel-text">
                          {scheduledAt
                            ? `Your appointment on ${formatLongDate(
                                scheduledAt
                              )} at ${formatTime(scheduledAt)} will be cancelled.`
                            : "Your appointment will be cancelled."}{" "}
                          This action cannot be undone.
                        </p>
                        {actionError && <ErrorBanner message={actionError} />}
                        <div className="mb-nav">
                          <button
                            type="button"
                            className="mb-btn mb-btn--ghost"
                            onClick={() => setMode("view")}
                            disabled={actionLoading}
                          >
                            Keep Appointment
                          </button>
                          <button
                            type="button"
                            className="mb-btn mb-btn--danger"
                            onClick={handleCancel}
                            disabled={actionLoading}
                          >
                            {actionLoading ? (
                              <>
                                <span
                                  className="mb-btn-spinner"
                                  aria-hidden="true"
                                />{" "}
                                Cancelling…
                              </>
                            ) : (
                              "Yes, Cancel"
                            )}
                          </button>
                        </div>
                      </div>
                    ) : null}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
}

/* Styles moved to /assets/css/manage-booking.css */
