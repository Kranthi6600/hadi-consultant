import Link from 'next/link';
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import BackToTop from "@/components/BackToTop";
import BlogListMain from "./BlogListMain";
import { SITE_URL } from "@/lib/site";
import { API_BASE_URL, API_CLIENT_ID } from "@/lib/api";

export const metadata = {
    title: 'Blog - Hadi Consultant',
    description: 'Read expert insights on tax, accounting, and business growth from Hadi Consultant.',
    robots: 'index, follow',
    alternates: {
        canonical: `${SITE_URL}/blog`,
    },
    openGraph: {
        url: `${SITE_URL}/blog`,
    },
};

async function getBlogs(page = 1) {
    try {
        const res = await fetch(`${API_BASE_URL}/api/public/blogs?clientId=${API_CLIENT_ID}&page=${page}&limit=8`, {
            next: { revalidate: 60 }
        });
        if (!res.ok) return { data: [], pagination: { totalItems: 0, page: 1, limit: 8, totalPages: 1 }, schema: null };
        const json = await res.json();
        const data = Array.isArray(json.data) ? json.data : (Array.isArray(json) ? json : []);
        const pagination = json.pagination || { totalItems: data.length, page: 1, limit: 8, totalPages: 1 };
        const schema = json.schema || null;
        return { data, pagination, schema };
    } catch (error) {
        console.error('Failed to fetch blogs:', error);
        return { data: [], pagination: { totalItems: 0, page: 1, limit: 8, totalPages: 1 }, schema: null };
    }
}

export default async function BlogsPage({ searchParams }) {
    const page = parseInt(searchParams?.page, 10) || 1;
    const { data: blogs, pagination, schema } = await getBlogs(page);

    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'Blog Post' }
    ];

    const jsonLdScripts = [];
    if (schema?.item_list) {
        jsonLdScripts.push(schema.item_list);
    }
    if (schema?.collection_page) {
        jsonLdScripts.push(schema.collection_page);
    }

    const allTags = [...new Set(blogs.flatMap(b => b.tags || []))];
    const allCategories = [...new Map(blogs.map(b => {
        const cat = b.wehoware_blog_categories;
        return cat ? [cat.id, cat] : [null, null];
    }).filter(([k]) => k !== null)).values()];

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
            <Breadcrumb title="Blog Post" breadcrumbs={breadcrumbs} />
            <BackToTop />
            <div className="rts-blog-grid-area rts-section-gap">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-xl-8 col-md-12 col-sm-12 col-12 pr--40 pr_md--0 pr_sm-controler--0">
                            {blogs.length === 0 ? (
                                <div className="text-center">
                                    <p className="disc">No blog posts available at the moment.</p>
                                </div>
                            ) : (
                                <>
                                    <div className="row g-5">
                                        {blogs.map((blog, index) => (
                                            <div key={blog.id || index} className="col-lg-6 col-md-6 col-sm-12 col-12">
                                                <div className="blog-grid-inner">
                                                    <BlogListMain blog={blog} />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    {pagination.totalPages > 1 && (
                                        <div className="row mt--30">
                                            <div className="col-12">
                                                <div className="text-center">
                                                    <div className="pagination">
                                                        {Array.from({ length: pagination.totalPages }, (_, i) => {
                                                            const p = i + 1;
                                                            const isActive = p === page;
                                                            return (
                                                                <Link
                                                                    key={p}
                                                                    href={`/blog?page=${p}`}
                                                                    className={isActive ? 'active' : ''}
                                                                    style={{
                                                                        display: 'inline-block',
                                                                        padding: '10px 15px',
                                                                        margin: '0 5px',
                                                                        border: '1px solid #e0e0e0',
                                                                        backgroundColor: isActive ? '#DF0A0A' : '#fff',
                                                                        color: isActive ? '#fff' : '#333',
                                                                        borderRadius: '5px',
                                                                        fontSize: '14px',
                                                                        fontWeight: '500',
                                                                        textDecoration: 'none'
                                                                    }}
                                                                >
                                                                    {p.toString().padStart(2, '0')}
                                                                </Link>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                        <div className="col-xl-4 col-md-12 col-sm-12 col-12">
                            <div className="rts-single-wized search">
                                <div className="wized-header">
                                    <h5 className="title">Search Here</h5>
                                </div>
                                <div className="wized-body">
                                    <div className="rts-search-wrapper">
                                        <input className="Search" type="text" placeholder="Enter Keyword" />
                                        <button><i className="fal fa-search" /></button>
                                    </div>
                                </div>
                            </div>
                            {allCategories.length > 0 && (
                                <div className="rts-single-wized Categories">
                                    <div className="wized-header">
                                        <h5 className="title">Categories</h5>
                                    </div>
                                    <div className="wized-body">
                                        {allCategories.map((cat) => (
                                            <ul className="single-categories" key={cat.id}>
                                                <li>
                                                    <Link href={`/blog?category=${cat.slug}`}>
                                                        {cat.name} <i className="far fa-long-arrow-right" />
                                                    </Link>
                                                </li>
                                            </ul>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {blogs.length > 0 && (
                                <div className="rts-single-wized Recent-post">
                                    <div className="wized-header">
                                        <h5 className="title">Recent Posts</h5>
                                    </div>
                                    <div className="wized-body">
                                        {blogs.slice(0, 4).map((post) => (
                                            <div className="recent-post-single" key={post.id}>
                                                <div className="thumbnail">
                                                    <Link href={`/blog/${post.slug}`}>
                                                        {post.thumbnail ? (
                                                            <img src={post.thumbnail} alt={post.thumbnail_alt || post.title} style={{ width: '80px', height: '60px', objectFit: 'cover', borderRadius: '4px' }} />
                                                        ) : (
                                                            <img src="assets/images/blog/details/recent-post/01.png" alt="Blog_post" />
                                                        )}
                                                    </Link>
                                                </div>
                                                <div className="content-area">
                                                    <div className="user">
                                                        <i className="fal fa-clock" />
                                                        <span>{post.read_time ? `${post.read_time} min read` : 'Blog'}</span>
                                                    </div>
                                                    <Link className="post-title" href={`/blog/${post.slug}`}>
                                                        <h6 className="title">{post.title}</h6>
                                                    </Link>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {allTags.length > 0 && (
                                <div className="rts-single-wized">
                                    <div className="wized-header">
                                        <h5 className="title">Popular Tags</h5>
                                    </div>
                                    <div className="wized-body">
                                        <div className="tags-wrapper">
                                            {allTags.map((tag, i) => (
                                                <Link href={`/blog?tag=${tag}`} key={i}>{tag}</Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div className="rts-single-wized contact">
                                <div className="wized-header">
                                    <img src="/assets/images/cropped-cropped-HADI_CONSULTANTS_logo-removebg-preview-140x74.webp" alt="HADI CONSULTANTS logo" />
                                </div>
                                <div className="wized-body">
                                    <h5 className="title">Need Help? We Are Here To Help You</h5>
                                    <Link className="rts-btn btn-primary" href="/contact">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            </div>
        </>
    )
}
