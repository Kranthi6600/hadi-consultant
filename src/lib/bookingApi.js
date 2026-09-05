// Wehoware public booking API configuration for taxchop.ca (Hadi Consultant)
export const BOOKING_API_BASE =
  process.env.BOOKING_API_BASE || "https://www.app.wehoware.ca/api/public";
// The Wehoware public API scopes requests via client_slug / clientId / domain.
// Hadi Consultants' publicSlug is "hadi-consultants" — this works on both the
// current production API and the upcoming updated deploy, so it's the safest
// identifier. Switch to domain=taxchop.ca or clientId=... later if desired.
export const BOOKING_CLIENT_SLUG =
  process.env.BOOKING_CLIENT_SLUG || "hadi-consultants";
export const BOOKING_CLIENT_PARAM = `client_slug=${BOOKING_CLIENT_SLUG}`;

/**
 * Map an upstream API status code to a friendly, user-facing message
 * per the booking widget error handling spec.
 */
export function bookingErrorMessage(status) {
  switch (status) {
    case 400:
      return "Please check your input and try again.";
    case 404:
      return "Appointment type not found.";
    case 409:
      return "This time slot was just booked by someone else. Please pick another time.";
    case 429:
      return "Too many requests. Please wait a moment and try again.";
    case 500:
    default:
      return "Something went wrong. Please try again or call us.";
  }
}
