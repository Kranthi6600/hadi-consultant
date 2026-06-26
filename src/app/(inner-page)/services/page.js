import HeaderOne from "@/components/header/HeaderOne";
import BackToTop from "@/components/BackToTop";
import Breadcrumb from "@/components/Breadcrumb";
import ServiceEleven from "@/components/service/ServiceEleven";
import FooterOne from "@/components/footer/FooterOne";
import { SITE_URL } from "@/lib/site";

const BASE_URL = 'https://wehoware-saas.vercel.app';
const CLIENT_ID = 'bbd8a4a6-b5d8-4af9-aa5d-becfdcadc3ba';

export const metadata = {
    title: 'Our Services - Hadi Consultant',
    description: 'Explore our comprehensive range of tax, accounting, and financial services tailored for individuals and businesses.',
    robots: 'index, follow',
    alternates: {
        canonical: `${SITE_URL}/services`,
    },
    openGraph: {
        url: `${SITE_URL}/services`,
    },
};

async function getServices() {
    try {
        const res = await fetch(`${BASE_URL}/api/public/services?clientId=${CLIENT_ID}`, {
            next: { revalidate: 60 }
        });
        if (!res.ok) return [];
        const data = await res.json();
        if (Array.isArray(data)) return data;
        if (Array.isArray(data.services)) return data.services;
        if (Array.isArray(data.data)) return data.data;
        return [];
    } catch (error) {
        console.error('Failed to fetch services:', error);
        return [];
    }
}

export default async function OurServicePage() {
    const services = await getServices();

    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'Our Service' }
    ];

    return (
        <div className="">
            <HeaderOne />
            <Breadcrumb title="Our Service" breadcrumbs={breadcrumbs} />
            <ServiceEleven services={services} />
            <FooterOne />
            <BackToTop />
        </div>
    );
}
