import { SITE_URL } from "@/lib/site";
import BookingClient from "./BookingClient";

export const metadata = {
  title: "Book an Appointment - Hadi Consultant",
  description:
    "Book a confidential tax, accounting, or financial consulting appointment with Hadi Consultant (taxchop.ca). Choose a time that works for you.",
  robots: "index, follow",
  alternates: {
    canonical: `${SITE_URL}/book-appointment`,
  },
  openGraph: {
    url: `${SITE_URL}/book-appointment`,
  },
};

export default function BookAppointmentPage() {
  return <BookingClient />;
}
