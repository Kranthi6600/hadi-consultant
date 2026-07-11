"use client"
import React from 'react'
import Link from 'next/link';

function stripHtml(html) {
    if (!html) return '';
    return html.replace(/<[^>]*>/g, '').trim();
}

function ServiceDetail({ service }) {
    const title = service.title || 'Service Details';
    const description = stripHtml(service.description || '');
    const content = service.content || '';
    const thumbnail = service.thumbnail || '';
    const category = service.wehoware_service_categories;
    const faqs = service.faqs || [];
    const relatedBlogs = service.related_blogs || [];
    const ctaHeading = service.cta_heading || `Need Help With ${title}?`;
    const ctaBody = service.cta_body || '';
    const ctaBtnText = service.cta_button_text || 'Get In Touch';
    const ctaBtnUrl = service.cta_button_url || '/contact';
    const allowShare = service.allow_social_share;

    const publishedDate = (service.published_at || service.created_at)
        ? new Date(service.published_at || service.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
        : '';

    const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
    const shareText = encodeURIComponent(title);

    return (
        <div>
            <div className="rts-service-details-area rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="service-details-wrapper">
                                <div className="service-details-header text-center mb--50">
                                    {thumbnail && (
                                        <div className="thumbnail mb--30">
                                            <img
                                                src={thumbnail}
                                                alt={service.thumbnail_alt || title}
                                                onError={(e) => { e.target.style.display = 'none'; }}
                                            />
                                        </div>
                                    )}
                                    <h2 className="title">{title}</h2>
                                    {description && (
                                        <p className="disc">
                                            {description}
                                        </p>
                                    )}
                                    <div className="service-meta">
                                        {publishedDate && (
                                            <span className="meta-date">
                                                <i className="far fa-calendar" />
                                                {publishedDate}
                                            </span>
                                        )}
                                        {service.rating !== undefined && (
                                            <span className="meta-rating">
                                                {service.rating} &#9733;
                                                {service.reviews_count !== undefined && (
                                                    <span className="reviews-count"> ({service.reviews_count} reviews)</span>
                                                )}
                                            </span>
                                        )}
                                        {service.views !== undefined && (
                                            <span className="meta-views">
                                                {service.views} views
                                            </span>
                                        )}
                                    </div>
                                    {service.tags && service.tags.length > 0 && (
                                        <div className="service-tags">
                                            {service.tags.map((tag, i) => (
                                                <span key={i}>#{tag}</span>
                                            ))}
                                        </div>
                                    )}
                                    {allowShare && (
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
                                    )}
                                </div>

                                {content && (
                                    <div className="service-details-content mb--60">
                                        <div
                                            className="service-html-content"
                                            dangerouslySetInnerHTML={{ __html: content }}
                                        />
                                    </div>
                                )}

                                {faqs.length > 0 && (
                                    <div className="service-faqs mb--60">
                                        <h3 className="title mb--30">Frequently Asked Questions</h3>
                                        <div className="accordion accordion-one-inner" id="serviceFaqAccordion">
                                            {faqs.map((faq, index) => (
                                                <div className="accordion-item" key={faq.id || index}>
                                                    <h2 className="accordion-header" id={`faqHeading-${index}`}>
                                                        <button
                                                            className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
                                                            type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target={`#faqCollapse-${index}`}
                                                            aria-expanded={index === 0}
                                                            aria-controls={`faqCollapse-${index}`}
                                                        >
                                                            {faq.question}
                                                        </button>
                                                    </h2>
                                                    <div
                                                        id={`faqCollapse-${index}`}
                                                        className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                                                        aria-labelledby={`faqHeading-${index}`}
                                                        data-bs-parent="#serviceFaqAccordion"
                                                    >
                                                        <div className="accordion-body">
                                                            {faq.answer}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {relatedBlogs.length > 0 && (
                        <div className="related-articles">
                            <div className="row mt--40">
                                <div className="col-12">
                                    <h3 className="title mb--30">Related Articles</h3>
                                </div>
                                {relatedBlogs.map((blog) => (
                                    <div key={blog.id} className="col-lg-4 col-md-6 col-sm-12 mb--30">
                                        <div className="blog-single-post-listing">
                                            {blog.thumbnail && (
                                                <div className="thumbnail">
                                                    <Link href={`/blog/${blog.slug}`}>
                                                        <img src={blog.thumbnail} alt={blog.title} />
                                                    </Link>
                                                </div>
                                            )}
                                            <div className="blog-listing-content">
                                                <Link href={`/blog/${blog.slug}`} className="blog-title">
                                                    <h5 className="title">{blog.title}</h5>
                                                </Link>
                                                {blog.excerpt && (
                                                    <p className="disc">{blog.excerpt}</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="row mt--80">
                        <div className="cta-one-bg col-12">
                            <div className="cta-one-inner">
                                <div className="cta-left">
                                    <h3 className="title">{ctaHeading}</h3>
                                    {ctaBody && <p className="disc">{ctaBody}</p>}
                                </div>
                                <div className="cta-right">
                                    <Link className="rts-btn btn-white" href={ctaBtnUrl}>
                                        {ctaBtnText}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceDetail
