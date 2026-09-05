import { SITE_URL } from "@/lib/site";
import ManageBookingClient from "./ManageBookingClient";

export const metadata = {
  title: "Manage Your Booking - Hadi Consultant",
  description:
    "View, reschedule, or cancel your Hadi Consultant appointment (taxchop.ca).",
  robots: "noindex, follow",
  alternates: {
    canonical: `${SITE_URL}/manage-booking`,
  },
  openGraph: {
    url: `${SITE_URL}/manage-booking`,
  },
};

export default function ManageBookingPage() {
  return <ManageBookingClient />;
}
