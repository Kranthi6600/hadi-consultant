"use client"
import React from 'react'
import Link from 'next/link';

function ServiceDetail({ service }) {
    const title = service.title || 'Service Details';
    const description = service.description || '';
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
                                                style={{ maxWidth: '200px', borderRadius: '8px' }}
                                                onError={(e) => { e.target.style.display = 'none'; }}
                                            />
                                        </div>
                                    )}
                                    <h2 className="title">{title}</h2>
                                    {category && category.name && (
                                        <span className="pre-title" style={{
                                            fontSize: '14px',
                                            color: '#DF0A0A',
                                            textTransform: 'uppercase',
                                            fontWeight: 600,
                                            letterSpacing: '1px',
                                            display: 'block',
                                            marginTop: '10px'
                                        }}>
                                            {category.name}
                                        </span>
                                    )}
                                    {description && (
                                        <p className="disc" style={{ maxWidth: '800px', margin: '20px auto 0', fontSize: '18px' }}>
                                            {description}
                                        </p>
                                    )}
                                    <div style={{
                                        marginTop: '20px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        gap: '16px',
                                        flexWrap: 'wrap'
                                    }}>
                                        {service.fee !== undefined && service.fee !== null && (
                                            <span style={{
                                                fontWeight: 700,
                                                color: '#DF0A0A',
                                                fontSize: '20px'
                                            }}>
                                                {service.fee_currency || '$'}{service.fee}
                                                {service.fee_label && ` ${service.fee_label}`}
                                            </span>
                                        )}
                                        {service.duration && (
                                            <span style={{
                                                fontSize: '14px',
                                                color: '#666',
                                                background: '#f5f5f5',
                                                padding: '4px 14px',
                                                borderRadius: '16px'
                                            }}>
                                                {service.duration}
                                            </span>
                                        )}
                                        {service.service_code && (
                                            <span style={{ fontSize: '13px', color: '#888' }}>
                                                Code: {service.service_code}
                                            </span>
                                        )}
                                        {service.rating && (
                                            <span style={{
                                                fontSize: '14px',
                                                color: '#f5a623',
                                                fontWeight: 600
                                            }}>
                                                {service.rating} &#9733;
                                                {service.reviews_count !== undefined && (
                                                    <span style={{ color: '#888', fontWeight: 400 }}> ({service.reviews_count} reviews)</span>
                                                )}
                                            </span>
                                        )}
                                        {service.views !== undefined && (
                                            <span style={{ fontSize: '13px', color: '#888' }}>
                                                {service.views} views
                                            </span>
                                        )}
                                    </div>
                                    {service.tags && service.tags.length > 0 && (
                                        <div style={{
                                            marginTop: '16px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            flexWrap: 'wrap',
                                            gap: '8px'
                                        }}>
                                            {service.tags.map((tag, i) => (
                                                <span key={i} style={{
                                                    fontSize: '13px',
                                                    background: '#eee',
                                                    color: '#555',
                                                    padding: '4px 12px',
                                                    borderRadius: '4px',
                                                    textTransform: 'lowercase'
                                                }}>
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                    {allowShare && (
                                        <div className="details-share" style={{ marginTop: '24px', justifyContent: 'center' }}>
                                            <h6 style={{ marginRight: '10px', display: 'inline' }}>Share:</h6>
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
                                            className="disc service-html-content"
                                            style={{ fontSize: '18px', lineHeight: '1.8', color: '#333' }}
                                            dangerouslySetInnerHTML={{ __html: content }}
                                        />
                                    </div>
                                )}

                                {faqs.length > 0 && (
                                    <div className="service-faqs mb--60">
                                        <h3 className="title mb--30">Frequently Asked Questions</h3>
                                        <div className="accordion" id="serviceFaqAccordion">
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
                                                        data-bs-parent="#serviceFaqAccordion"
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
                            </div>
                        </div>
                    </div>

                    {relatedBlogs.length > 0 && (
                        <div className="row mt--40">
                            <div className="col-12">
                                <h3 className="title mb--30">Related Articles</h3>
                            </div>
                            {relatedBlogs.map((blog) => (
                                <div key={blog.id} className="col-lg-4 col-md-6 col-sm-12 mb--30">
                                    <div className="blog-single-post-listing" style={{ border: '1px solid #eee', borderRadius: '8px', overflow: 'hidden' }}>
                                        {blog.thumbnail && (
                                            <div className="thumbnail">
                                                <Link href={`/blog-details/${blog.slug}`}>
                                                    <img src={blog.thumbnail} alt={blog.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                                                </Link>
                                            </div>
                                        )}
                                        <div className="blog-listing-content" style={{ padding: '20px' }}>
                                            <Link href={`/blog-details/${blog.slug}`}>
                                                <h5 className="title" style={{ fontSize: '18px', marginBottom: '10px' }}>{blog.title}</h5>
                                            </Link>
                                            {blog.excerpt && (
                                                <p className="disc" style={{ fontSize: '14px', color: '#666' }}>{blog.excerpt}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="row mt--80">
                        <div className="cta-one-bg col-12">
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
                </div>
            </div>
        </div>
    )
}

export default ServiceDetail
