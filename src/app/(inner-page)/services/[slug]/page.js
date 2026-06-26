import HeaderOne from "@/components/header/HeaderOne";
import BackToTop from "@/components/BackToTop";
import Breadcrumb from "@/components/Breadcrumb";
import ServiceDetail from "@/components/service/ServiceDetail";
import FooterOne from "@/components/footer/FooterOne";
import Link from "next/link";
import { SITE_URL } from "@/lib/site";

const BASE_URL = 'https://wehoware-saas.vercel.app';
const CLIENT_ID = 'bbd8a4a6-b5d8-4af9-aa5d-becfdcadc3ba';

async function getService(slug) {
    try {
        const res = await fetch(`${BASE_URL}/api/public/services/${slug}?clientId=${CLIENT_ID}`, {
            next: { revalidate: 60 }
        });
        if (!res.ok) return null;
        const data = await res.json();
        if (data && typeof data === 'object' && !Array.isArray(data)) {
            return data.service || data.data || data;
        }
        return null;
    } catch (error) {
        console.error('Failed to fetch service details:', error);
        return null;
    }
}

export async function generateMetadata({ params }) {
    const service = await getService(params.slug);
    if (!service) {
        return {
            title: 'Service Not Found - Hadi Consultant',
            robots: 'noindex, nofollow',
        };
    }

    const metaTitle = service.meta_title || `${service.title} - Hadi Consultant`;
    const metaDesc = service.meta_description || service.description || '';
    const canonical = service.canonical_url || `${SITE_URL}/services/${service.slug}`;
    const robots = service.robots_meta || 'index, follow';

    const metadata = {
        title: metaTitle,
        description: metaDesc,
        keywords: service.meta_keywords || service.target_keywords || '',
        robots: robots,
        alternates: { canonical },
        openGraph: {
            title: service.open_graph_title || metaTitle,
            description: service.open_graph_description || metaDesc,
            images: service.open_graph_image ? [{ url: service.open_graph_image }] : [],
            type: 'website',
            url: canonical,
        },
        twitter: {
            card: 'summary_large_image',
            title: service.twitter_title || metaTitle,
            description: service.twitter_description || metaDesc,
            images: service.twitter_image ? [service.twitter_image] : [],
        },
    };

    return metadata;
}

export default async function ServiceDetailPage({ params }) {
    const service = await getService(params.slug);

    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'Our Service', link: '/services' },
        { label: service?.title || 'Service Details' }
    ];

    if (!service) {
        return (
            <div className="">
                <HeaderOne />
                <Breadcrumb title="Service Not Found" breadcrumbs={breadcrumbs} />
                <div className="rts-section-gap">
                    <div className="container text-center">
                        <h2>Service not found</h2>
                        <p className="disc mt--20">The service you are looking for does not exist.</p>
                        <Link className="rts-btn btn-primary mt--30" href="/services">
                            Back to Services
                        </Link>
                    </div>
                </div>
                <FooterOne />
                <BackToTop />
            </div>
        );
    }

    const jsonLd = service.faq_schema ? service.faq_schema : {
        '@context': 'https://schema.org',
        '@type': service.schema_type || 'Service',
        name: service.title,
        description: service.description,
        image: service.thumbnail || service.open_graph_image || '',
        url: `${SITE_URL}/services/${service.slug}`,
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="">
                <HeaderOne />
                <Breadcrumb title={service.title || 'Service Details'} breadcrumbs={breadcrumbs} />
                <ServiceDetail service={service} />
                <FooterOne />
                <BackToTop />
            </div>
        </>
    );
}
