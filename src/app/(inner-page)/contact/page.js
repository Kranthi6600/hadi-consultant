import { SITE_URL } from "@/lib/site";
import ContactClient from "./ContactClient";

export const metadata = {
    title: 'Contact Us - Hadi Consultant',
    description: 'Get in touch with Hadi Consultant for expert tax, accounting, and financial consulting services in Mississauga, Ontario.',
    robots: 'index, follow',
    alternates: {
        canonical: `${SITE_URL}/contact`,
    },
    openGraph: {
        url: `${SITE_URL}/contact`,
    },
};

export default function ContactPage() {
    return <ContactClient />;
}
