import HeaderOne from "@/components/header/HeaderOne";
import BackToTop from "@/components/BackToTop";
import Breadcrumb from "@/components/Breadcrumb";
import BlogDetail from "@/components/blog/BlogDetail";
import FooterOne from "@/components/footer/FooterOne";
import Link from "next/link";
import { SITE_URL } from "@/lib/site";

const BASE_URL = 'https://wehoware-saas.vercel.app';
const CLIENT_ID = 'bbd8a4a6-b5d8-4af9-aa5d-becfdcadc3ba';

async function getBlog(slug) {
    try {
        const res = await fetch(`${BASE_URL}/api/public/blogs/${slug}?clientId=${CLIENT_ID}`, {
            next: { revalidate: 60 }
        });
        if (!res.ok) return null;
        const data = await res.json();
        if (data && typeof data === 'object' && !Array.isArray(data)) {
            return data.blog || data.data || data;
        }
        return null;
    } catch (error) {
        console.error('Failed to fetch blog details:', error);
        return null;
    }
}

export async function generateMetadata({ params }) {
    const blog = await getBlog(params.slug);
    if (!blog) {
        return {
            title: 'Blog Not Found - Hadi Consultant',
            robots: 'noindex, nofollow',
        };
    }

    const metaTitle = blog.meta_title || `${blog.title} - Hadi Consultant`;
    const metaDesc = blog.meta_description || blog.excerpt || '';
    const canonical = blog.canonical_url || `${SITE_URL}/blog/${blog.slug}`;
    const robots = blog.robots_meta || 'index, follow';

    return {
        title: metaTitle,
        description: metaDesc,
        keywords: blog.meta_keywords || blog.target_keywords || '',
        robots: robots,
        alternates: { canonical },
        openGraph: {
            title: blog.open_graph_title || metaTitle,
            description: blog.open_graph_description || metaDesc,
            images: blog.open_graph_image ? [{ url: blog.open_graph_image }] : [],
            type: 'article',
            publishedTime: blog.published_at,
            modifiedTime: blog.updated_at,
            url: canonical,
        },
        twitter: {
            card: 'summary_large_image',
            title: blog.twitter_title || metaTitle,
            description: blog.twitter_description || metaDesc,
            images: blog.twitter_image ? [blog.twitter_image] : [],
        },
    };
}

export default async function BlogDetailPage({ params }) {
    const blog = await getBlog(params.slug);

    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'Blog Post', link: '/blog' },
        { label: blog?.title || 'Blog Details' }
    ];

    if (!blog) {
        return (
            <div className="">
                <HeaderOne />
                <Breadcrumb title="Blog Not Found" breadcrumbs={breadcrumbs} />
                <div className="rts-section-gap">
                    <div className="container text-center">
                        <h2>Blog post not found</h2>
                        <p className="disc mt--20">The blog post you are looking for does not exist.</p>
                        <Link className="rts-btn btn-primary mt--30" href="/blog">
                            Back to Blogs
                        </Link>
                    </div>
                </div>
                <FooterOne />
                <BackToTop />
            </div>
        );
    }

    const jsonLd = blog.faq_schema ? blog.faq_schema : {
        '@context': 'https://schema.org',
        '@type': blog.schema_type || 'Article',
        headline: blog.title,
        description: blog.excerpt || blog.description,
        image: blog.thumbnail || blog.open_graph_image || '',
        datePublished: blog.published_at,
        dateModified: blog.updated_at,
        url: `${SITE_URL}/blog/${blog.slug}`,
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="">
                <HeaderOne />
                <Breadcrumb title={blog.title || 'Blog Details'} breadcrumbs={breadcrumbs} />
                <BlogDetail blog={blog} />
                <FooterOne />
                <BackToTop />
            </div>
        </>
    );
}
