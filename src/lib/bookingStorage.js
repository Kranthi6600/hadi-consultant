// Shared localStorage helpers for booking tokens.
// The Wehoware API manages appointments by opaque booking_token (no guest
// account or list endpoint), so we persist every booking token the user makes
// and look them up individually.
//
// We store an array of { t: token, s: typeSlug } objects so we can reschedule
// later (the GET appointment response doesn't include the type slug, but the
// availability endpoint requires it).

export const BOOKING_TOKENS_KEY = "hadi_booking_tokens";
export const BOOKING_TOKEN_KEY = "hadi_booking_token"; // legacy single-token

function normalizeEntry(entry) {
  if (!entry) return null;
  if (typeof entry === "string") return { t: entry, s: "" };
  if (entry.t) return { t: entry.t, s: entry.s || "" };
  return null;
}

export function getBookingTokens() {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(BOOKING_TOKENS_KEY);
    let entries = [];
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        entries = parsed.map(normalizeEntry).filter(Boolean);
      }
    }
    // Migrate legacy single-token key into the array.
    const legacy = localStorage.getItem(BOOKING_TOKEN_KEY);
    if (legacy && !entries.some((e) => e.t === legacy)) {
      entries.push({ t: legacy, s: "" });
      localStorage.setItem(BOOKING_TOKENS_KEY, JSON.stringify(entries));
    }
    return entries;
  } catch {
    return [];
  }
}

/** Return just the token strings (for backward compatibility). */
export function getBookingTokenStrings() {
  return getBookingTokens().map((e) => e.t);
}

/** Return the type slug for a given token, or "" if unknown. */
export function getSlugForToken(token) {
  const entries = getBookingTokens();
  const found = entries.find((e) => e.t === token);
  return found ? found.s : "";
}

export function addBookingToken(token, typeSlug = "") {
  if (!token || typeof window === "undefined") return;
  try {
    const entries = getBookingTokens();
    if (!entries.some((e) => e.t === token)) {
      entries.push({ t: token, s: typeSlug });
    } else {
      const idx = entries.findIndex((e) => e.t === token);
      if (typeSlug && !entries[idx].s) entries[idx].s = typeSlug;
    }
    localStorage.setItem(BOOKING_TOKENS_KEY, JSON.stringify(entries));
  } catch {
    /* ignore storage errors */
  }
}

export function removeBookingToken(token) {
  if (!token || typeof window === "undefined") return;
  try {
    const entries = getBookingTokens().filter((e) => e.t !== token);
    localStorage.setItem(BOOKING_TOKENS_KEY, JSON.stringify(entries));
  } catch {
    /* ignore storage errors */
  }
}

export function setLatestBookingToken(token) {
  if (!token || typeof window === "undefined") return;
  try {
    localStorage.setItem(BOOKING_TOKEN_KEY, token);
  } catch {
    /* ignore */
  }
}

export function getLatestBookingToken() {
  if (typeof window === "undefined") return "";
  try {
    return localStorage.getItem(BOOKING_TOKEN_KEY) || "";
  } catch {
    return "";
  }
}
