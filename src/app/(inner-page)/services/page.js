import Header from "@/components/header/Header";
import BackToTop from "@/components/BackToTop";
import Breadcrumb from "@/components/Breadcrumb";
import ServiceEleven from "@/components/service/ServiceEleven";
import Footer from "@/components/footer/Footer";
import { SITE_URL } from "@/lib/site";
import { API_BASE_URL, API_CLIENT_ID } from "@/lib/api";

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
        const res = await fetch(`${API_BASE_URL}/api/public/services?clientId=${API_CLIENT_ID}`, {
            next: { revalidate: 60 }
        });
        if (!res.ok) return { services: [], schema: null };
        const json = await res.json();
        let services = [];
        let schema = null;
        if (Array.isArray(json)) {
            services = json;
        } else if (Array.isArray(json.data)) {
            services = json.data;
            schema = json.schema || null;
        } else if (Array.isArray(json.services)) {
            services = json.services;
            schema = json.schema || null;
        }
        return { services, schema };
    } catch (error) {
        console.error('Failed to fetch services:', error);
        return { services: [], schema: null };
    }
}

export default async function OurServicePage() {
    const { services, schema } = await getServices();

    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'Our Service' }
    ];

    const jsonLdScripts = [];
    if (schema?.item_list) {
        jsonLdScripts.push(schema.item_list);
    }
    if (schema?.collection_page) {
        jsonLdScripts.push(schema.collection_page);
    }

    return (
        <>
            {jsonLdScripts.map((jsonLd, i) => (
                <script
                    key={i}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            ))}
            <div className="">
                <Header />
                <Breadcrumb title="Our Service" breadcrumbs={breadcrumbs} />
                <ServiceEleven services={services} />
                <Footer />
                <BackToTop />
            </div>
        </>
    );
}
