"use client"
import React from 'react'
import Link from 'next/link';

const iconPool = ['01.svg', '02.svg', '03.svg', '04.svg', '05.svg', '06.svg', '07.svg', '08.svg', '09.svg', '10.svg', '11.svg', '12.svg', '13.svg', '14.svg', '15.svg', '16.svg', '17.svg', '18.svg', '19.svg', '20.svg', '21.svg', '22.svg', '23.svg', '24.svg'];
const classPool = ['one', 'two', 'three', 'four', 'five', 'six'];

function stripHtml(html) {
    if (!html) return '';
    return html.replace(/<[^>]*>/g, '').trim();
}

function ServiceEleven({ services }) {
    if (!services || services.length === 0) {
        return (
            <div className="rts-service-area rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="rts-title-area service text-center">
                                <p className="pre-title">Services</p>
                                <h2 className="title">What I do</h2>
                            </div>
                            <p className="disc mt--30">No services available at the moment.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <div className="rts-service-area rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="rts-title-area service text-center">
                                <p className="pre-title">Services</p>
                                <h2 className="title">What I do</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid service-main plr--120-service mt--50 plr_md--0 pl_sm--0 pr_sm--0">
                    <div className="background-service row">
                        {services.map((service, index) => {
                            const icon = `assets/images/service/icon/${iconPool[index % iconPool.length]}`;
                            const cls = classPool[index % 6];
                            const category = service.wehoware_service_categories;
                            return (
                                <div key={service.id || index} className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                    <div className={`service-one-inner ${cls}`}>
                                        <div className="thumbnail">
                                            <img
                                                src={icon}
                                                alt={service.thumbnail_alt || service.title || 'service'}
                                                onError={(e) => { e.target.src = `assets/images/service/icon/${iconPool[(index + 1) % iconPool.length]}`; }}
                                            />
                                        </div>
                                        <div className="service-details">
                                            <Link href={`/services/${service.slug}`}>
                                                <h5 className="title">{service.title}</h5>
                                            </Link>
                                            {category && category.name && (
                                                <span className="pre-title" style={{
                                                    fontSize: '13px',
                                                    color: '#DF0A0A',
                                                    textTransform: 'uppercase',
                                                    fontWeight: 600,
                                                    letterSpacing: '1px',
                                                    display: 'block',
                                                    marginBottom: '8px'
                                                }}>
                                                    {category.name}
                                                </span>
                                            )}
                                            <p className="disc">{stripHtml(service.description)}</p>
                                            <div style={{ marginTop: '12px', display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
                                                {service.fee !== undefined && service.fee !== null && (
                                                    <span style={{
                                                        fontWeight: 700,
                                                        color: '#DF0A0A',
                                                        fontSize: '15px'
                                                    }}>
                                                        {service.fee_currency || '$'}{service.fee}
                                                        {service.fee_label && ` ${service.fee_label}`}
                                                    </span>
                                                )}
                                                {service.duration && (
                                                    <span style={{
                                                        fontSize: '13px',
                                                        color: '#666',
                                                        background: '#f5f5f5',
                                                        padding: '3px 10px',
                                                        borderRadius: '12px'
                                                    }}>
                                                        {service.duration}
                                                    </span>
                                                )}
                                                {service.rating && (
                                                    <span style={{
                                                        fontSize: '13px',
                                                        color: '#f5a623',
                                                        fontWeight: 600
                                                    }}>
                                                        {service.rating} &#9733;
                                                        {service.reviews_count !== undefined && (
                                                            <span style={{ color: '#888', fontWeight: 400 }}> ({service.reviews_count})</span>
                                                        )}
                                                    </span>
                                                )}
                                            </div>
                                            {service.tags && service.tags.length > 0 && (
                                                <div style={{ marginTop: '10px', display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                                                    {service.tags.map((tag, i) => (
                                                        <span key={i} style={{
                                                            fontSize: '12px',
                                                            background: '#eee',
                                                            color: '#555',
                                                            padding: '3px 10px',
                                                            borderRadius: '4px',
                                                            textTransform: 'lowercase'
                                                        }}>
                                                            #{tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="row">
                        <div className="cta-one-bg col-12">
                            <div className="cta-one-inner">
                                <div className="cta-left">
                                    <h3 className="title">
                                        Get A Free Quote - Expert Tax Services
                                    </h3>
                                </div>
                                <div className="cta-right">
                                    <Link className="rts-btn btn-white" href={'/contact'}>
                                        Contact Us
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
export default ServiceEleven