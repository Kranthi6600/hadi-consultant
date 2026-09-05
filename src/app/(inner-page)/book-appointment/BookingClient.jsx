"use client";
import React, { useState, useEffect, useMemo, useCallback } from "react";
import Link from "next/link";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import BackToTop from "@/components/BackToTop";
import Breadcrumb from "@/components/Breadcrumb";
import {
  addBookingToken,
  setLatestBookingToken,
} from "@/lib/bookingStorage";

/* ---------- helpers ---------- */

const USER_TZ =
  (typeof Intl !== "undefined" &&
    Intl.DateTimeFormat().resolvedOptions().timeZone) ||
  "UTC";

// BOOKING_TOKEN_KEY is imported from @/lib/bookingStorage

function asArray(json) {
  if (!json) return [];
  if (Array.isArray(json)) return json;
  if (Array.isArray(json.data)) return json.data;
  if (Array.isArray(json.appointment_types)) return json.appointment_types;
  if (Array.isArray(json.slots)) return json.slots;
  if (Array.isArray(json.availability)) return json.availability;
  return [];
}

function formatPrice(price) {
  if (price === null || price === undefined || price === 0 || price === "0") {
    return "Free";
  }
  const num = typeof price === "string" ? parseFloat(price) : price;
  if (isNaN(num)) return "Free";
  return `$${num} CAD`;
}

function formatDuration(minutes) {
  const m = Number(minutes);
  if (!m || isNaN(m)) return "";
  if (m < 60) return `${m} min`;
  const h = Math.floor(m / 60);
  const rem = m % 60;
  return rem ? `${h}h ${rem}min` : `${h}h`;
}

function toLocalDateInputValue(date) {
  // YYYY-MM-DD in user's local timezone
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function addOneDayYmd(ymd) {
  // Given a YYYY-MM-DD string, return the next day as YYYY-MM-DD.
  const d = new Date(`${ymd}T00:00:00`);
  d.setDate(d.getDate() + 1);
  return toLocalDateInputValue(d);
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

function slotToIso(slot) {
  if (!slot) return null;
  if (typeof slot === "string") return slot;
  return slot.start || slot.scheduled_at || slot.start_time || slot.iso || null;
}

/* ---------- spinner ---------- */
function Spinner({ label }) {
  return (
    <div className="bk-spinner-wrap" role="status" aria-live="polite">
      <span className="bk-spinner" aria-hidden="true" />
      {label && <span className="bk-spinner-label">{label}</span>}
    </div>
  );
}

/* ---------- step indicator ---------- */
function StepIndicator({ current }) {
  const steps = ["Type", "Date & Time", "Your Details", "Confirmed"];
  return (
    <ol className="bk-steps">
      {steps.map((label, i) => {
        const idx = i + 1;
        const state =
          idx < current ? "done" : idx === current ? "active" : "todo";
        return (
          <li key={label} className={`bk-step bk-step--${state}`}>
            <span className="bk-step-dot">{idx}</span>
            <span className="bk-step-label">{label}</span>
          </li>
        );
      })}
    </ol>
  );
}

/* ---------- error banner ---------- */
function ErrorBanner({ message }) {
  if (!message) return null;
  return (
    <div className="bk-error-banner" role="alert">
      <i className="far fa-exclamation-circle" aria-hidden="true" /> {message}
    </div>
  );
}

/* ============================================================
   Step 1: Appointment Type
   ============================================================ */
function StepType({ types, loading, error, selectedSlug, onSelect }) {
  if (loading) return <Spinner label="Loading appointment types…" />;
  if (error) return <ErrorBanner message={error} />;
  if (!types.length)
    return (
      <p className="bk-empty">
        No appointment types are available right now. Please check back soon.
      </p>
    );
  return (
    <div className="bk-type-grid">
      {types.map((t) => {
        const slug = t.slug || t.id;
        const selected = slug === selectedSlug;
        const requires = !!t.requires_confirmation;
        return (
          <button
            type="button"
            key={slug}
            className={`bk-type-card${selected ? " is-selected" : ""}`}
            onClick={() => onSelect(t)}
            aria-pressed={selected}
          >
            <div className="bk-type-head">
              <h3 className="bk-type-name">{t.name || "Appointment"}</h3>
              <span
                className={`bk-badge ${requires ? "bk-badge--pending" : "bk-badge--instant"}`}
              >
                {requires ? "Pending confirmation" : "Instant"}
              </span>
            </div>
            {t.description && (
              <p className="bk-type-desc">{t.description}</p>
            )}
            <div className="bk-type-meta">
              {t.duration ? (
                <span className="bk-meta-item">
                  <i className="far fa-clock" aria-hidden="true" />
                  {formatDuration(t.duration)}
                </span>
              ) : null}
              <span className="bk-meta-item bk-price">
                {formatPrice(t.price)}
              </span>
            </div>
            <span className="bk-type-cta">
              {selected ? "Selected" : "Choose this"}{" "}
              <i className="far fa-arrow-right" aria-hidden="true" />
            </span>
          </button>
        );
      })}
    </div>
  );
}

/* ============================================================
   Step 2: Date & Time
   ============================================================ */
function StepDateTime({
  selectedType,
  date,
  setDate,
  slots,
  loadingSlots,
  slotsError,
  selectedIso,
  onSelectSlot,
  onBack,
}) {
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
    <div className="bk-datetime">
      <div className="bk-field">
        <label htmlFor="bk-date" className="bk-label">
          Choose a date
        </label>
        <input
          id="bk-date"
          type="date"
          className="bk-input"
          min={toLocalDateInputValue(today)}
          max={maxDate}
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <p className="bk-hint">You can book up to 30 days in advance.</p>
      </div>

      <div className="bk-slots-wrap">
        <div className="bk-slots-title">
          Available times
          {selectedType?.name ? <span> · {selectedType.name}</span> : null}
        </div>

        {loadingSlots ? (
          <Spinner label="Finding available times…" />
        ) : slotsError ? (
          <ErrorBanner message={slotsError} />
        ) : !date ? (
          <p className="bk-empty">Please pick a date to see available times.</p>
        ) : slotIsos.length === 0 ? (
          <p className="bk-empty">
            No times available on this day. Please try another date.
          </p>
        ) : (
          <div className="bk-slot-grid">
            {slotIsos.map((iso) => {
              const selected = iso === selectedIso;
              return (
                <button
                  type="button"
                  key={iso}
                  className={`bk-slot${selected ? " is-selected" : ""}`}
                  onClick={() => onSelectSlot(iso)}
                  aria-pressed={selected}
                >
                  {formatTime(iso)}
                </button>
              );
            })}
          </div>
        )}
      </div>

      <div className="bk-nav">
        <button type="button" className="bk-btn bk-btn--ghost" onClick={onBack}>
          <i className="far fa-arrow-left" aria-hidden="true" /> Back
        </button>
        <button
          type="button"
          className="bk-btn bk-btn--primary"
          disabled={!selectedIso}
          onClick={() => onSelectSlot(selectedIso, true)}
        >
          Continue <i className="far fa-arrow-right" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

/* ============================================================
   Step 3: Guest Details
   ============================================================ */
function StepDetails({
  form,
  setForm,
  errors,
  submitting,
  submitError,
  onSubmit,
  onBack,
}) {
  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <form className="bk-form" onSubmit={onSubmit} noValidate>
      {/* honeypot - hidden from humans, using name browsers won't autofill */}
      <div className="bk-honeypot" aria-hidden="true">
        <label htmlFor="company">Company (leave blank)</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="new-password"
          value={form.company}
          onChange={onChange}
          readOnly
          onFocus={(e) => e.target.removeAttribute("readonly")}
        />
      </div>

      <div className="bk-field">
        <label htmlFor="guest_name" className="bk-label">
          Full name <span className="bk-req">*</span>
        </label>
        <input
          id="guest_name"
          name="guest_name"
          type="text"
          className={`bk-input${errors.guest_name ? " is-invalid" : ""}`}
          value={form.guest_name}
          onChange={onChange}
          disabled={submitting}
          required
          autoComplete="name"
        />
        {errors.guest_name && (
          <span className="bk-field-error">{errors.guest_name}</span>
        )}
      </div>

      <div className="bk-field">
        <label htmlFor="guest_email" className="bk-label">
          Email <span className="bk-req">*</span>
        </label>
        <input
          id="guest_email"
          name="guest_email"
          type="email"
          className={`bk-input${errors.guest_email ? " is-invalid" : ""}`}
          value={form.guest_email}
          onChange={onChange}
          disabled={submitting}
          required
          autoComplete="email"
        />
        {errors.guest_email && (
          <span className="bk-field-error">{errors.guest_email}</span>
        )}
      </div>

      <div className="bk-field">
        <label htmlFor="guest_phone" className="bk-label">
          Phone <span className="bk-opt">(optional)</span>
        </label>
        <input
          id="guest_phone"
          name="guest_phone"
          type="tel"
          className="bk-input"
          value={form.guest_phone}
          onChange={onChange}
          disabled={submitting}
          autoComplete="tel"
        />
      </div>

      <div className="bk-field">
        <label htmlFor="notes" className="bk-label">
          Notes <span className="bk-opt">(optional)</span>
        </label>
        <textarea
          id="notes"
          name="notes"
          className="bk-textarea"
          rows={4}
          value={form.notes}
          onChange={onChange}
          disabled={submitting}
          placeholder="Briefly describe what you'd like to discuss."
        />
      </div>

      {submitError && <ErrorBanner message={submitError} />}

      <div className="bk-nav">
        <button
          type="button"
          className="bk-btn bk-btn--ghost"
          onClick={onBack}
          disabled={submitting}
        >
          <i className="far fa-arrow-left" aria-hidden="true" /> Back
        </button>
        <button
          type="submit"
          className="bk-btn bk-btn--primary"
          disabled={submitting}
        >
          {submitting ? (
            <>
              <span className="bk-btn-spinner" aria-hidden="true" /> Booking…
            </>
          ) : (
            <>Confirm Booking</>
          )}
        </button>
      </div>
    </form>
  );
}

/* ============================================================
   Step 4: Confirmation
   ============================================================ */
function StepConfirmation({ result, type, scheduledAt, onBookAnother }) {
  // Determine confirmation requirement. The appointment TYPE's
  // requires_confirmation is the source of truth (we know it from the types
  // API). The POST response may also include requires_confirmation and/or a
  // status — we check those first but fall back to the type if they're absent.
  const apptStatus =
    result?.appointment?.status || result?.status || "";
  const requires =
    apptStatus.toLowerCase() === "pending"
      ? true
      : apptStatus.toLowerCase() === "confirmed"
        ? false
        : !!(
            type?.requires_confirmation ??
            result?.requires_confirmation ??
            result?.appointment?.requires_confirmation
          );
  const status = apptStatus || (requires ? "Pending" : "Confirmed");

  return (
    <div className="bk-confirm">
      <div className="bk-confirm-icon" aria-hidden="true">
        <i className="far fa-check-circle" />
      </div>
      <h2 className="bk-confirm-title">Booking received!</h2>
      <p className="bk-confirm-sub">
        {requires
          ? "We'll confirm your appointment via email shortly."
          : "Your appointment is confirmed!"}
      </p>

      <div className="bk-confirm-card">
        <div className="bk-confirm-row">
          <span className="bk-confirm-key">Type</span>
          <span className="bk-confirm-val">
            {(typeof result?.appointment?.type === "string"
              ? result.appointment.type
              : result?.appointment?.type?.name) ||
              result?.appointment_type?.name ||
              result?.appointment_type_name ||
              type?.name ||
              "—"}
          </span>
        </div>
        <div className="bk-confirm-row">
          <span className="bk-confirm-key">Date</span>
          <span className="bk-confirm-val">
            {formatLongDate(scheduledAt)}
          </span>
        </div>
        <div className="bk-confirm-row">
          <span className="bk-confirm-key">Time</span>
          <span className="bk-confirm-val">{formatTime(scheduledAt)}</span>
        </div>
        <div className="bk-confirm-row">
          <span className="bk-confirm-key">Status</span>
          <span className="bk-confirm-val">
            <span
              className={`bk-badge ${requires ? "bk-badge--pending" : "bk-badge--instant"}`}
            >
              {status}
            </span>
          </span>
        </div>
      </div>

      <div className="bk-nav bk-nav--center">
        <Link href="/my-bookings" className="bk-btn bk-btn--primary">
          <i className="far fa-calendar-alt" aria-hidden="true" /> View / Manage
          Booking
        </Link>
        <button
          type="button"
          className="bk-btn bk-btn--ghost"
          onClick={onBookAnother}
        >
          Book Another
        </button>
      </div>
    </div>
  );
}

/* ============================================================
   Main client
   ============================================================ */
export default function BookingClient() {
  const breadcrumbs = [
    { label: "Home", link: "/" },
    { label: "Book Appointment" },
  ];

  const [step, setStep] = useState(1);
  const [types, setTypes] = useState([]);
  const [loadingTypes, setLoadingTypes] = useState(true);
  const [typesError, setTypesError] = useState("");

  const [selectedType, setSelectedType] = useState(null);

  const [date, setDate] = useState("");
  const [slots, setSlots] = useState([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [slotsError, setSlotsError] = useState("");
  const [selectedIso, setSelectedIso] = useState("");

  const [form, setForm] = useState({
    guest_name: "",
    guest_email: "",
    guest_phone: "",
    notes: "",
    company: "", // honeypot
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [result, setResult] = useState(null);

  /* fetch appointment types on mount */
  useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoadingTypes(true);
      setTypesError("");
      try {
        const res = await fetch("/api/proxy-appointments?op=types", {
          cache: "no-store",
        });
        const json = await res.json();
        if (cancelled) return;
        if (!res.ok) {
          setTypesError(json?.error || "Could not load appointment types.");
          setTypes([]);
        } else {
          setTypes(asArray(json));
        }
      } catch {
        if (!cancelled)
          setTypesError("Could not load appointment types. Please try again.");
      } finally {
        if (!cancelled) setLoadingTypes(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  /* fetch availability when date changes */
  const fetchAvailability = useCallback(
    async (dateStr) => {
      if (!dateStr || !selectedType?.slug) return;
      setLoadingSlots(true);
      setSlotsError("");
      setSlots([]);
      setSelectedIso("");
      try {
        // Per Wehoware spec, from/to are YYYY-MM-DD and `from` must be before `to`.
        // For a single selected day, send `to` as the next calendar day so the
        // range is valid and we still only get the selected day's slots.
        const toDate = addOneDayYmd(dateStr);
        const url =
          `/api/proxy-appointments?op=availability` +
          `&appointment_type_slug=${encodeURIComponent(selectedType.slug)}` +
          `&from=${encodeURIComponent(dateStr)}&to=${encodeURIComponent(toDate)}`;
        const res = await fetch(url, { cache: "no-store" });
        const json = await res.json();
        if (!res.ok) {
          setSlotsError(json?.error || "Could not load available times.");
          setSlots([]);
        } else {
          setSlots(asArray(json));
        }
      } catch {
        setSlotsError("Could not load available times. Please try again.");
      } finally {
        setLoadingSlots(false);
      }
    },
    [selectedType]
  );

  useEffect(() => {
    if (date && selectedType?.slug) fetchAvailability(date);
  }, [date, selectedType, fetchAvailability]);

  /* handlers */
  const handleSelectType = (t) => {
    setSelectedType(t);
    setDate("");
    setSlots([]);
    setSelectedIso("");
    setStep(2);
  };

  const handleSelectSlot = (iso, advance) => {
    setSelectedIso(iso);
    if (advance) setStep(3);
  };

  const validate = () => {
    const e = {};
    if (!form.guest_name.trim()) e.guest_name = "Full name is required.";
    if (!form.guest_email.trim()) e.guest_email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.guest_email))
      e.guest_email = "Please enter a valid email address.";
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");
    const e2 = validate();
    setErrors(e2);
    if (Object.keys(e2).length > 0) return;

    // honeypot: silently "succeed" without calling the API
    // Disabled client-side check — browser autofill was causing false positives.
    // The server still receives honeypot: "" in the POST body.

    setSubmitting(true);
    try {
      const payload = {
        guest_name: form.guest_name.trim(),
        guest_email: form.guest_email.trim(),
        guest_phone: form.guest_phone.trim() || undefined,
        appointment_type_id: selectedType.id,
        appointment_type_slug: selectedType.slug,
        scheduled_at: selectedIso,
        notes: form.notes.trim() || undefined,
        timezone: USER_TZ,
        honeypot: "",
      };
      const res = await fetch("/api/proxy-appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok) {
        setSubmitError(json?.error || "Booking failed. Please try again.");
        return;
      }
      const token =
        json?.booking_token ||
        json?.appointment?.booking_token ||
        json?.data?.booking_token;
      if (token) {
        addBookingToken(token, selectedType?.slug || "");
        setLatestBookingToken(token);
      }
      setResult(json);
      setStep(4);
    } catch {
      setSubmitError("Booking failed. Please try again or call us.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleBookAnother = () => {
    setStep(1);
    setSelectedType(null);
    setDate("");
    setSlots([]);
    setSelectedIso("");
    setForm({
      guest_name: "",
      guest_email: "",
      guest_phone: "",
      notes: "",
      company: "",
    });
    setErrors({});
    setSubmitError("");
    setResult(null);
  };

  return (
    <div className="">
      <Header />
      <Breadcrumb title="Book an Appointment" breadcrumbs={breadcrumbs} />

      <section className="bk-section rts-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="bk-wrap">
                <div className="bk-head">
                  <p className="pre-title">Schedule a Consultation</p>
                  <h2 className="title">Book Your Appointment</h2>
                  <p className="bk-sub">
                    Pick a time that works for you. All consultations with
                    Hadi Consultant are confidential.
                  </p>
                </div>

                <StepIndicator current={step} />

                <div className="bk-card">
                  {step === 1 && (
                    <StepType
                      types={types}
                      loading={loadingTypes}
                      error={typesError}
                      selectedSlug={selectedType?.slug}
                      onSelect={handleSelectType}
                    />
                  )}

                  {step === 2 && selectedType && (
                    <StepDateTime
                      selectedType={selectedType}
                      date={date}
                      setDate={setDate}
                      slots={slots}
                      loadingSlots={loadingSlots}
                      slotsError={slotsError}
                      selectedIso={selectedIso}
                      onSelectSlot={handleSelectSlot}
                      onBack={() => setStep(1)}
                    />
                  )}

                  {step === 3 && selectedType && (
                    <StepDetails
                      form={form}
                      setForm={setForm}
                      errors={errors}
                      submitting={submitting}
                      submitError={submitError}
                      onSubmit={handleSubmit}
                      onBack={() => setStep(2)}
                    />
                  )}

                  {step === 4 && result && (
                    <StepConfirmation
                      result={result}
                      type={selectedType}
                      scheduledAt={selectedIso}
                      onBookAnother={handleBookAnother}
                    />
                  )}
                </div>
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

/* Styles moved to /assets/css/booking.css */
