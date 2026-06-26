"use client"
import React from 'react'
import Link from 'next/link';

function stripHtml(html) {
    if (!html) return '';
    return html.replace(/<[^>]*>/g, '').trim();
}

function BlogDetail({ blog }) {
    const title = blog.title || 'Blog Details';
    const excerpt = stripHtml(blog.excerpt || '');
    const content = blog.content || '';
    const thumbnail = blog.thumbnail || '';
    const category = blog.wehoware_blog_categories;
    const faqs = blog.faqs || [];
    const relatedServices = blog.related_services || [];
    const ctaHeading = blog.cta_heading || `Enjoyed this article?`;
    const ctaBody = blog.cta_body || '';
    const ctaBtnText = blog.cta_button_text || 'Get Started';
    const ctaBtnUrl = blog.cta_button_url || '/contact';
    const allowShare = blog.allow_social_share;

    const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
    const shareText = encodeURIComponent(title);

    const publishedDate = blog.published_at
        ? new Date(blog.published_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
        : '';

    return (
        <div>
            <div className="rts-blog-list-area rts-section-gap">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-xl-8 col-md-12 col-sm-12 col-12">
                            <div className="blog-single-post-listing details mb--0">
                                {thumbnail && (
                                    <div className="thumbnail">
                                        <img
                                            src={thumbnail}
                                            alt={blog.thumbnail_alt || title}
                                            style={{ width: '100%', maxHeight: '450px', objectFit: 'cover', borderRadius: '8px' }}
                                            onError={(e) => { e.target.style.display = 'none'; }}
                                        />
                                    </div>
                                )}
                                <div className="blog-listing-content">
                                    <div className="user-info">
                                        <div className="single">
                                            <i className="far fa-clock" />
                                            <span>{blog.read_time ? `${blog.read_time} min read` : 'Blog'}</span>
                                        </div>
                                        {category && category.name && (
                                            <div className="single">
                                                <i className="far fa-tags" />
                                                <span>{category.name}</span>
                                            </div>
                                        )}
                                        {publishedDate && (
                                            <div className="single">
                                                <i className="far fa-calendar" />
                                                <span>{publishedDate}</span>
                                            </div>
                                        )}
                                    </div>
                                    <h3 className="title">{title}</h3>
                                    {excerpt && (
                                        <p className="disc para-1" style={{ fontSize: '18px', color: '#555', fontStyle: 'italic' }}>
                                            {excerpt}
                                        </p>
                                    )}
                                    {content && (
                                        <div
                                            className="disc blog-html-content"
                                            style={{ fontSize: '18px', lineHeight: '1.8', color: '#333' }}
                                            dangerouslySetInnerHTML={{ __html: content }}
                                        />
                                    )}

                                    <div className="row align-items-center mt--40">
                                        <div className="col-lg-6 col-md-12">
                                            {blog.tags && blog.tags.length > 0 && (
                                                <div className="details-tag">
                                                    <h6>Tags:</h6>
                                                    {blog.tags.map((tag, i) => (
                                                        <button key={i}>{tag}</button>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                        {allowShare && (
                                            <div className="col-lg-6 col-md-12">
                                                <div className="details-share">
                                                    <h6>Share:</h6>
                                                    <button onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank')}>
                                                        <i className="fab fa-facebook-f" />
                                                    </button>
                                                    <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${shareText}&url=${encodeURIComponent(shareUrl)}`, '_blank')}>
                                                        <i className="fab fa-twitter" />
                                                    </button>
                                                    <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank')}>
                                                        <i className="fab fa-linkedin-in" />
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {blog.show_author_box && (
                                        <div className="author-area" style={{ marginTop: '40px' }}>
                                            <div className="author-details team">
                                                <span>{category?.name || 'Author'}</span>
                                                <h5>Hadi Consultant</h5>
                                                <p className="disc">
                                                    Expert tax and financial consulting services for individuals and businesses across Canada.
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {faqs.length > 0 && (
                                <div className="service-faqs mb--60 mt--60">
                                    <h3 className="title mb--30">Frequently Asked Questions</h3>
                                    <div className="accordion" id="blogFaqAccordion">
                                        {faqs.map((faq, index) => (
                                            <div className="accordion-item" key={faq.id || index} style={{
                                                border: '1px solid #e5e5e5',
                                                borderRadius: '8px',
                                                marginBottom: '12px',
                                                overflow: 'hidden'
                                            }}>
                                                <h2 className="accordion-header" id={`faqHeading-${index}`}>
                                                    <button
                                                        className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target={`#faqCollapse-${index}`}
                                                        aria-expanded={index === 0}
                                                        aria-controls={`faqCollapse-${index}`}
                                                        style={{ fontWeight: 600, fontSize: '16px' }}
                                                    >
                                                        {faq.question}
                                                    </button>
                                                </h2>
                                                <div
                                                    id={`faqCollapse-${index}`}
                                                    className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                                                    aria-labelledby={`faqHeading-${index}`}
                                                    data-bs-parent="#blogFaqAccordion"
                                                >
                                                    <div className="accordion-body" style={{ fontSize: '15px', color: '#555', lineHeight: '1.7' }}>
                                                        {faq.answer}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {relatedServices.length > 0 && (
                                <div className="row mt--40">
                                    <div className="col-12">
                                        <h3 className="title mb--30">Related Services</h3>
                                    </div>
                                    {relatedServices.map((svc) => (
                                        <div key={svc.id} className="col-lg-6 col-md-6 col-sm-12 mb--30">
                                            <div className="blog-single-post-listing" style={{ border: '1px solid #eee', borderRadius: '8px', overflow: 'hidden' }}>
                                                {svc.thumbnail && (
                                                    <div className="thumbnail">
                                                        <Link href={`/services/${svc.slug}`}>
                                                            <img src={svc.thumbnail} alt={svc.title} style={{ width: '100%', height: '160px', objectFit: 'cover' }} />
                                                        </Link>
                                                    </div>
                                                )}
                                                <div className="blog-listing-content" style={{ padding: '20px' }}>
                                                    <Link href={`/services/${svc.slug}`}>
                                                        <h5 className="title" style={{ fontSize: '18px', marginBottom: '10px' }}>{svc.title}</h5>
                                                    </Link>
                                                    {svc.description && (
                                                        <p className="disc" style={{ fontSize: '14px', color: '#666' }}>{svc.description}</p>
                                                    )}
                                                    {svc.fee !== undefined && svc.fee !== null && (
                                                        <span style={{ fontWeight: 700, color: '#DF0A0A', fontSize: '15px' }}>
                                                            {svc.fee_currency || '$'}{svc.fee}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            <div className="cta-one-bg col-12 mt--60">
                                <div className="cta-one-inner">
                                    <div className="cta-left">
                                        <h3 className="title">{ctaHeading}</h3>
                                        {ctaBody && <p className="disc" style={{ marginTop: '8px' }}>{ctaBody}</p>}
                                    </div>
                                    <div className="cta-right">
                                        <Link className="rts-btn btn-white" href={ctaBtnUrl}>
                                            {ctaBtnText}
                                        </Link>
                                    </div>
                                </div>
                            </div>
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
        </div>
    )
}

export default BlogDetail
