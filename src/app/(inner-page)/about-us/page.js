import { SITE_URL } from "@/lib/site";
import AboutUsClient from "./AboutUsClient";

export const metadata = {
    title: 'About Us - Hadi Consultant',
    description: 'Learn about Hadi Consultant, a premier financial consulting firm with over 15 years of experience in Canadian tax law and financial management.',
    robots: 'index, follow',
    alternates: {
        canonical: `${SITE_URL}/about-us`,
    },
    openGraph: {
        url: `${SITE_URL}/about-us`,
    },
};

export default function AboutUsPage() {
    return <AboutUsClient />;
}
