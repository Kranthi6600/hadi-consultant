import { SITE_URL } from "@/lib/site";
import MyBookingsClient from "./MyBookingsClient";

export const metadata = {
  title: "My Bookings - Hadi Consultant",
  description:
    "View, reschedule, or cancel all your Hadi Consultant appointments (taxchop.ca).",
  robots: "noindex, follow",
  alternates: {
    canonical: `${SITE_URL}/my-bookings`,
  },
  openGraph: {
    url: `${SITE_URL}/my-bookings`,
  },
};

export default function MyBookingsPage() {
  return <MyBookingsClient />;
}
