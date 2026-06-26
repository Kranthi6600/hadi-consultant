"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link';

const iconPool = ['01.svg', '02.svg', '03.svg', '04.svg', '05.svg', '06.svg'];
const classPool = ['one', 'two', 'three', 'four', 'five', 'six'];

function stripHtml(html) {
    if (!html) return '';
    return html.replace(/<[^>]*>/g, '').trim();
}

function Service() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("/api/proxy-services")
            .then((res) => res.json())
            .then((data) => setServices(data.data || []))
            .catch(() => setServices([]));
    }, []);

    return (
        <div>
            <div className="rts-service-area rts-section-gapBottom" id="service">
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
                        {services.length === 0 && (
                            <div className="col-12 text-center">
                                <p className="disc mt--30">No services available at the moment.</p>
                            </div>
                        )}
                        {services.map((service, index) => {
                            const icon = service.thumbnail ? service.thumbnail : `assets/images/service/icon/${iconPool[index % 6]}`;
                            const cls = classPool[index % 6];
                            return (
                                <div key={service.id || index} className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                    <div className={`service-one-inner ${cls}`}>
                                        <div className="thumbnail">
                                            <img
                                                src={icon}
                                                alt={service.thumbnail_alt || service.title || 'service'}
                                                onError={(e) => { e.target.src = `assets/images/service/icon/${iconPool[index % 6]}`; }}
                                            />
                                        </div>
                                        <div className="service-details">
                                            <Link href={`/services/${service.slug}`}>
                                                <h5 className="title">{service.title}</h5>
                                            </Link>
                                            <p className="disc">{stripHtml(service.description)}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="row">
                        <div className="col-12 text-center mt--60 mb--60">
                            <Link className="rts-btn btn-primary btn-large" href="/services">
                                View All Services
                            </Link>
                        </div>
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
                                    <Link className="rts-btn btn-white" href="/contact">
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
export default Service
