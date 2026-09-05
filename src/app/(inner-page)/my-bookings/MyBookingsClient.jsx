"use client";
import React, { useState, useEffect, useMemo, useCallback } from "react";
import Link from "next/link";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import BackToTop from "@/components/BackToTop";
import Breadcrumb from "@/components/Breadcrumb";
import {
  getBookingTokens,
  addBookingToken,
  removeBookingToken,
  getSlugForToken,
} from "@/lib/bookingStorage";

/* ---------- helpers ---------- */

const USER_TZ =
  (typeof Intl !== "undefined" &&
    Intl.DateTimeFormat().resolvedOptions().timeZone) ||
  "UTC";

function asArray(json) {
  if (!json) return [];
  if (Array.isArray(json)) return json;
  if (Array.isArray(json.data)) return json.data;
  if (Array.isArray(json.slots)) return json.slots;
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
function formatShortDate(iso) {
  try {
    return new Intl.DateTimeFormat(undefined, {
      month: "short",
      day: "numeric",
      year: "numeric",
      timeZone: USER_TZ,
    }).format(new Date(iso));
  } catch {
    return String(iso);
  }
}

function getTypeName(appt) {
  if (typeof appt?.type === "string") return appt.type;
  if (appt?.type?.name) return appt.type.name;
  if (appt?.appointment_type?.name) return appt.appointment_type.name;
  if (appt?.appointment_type_name) return appt.appointment_type_name;
  return "Appointment";
}
function getTypeSlug(appt) {
  if (appt?.type_slug) return appt.type_slug;
  if (appt?.appointment_type_slug) return appt.appointment_type_slug;
  if (typeof appt?.type === "object" && appt?.type?.slug) return appt.type.slug;
  if (appt?.appointment_type?.slug) return appt.appointment_type.slug;
  return "";
}
function getScheduledAt(appt) {
  return (
    appt?.scheduled_at || appt?.start || appt?.start_time || ""
  );
}
function getStatus(appt) {
  const s = (appt?.status || "").toLowerCase();
  if (!s) return "unknown";
  return s.charAt(0).toUpperCase() + s.slice(1);
}
function statusBadgeClass(status) {
  const s = status.toLowerCase();
  if (s === "confirmed") return "yb-badge--confirmed";
  if (s === "pending") return "yb-badge--pending";
  if (s === "cancelled") return "yb-badge--cancelled";
  if (s === "completed") return "yb-badge--completed";
  if (s === "noshow") return "yb-badge--noshow";
  return "yb-badge--pending";
}
function isCancelled(appt) {
  return (appt?.status || "").toLowerCase() === "cancelled";
}

/* ---------- small UI pieces ---------- */
function Spinner({ label }) {
  return (
    <div className="yb-spinner-wrap" role="status" aria-live="polite">
      <span className="yb-spinner" aria-hidden="true" />
      {label && <span className="yb-spinner-label">{label}</span>}
    </div>
  );
}
function ErrorBanner({ message }) {
  if (!message) return null;
  return (
    <div className="yb-error-banner" role="alert">
      <i className="far fa-exclamation-circle" aria-hidden="true" /> {message}
    </div>
  );
}
function SuccessBanner({ message }) {
  if (!message) return null;
  return (
    <div className="yb-success-banner" role="status">
      <i className="far fa-check-circle" aria-hidden="true" /> {message}
    </div>
  );
}

/* ============================================================
   Booking card — view / reschedule / cancel
   ============================================================ */
function BookingCard({
  appt,
  token,
  onReschedule,
  onCancel,
  onRemove,
  busy,
}) {
  const scheduledAt = getScheduledAt(appt);
  const status = getStatus(appt);
  const cancelled = isCancelled(appt);

  return (
    <div className={`yb-card-item${cancelled ? " is-cancelled" : ""}`}>
      <div className="yb-card-top">
        <div className="yb-card-type">
          <i className="far fa-calendar-alt" aria-hidden="true" />
          <span>{getTypeName(appt)}</span>
        </div>
        <span className={`yb-badge ${statusBadgeClass(status)}`}>{status}</span>
      </div>

      <div className="yb-card-when">
        <div className="yb-card-date">
          <span className="yb-card-label">Date</span>
          <span className="yb-card-value">
            {scheduledAt ? formatLongDate(scheduledAt) : "—"}
          </span>
        </div>
        <div className="yb-card-time">
          <span className="yb-card-label">Time</span>
          <span className="yb-card-value">
            {scheduledAt ? formatTime(scheduledAt) : "—"}
          </span>
        </div>
      </div>

      {appt?.guest_name && (
        <div className="yb-card-guest">
          <i className="far fa-user" aria-hidden="true" />
          {appt.guest_name}
        </div>
      )}
      {appt?.meeting_link && !cancelled && (
        <a
          href={appt.meeting_link}
          target="_blank"
          rel="noopener noreferrer"
          className="yb-meeting-link"
        >
          <i className="far fa-video" aria-hidden="true" /> Join meeting
        </a>
      )}

      <div className="yb-card-actions">
        {!cancelled && (
          <>
            <button
              type="button"
              className="yb-btn yb-btn--primary yb-btn--sm"
              onClick={() => onReschedule(token)}
              disabled={busy}
            >
              <i className="far fa-clock" aria-hidden="true" /> Reschedule
            </button>
            <button
              type="button"
              className="yb-btn yb-btn--danger yb-btn--sm"
              onClick={() => onCancel(token)}
              disabled={busy}
            >
              <i className="far fa-trash-alt" aria-hidden="true" /> Cancel
            </button>
          </>
        )}
        {cancelled && (
          <button
            type="button"
            className="yb-btn yb-btn--ghost yb-btn--sm"
            onClick={() => onRemove(token)}
          >
            <i className="far fa-times" aria-hidden="true" /> Remove from list
          </button>
        )}
      </div>
    </div>
  );
}

/* ============================================================
   Reschedule modal
   ============================================================ */
function RescheduleModal({
  appt,
  token,
  storedSlug = "",
  onClose,
  onConfirm,
  actionLoading,
  actionError,
}) {
  const [date, setDate] = useState("");
  const [slots, setSlots] = useState([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [slotsError, setSlotsError] = useState("");
  const [newIso, setNewIso] = useState("");

  const typeSlug = useMemo(
    () => getTypeSlug(appt) || storedSlug,
    [appt, storedSlug]
  );

  const today = useMemo(() => startOfDayLocal(new Date()), []);
  const maxDate = useMemo(() => {
    const d = new Date(today);
    d.setDate(d.getDate() + 30);
    return toLocalDateInputValue(d);
  }, [today]);

  useEffect(() => {
    if (!date || !typeSlug) return;
    let cancelled = false;
    (async () => {
      setLoadingSlots(true);
      setSlotsError("");
      setSlots([]);
      setNewIso("");
      try {
        const toDate = addOneDayYmd(date);
        const url =
          `/api/proxy-appointments?op=availability` +
          `&appointment_type_slug=${encodeURIComponent(typeSlug)}` +
          `&from=${encodeURIComponent(date)}&to=${encodeURIComponent(toDate)}`;
        const res = await fetch(url, { cache: "no-store" });
        const json = await res.json();
        if (cancelled) return;
        if (!res.ok) {
          setSlotsError(json?.error || "Could not load available times.");
        } else {
          setSlots(asArray(json));
        }
      } catch {
        if (!cancelled) setSlotsError("Could not load available times.");
      } finally {
        if (!cancelled) setLoadingSlots(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [date, typeSlug]);

  const slotIsos = useMemo(
    () => slots.map(slotToIso).filter(Boolean),
    [slots]
  );

  return (
    <div className="yb-modal-overlay" onClick={onClose}>
      <div className="yb-modal" onClick={(e) => e.stopPropagation()}>
        <div className="yb-modal-head">
          <h3 className="yb-modal-title">Reschedule Appointment</h3>
          <button
            type="button"
            className="yb-modal-close"
            onClick={onClose}
            aria-label="Close"
          >
            <i className="far fa-times" />
          </button>
        </div>

        <div className="yb-modal-body">
          <div className="yb-field">
            <label htmlFor="yb-reschedule-date" className="yb-label">
              Choose a new date
            </label>
            <input
              id="yb-reschedule-date"
              type="date"
              className="yb-input"
              min={toLocalDateInputValue(today)}
              max={maxDate}
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div className="yb-slots-title">Available times</div>
          {loadingSlots ? (
            <Spinner label="Finding available times…" />
          ) : slotsError ? (
            <ErrorBanner message={slotsError} />
          ) : !date ? (
            <p className="yb-empty">Please pick a date to see available times.</p>
          ) : slotIsos.length === 0 ? (
            <p className="yb-empty">
              No times available on this day. Try another date.
            </p>
          ) : (
            <div className="yb-slot-grid">
              {slotIsos.map((iso) => (
                <button
                  type="button"
                  key={iso}
                  className={`yb-slot${iso === newIso ? " is-selected" : ""}`}
                  onClick={() => setNewIso(iso)}
                  aria-pressed={iso === newIso}
                >
                  {formatTime(iso)}
                </button>
              ))}
            </div>
          )}

          {actionError && <ErrorBanner message={actionError} />}
        </div>

        <div className="yb-modal-foot">
          <button
            type="button"
            className="yb-btn yb-btn--ghost"
            onClick={onClose}
            disabled={actionLoading}
          >
            Cancel
          </button>
          <button
            type="button"
            className="yb-btn yb-btn--primary"
            onClick={() => onConfirm(token, newIso)}
            disabled={!newIso || actionLoading}
          >
            {actionLoading ? (
              <>
                <span className="yb-btn-spinner" aria-hidden="true" /> Saving…
              </>
            ) : (
              "Confirm Reschedule"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   Cancel confirm modal
   ============================================================ */
function CancelModal({
  appt,
  onConfirm,
  onClose,
  actionLoading,
  actionError,
}) {
  const scheduledAt = getScheduledAt(appt);
  return (
    <div className="yb-modal-overlay" onClick={onClose}>
      <div className="yb-modal yb-modal--sm" onClick={(e) => e.stopPropagation()}>
        <div className="yb-modal-head">
          <h3 className="yb-modal-title">Cancel this appointment?</h3>
          <button
            type="button"
            className="yb-modal-close"
            onClick={onClose}
            aria-label="Close"
          >
            <i className="far fa-times" />
          </button>
        </div>
        <div className="yb-modal-body">
          <p className="yb-cancel-text">
            {scheduledAt
              ? `Your appointment on ${formatLongDate(scheduledAt)} at ${formatTime(
                  scheduledAt
                )} will be cancelled.`
              : "Your appointment will be cancelled."}{" "}
            This action cannot be undone.
          </p>
          {actionError && <ErrorBanner message={actionError} />}
        </div>
        <div className="yb-modal-foot">
          <button
            type="button"
            className="yb-btn yb-btn--ghost"
            onClick={onClose}
            disabled={actionLoading}
          >
            Keep Appointment
          </button>
          <button
            type="button"
            className="yb-btn yb-btn--danger"
            onClick={onConfirm}
            disabled={actionLoading}
          >
            {actionLoading ? (
              <>
                <span className="yb-btn-spinner" aria-hidden="true" /> Cancelling…
              </>
            ) : (
              "Yes, Cancel"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   Add-by-token modal
   ============================================================ */
function AddTokenModal({ onAdd, onClose }) {
  const [value, setValue] = useState("");
  return (
    <div className="yb-modal-overlay" onClick={onClose}>
      <div className="yb-modal yb-modal--sm" onClick={(e) => e.stopPropagation()}>
        <div className="yb-modal-head">
          <h3 className="yb-modal-title">Add a booking by reference</h3>
          <button
            type="button"
            className="yb-modal-close"
            onClick={onClose}
            aria-label="Close"
          >
            <i className="far fa-times" />
          </button>
        </div>
        <div className="yb-modal-body">
          <p className="yb-cancel-text">
            Paste the booking reference from your confirmation email to add it
            to your list.
          </p>
          <div className="yb-field">
            <label htmlFor="yb-add-token" className="yb-label">
              Booking reference
            </label>
            <input
              id="yb-add-token"
              type="text"
              className="yb-input"
              placeholder="Paste your 64-character booking reference"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
        </div>
        <div className="yb-modal-foot">
          <button
            type="button"
            className="yb-btn yb-btn--ghost"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            type="button"
            className="yb-btn yb-btn--primary"
            onClick={() => onAdd(value.trim())}
            disabled={!value.trim()}
          >
            Add Booking
          </button>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   Main client
   ============================================================ */
export default function MyBookingsClient() {
  const breadcrumbs = [
    { label: "Home", link: "/" },
    { label: "My Bookings" },
  ];

  const [tokens, setTokens] = useState([]);
  const [bookings, setBookings] = useState({}); // token -> { appt, loading, error }
  const [loadingAll, setLoadingAll] = useState(true);

  const [rescheduleToken, setRescheduleToken] = useState(null);
  const [cancelToken, setCancelToken] = useState(null);
  const [showAddToken, setShowAddToken] = useState(false);
  const [actionLoading, setActionLoading] = useState(false);
  const [actionError, setActionError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  /* load tokens from localStorage on mount */
  useEffect(() => {
    const entries = getBookingTokens();
    const tokenStrings = entries.map((e) => e.t);
    setTokens(tokenStrings);
    if (tokenStrings.length === 0) setLoadingAll(false);
  }, []);

  /* fetch each booking by token */
  const fetchOne = useCallback(async (tok) => {
    setBookings((prev) => ({
      ...prev,
      [tok]: { ...(prev[tok] || {}), loading: true, error: "" },
    }));
    try {
      const res = await fetch(
        `/api/proxy-appointments/${encodeURIComponent(tok)}`,
        { cache: "no-store" }
      );
      const json = await res.json();
      if (!res.ok) {
        setBookings((prev) => ({
          ...prev,
          [tok]: {
            loading: false,
            error: json?.error || "Could not load this booking.",
            appt: null,
          },
        }));
      } else {
        const appt = json?.data || json?.appointment || json;
        setBookings((prev) => ({
          ...prev,
          [tok]: { loading: false, error: "", appt },
        }));
      }
    } catch {
      setBookings((prev) => ({
        ...prev,
        [tok]: {
          loading: false,
          error: "Could not load this booking.",
          appt: null,
        },
      }));
    }
  }, []);

  useEffect(() => {
    if (tokens.length === 0) return;
    let cancelled = false;
    setLoadingAll(true);
    (async () => {
      await Promise.all(tokens.map((t) => fetchOne(t)));
      if (!cancelled) setLoadingAll(false);
    })();
    return () => {
      cancelled = true;
    };
  }, [tokens, fetchOne]);

  /* actions */
  const handleReschedule = (token) => {
    setRescheduleToken(token);
    setActionError("");
    setSuccessMsg("");
  };

  const handleConfirmReschedule = async (token, newIso) => {
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
        setRescheduleToken(null);
        await fetchOne(token);
      }
    } catch {
      setActionError("Could not reschedule. Please try again.");
    } finally {
      setActionLoading(false);
    }
  };

  const handleCancel = (token) => {
    setCancelToken(token);
    setActionError("");
    setSuccessMsg("");
  };

  const handleConfirmCancel = async () => {
    if (!cancelToken) return;
    setActionLoading(true);
    setActionError("");
    try {
      const res = await fetch(
        `/api/proxy-appointments/${encodeURIComponent(cancelToken)}`,
        { method: "DELETE" }
      );
      const json = await res.json();
      if (!res.ok) {
        setActionError(json?.error || "Could not cancel. Please try again.");
      } else {
        setSuccessMsg("Your appointment has been cancelled.");
        setCancelToken(null);
        await fetchOne(cancelToken);
      }
    } catch {
      setActionError("Could not cancel. Please try again.");
    } finally {
      setActionLoading(false);
    }
  };

  const handleRemove = (token) => {
    removeBookingToken(token);
    setTokens((prev) => prev.filter((t) => t !== token));
    setBookings((prev) => {
      const next = { ...prev };
      delete next[token];
      return next;
    });
  };

  const handleAddToken = (token) => {
    if (!token) return;
    addBookingToken(token);
    setShowAddToken(false);
    setTokens((prev) => (prev.includes(token) ? prev : [...prev, token]));
  };

  /* derived */
  const rescheduleAppt = rescheduleToken
    ? bookings[rescheduleToken]?.appt
    : null;
  const cancelAppt = cancelToken ? bookings[cancelToken]?.appt : null;

  const sortedTokens = useMemo(() => {
    return [...tokens].sort((a, b) => {
      const apptA = bookings[a]?.appt;
      const apptB = bookings[b]?.appt;
      const sa = getScheduledAt(apptA);
      const sb = getScheduledAt(apptB);
      if (!sa && !sb) return 0;
      if (!sa) return 1;
      if (!sb) return -1;
      return new Date(sa) - new Date(sb);
    });
  }, [tokens, bookings]);

  return (
    <div className="">
      <Header />
      <Breadcrumb title="My Bookings" breadcrumbs={breadcrumbs} />

      <section className="yb-section rts-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="yb-wrap">
                <div className="yb-head">
                  <h2 className="title">My Bookings</h2>
                  <p className="yb-sub">
                    View, reschedule, or cancel your appointments.
                  </p>
                </div>

                <SuccessBanner message={successMsg} />

                <div className="yb-toolbar">
                  <Link
                    href="/book-appointment"
                    className="yb-btn yb-btn--primary"
                  >
                    <i className="far fa-plus" aria-hidden="true" /> Book New
                  </Link>
                  <button
                    type="button"
                    className="yb-btn yb-btn--ghost"
                    onClick={() => setShowAddToken(true)}
                  >
                    <i className="far fa-link" aria-hidden="true" /> Add by
                    reference
                  </button>
                </div>

                {loadingAll && <Spinner label="Loading your bookings…" />}

                {!loadingAll && tokens.length === 0 && (
                  <div className="yb-empty-state">
                    <div className="yb-empty-icon" aria-hidden="true">
                      <i className="far fa-calendar" />
                    </div>
                    <h3 className="yb-empty-title">No bookings yet</h3>
                    <p className="yb-empty-text">
                      When you book an appointment, it will appear here for easy
                      management.
                    </p>
                    <Link
                      href="/book-appointment"
                      className="yb-btn yb-btn--primary"
                    >
                      <i className="far fa-plus" aria-hidden="true" /> Book Your
                      First Appointment
                    </Link>
                  </div>
                )}

                {!loadingAll && tokens.length > 0 && (
                  <div className="yb-list">
                    {sortedTokens.map((token) => {
                      const entry = bookings[token];
                      if (!entry) return null;
                      if (entry.loading) {
                        return (
                          <div key={token} className="yb-card-item">
                            <Spinner label="Loading booking…" />
                          </div>
                        );
                      }
                      if (entry.error) {
                        return (
                          <div key={token} className="yb-card-item">
                            <ErrorBanner message={entry.error} />
                            <div className="yb-card-actions">
                              <button
                                type="button"
                                className="yb-btn yb-btn--ghost yb-btn--sm"
                                onClick={() => fetchOne(token)}
                              >
                                <i className="far fa-redo" /> Retry
                              </button>
                              <button
                                type="button"
                                className="yb-btn yb-btn--ghost yb-btn--sm"
                                onClick={() => handleRemove(token)}
                              >
                                <i className="far fa-times" /> Remove
                              </button>
                            </div>
                          </div>
                        );
                      }
                      return (
                        <BookingCard
                          key={token}
                          appt={entry.appt}
                          token={token}
                          onReschedule={handleReschedule}
                          onCancel={handleCancel}
                          onRemove={handleRemove}
                          busy={actionLoading}
                        />
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {rescheduleToken && rescheduleAppt && (
        <RescheduleModal
          appt={rescheduleAppt}
          token={rescheduleToken}
          storedSlug={getSlugForToken(rescheduleToken)}
          onClose={() => setRescheduleToken(null)}
          onConfirm={handleConfirmReschedule}
          actionLoading={actionLoading}
          actionError={actionError}
        />
      )}

      {cancelToken && (
        <CancelModal
          appt={cancelAppt}
          onConfirm={handleConfirmCancel}
          onClose={() => setCancelToken(null)}
          actionLoading={actionLoading}
          actionError={actionError}
        />
      )}

      {showAddToken && (
        <AddTokenModal
          onAdd={handleAddToken}
          onClose={() => setShowAddToken(false)}
        />
      )}

      <Footer />
      <BackToTop />
    </div>
  );
}

/* Styles moved to /assets/css/my-bookings.css */
