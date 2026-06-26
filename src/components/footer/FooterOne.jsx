"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link';

function FooterOne() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("/api/proxy-services")
            .then((res) => res.json())
            .then((data) => setServices((data.data || []).slice(0, 4)))
            .catch(() => setServices([]));
    }, []);

    return (
        <div>
            <div className="rts-footer-area footer-one rts-section-gapTop bg-footer-one" id='f-contact'>
                <div className="container bg-shape-f1">
                    <div className="row">
                        <div className="col-12">
                            <div className="rts-cta-wrapper">
                                <div className="background-cta">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="cta-left-wrapepr">
                                                <p className="cta-disc">Practical Tax and Finance Advice</p>
                                                <h3 className="title">Get Expert Tax Updates</h3>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <form className="cta-input-arae">
                                                <input type="email" name="email" placeholder="Enter Email Address" required="" />
                                                <button type="submit" className="rts-btn btn-primary">Subscribe Now</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row pt--120 pt_sm--80 pb--80 pb_sm--40">
                        <div className="col-xl-4 col-md-6 col-sm-12 col-12">
                            <div className="footer-one-single-wized">
                                <div className="wized-title">
                                    <h5 className="title">Quick Links</h5>
                                    <img src="/assets/images/footer/under-title.png" alt="hadi_consultant_footer" />
                                </div>
                                <div className="quick-link-inner">
                                    <ul className="links">
                                        <li>
                                            <Link href={'/about-us'}>
                                                <i className="far fa-arrow-right" /> About Us
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={'/services'}>
                                                <i className="far fa-arrow-right" /> Our Services
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={'/contact'}>
                                                <i className="far fa-arrow-right" /> Contact Us
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={'/blog'}>
                                                <i className="far fa-arrow-right" /> Blogs
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6 col-sm-12 col-12">
                            <div className="footer-one-single-wized mid-bg">
                                <div className="wized-title">
                                    <h5 className="title">Our Services</h5>
                                    <img src="/assets/images/footer/under-title.png" alt="hadi_consultant_footer" />
                                </div>
                                <div className="quick-link-inner">
                                    <ul className="links">
                                        {services.map((svc) => (
                                            <li key={svc.id}>
                                                <Link href={`/services/${svc.slug}`}>
                                                    <i className="far fa-arrow-right" /> {svc.wehoware_service_categories?.name || svc.title}
                                                </Link>
                                            </li>
                                        ))}
                                        {services.length === 0 && (
                                            <li>
                                                <Link href={'/services'}>
                                                    <i className="far fa-arrow-right" /> View All Services
                                                </Link>
                                            </li>
                                        )}
                                    </ul>
                                    {services.length > 0 && (
                                        <Link href={'/services'} className="rts-btn btn-primary" style={{ marginTop: '16px', fontSize: '13px' }}>
                                            View All Services
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6 col-sm-12 col-12">
                            <div className="footer-one-single-wized margin-left-65">
                                <div className="wized-title">
                                    <h5 className="title">Contact Information</h5>
                                    <img src="/assets/images/footer/under-title.png" alt="hadi_consultant_footer" />
                                </div>
                                <div className="contact-info-wrapper">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="single-contact-info mb--20">
                                                <div className="contact-icon">
                                                    <i className="far fa-phone"></i>
                                                </div>
                                                <div className="contact-details">
                                                    <p className="contact-value">(416) 998-7909</p>
                                                </div>
                                            </div>
                                            <div className="single-contact-info mb--20">
                                                <div className="contact-icon">
                                                    <i className="far fa-envelope"></i>
                                                </div>
                                                <div className="contact-details">
                                                    <p className="contact-value">consultantshadi1@gmail.com</p>
                                                </div>
                                            </div>
                                            <div className="single-contact-info">
                                                <div className="contact-icon">
                                                    <i className="far fa-map-marker-alt"></i>
                                                </div>
                                                <div className="contact-details">
                                                    <p className="contact-value">1290 Eglinton Ave E #8, Mississauga, ON L4W 1K8</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rts-copyright-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="text-center">
                                    <p>HADI CONSULTANT - Copyright 2024. All rights reserved. | Practical Tax and Finance Advice You Can Count On</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FooterOne
