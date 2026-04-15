"use client"
import React from 'react'
import Link from 'next/link';


function FooterSeven() {
    return (
        <div>
            {/* footer area start */}
            <div className="rts-footer-area rts-section-gap footer-two footer-bg-two mt--120 mt_md--80 mt_sm--60" id='f-contact'>
                <div className="container">
                    <div className="row">
                        {/* single wized */}
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="footer-two-single-wized left">
                                <h3 className="title">
                                    <span>Ready To</span> <br />
                                    Work With Us?
                                </h3>
                                <p className="disc">
                                    Felis consequat magnis est fames sagittis ultrices placerat
                                    sodales porttitor quisque.
                                </p>
                                <Link className="rts-btn btn-primary-2 color-h-black" href={'#'}>
                                    Get a Quote
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12 mt_sm--50">
                            <div className="footer-two-single-wized two">
                                <div className="wized-title-area">
                                    <h5 className="wized-title">Our Services</h5>
                                    <img
                                        src="assets/images/footer/under-title-2.png"
                                        alt="finbiz_footer"
                                    />
                                </div>
                                <div className="wized-2-body">
                                    <ul>
                                        <li>
                                            <Link href={'/service-details'}>
                                                <i className="fal fa-chevron-double-right" />
                                                Business planning
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={'/service-details'}>
                                                <i className="fal fa-chevron-double-right" />
                                                Tax strategy
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={'/service-details'}>
                                                <i className="fal fa-chevron-double-right" />
                                                Financial advices
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={'/service-details'}>
                                                <i className="fal fa-chevron-double-right" />
                                                Insurance strategy
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={'/service-details'}>
                                                <i className="fal fa-chevron-double-right" />
                                                Manage investment
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* single wized */}
                        <div className="col-xl-2 col-lg-6 col-md-6 col-sm-12 col-12 mt_sm--30 mt_md--30">
                            <div className="footer-two-single-wized">
                                <div className="wized-title-area">
                                    <h5 className="wized-title">Contact Us</h5>
                                    <img
                                        src="assets/images/footer/under-title-2.png"
                                        alt="finbiz_footer"
                                    />
                                </div>
                                <div className="wized-2-body">
                                    <div className="contact-info-1">
                                        <div className="icon">
                                            <i className="fas fa-phone-alt" />
                                        </div>
                                        <div className="disc">
                                            <span>Call Us 24/7</span>
                                            <Link href={'#'}>(+256) 2145.2156</Link>
                                        </div>
                                    </div>
                                    <div className="contact-info-1">
                                        <div className="icon">
                                            <i className="fas fa-envelope" />
                                        </div>
                                        <div className="disc">
                                            <span>Work with us</span>
                                            <Link href={'#'}>info@finbiz.com</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* single wized */}
                        {/* single wized */}
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="footer-two-single-wized right">
                                <div className="wized-2-body">
                                    <div className="contact-info-1">
                                        <div className="icon">
                                            <i className="fas fa-map-marker-alt" />
                                        </div>
                                        <div className="disc">
                                            <span>Our Location</span>
                                            <Link href={'#'}>
                                                XYZ Hilton Street, 125 Town <br />
                                                United State
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* single wized */}
                    </div>
                </div>
            </div>
            {/* copyright-area start */}
            <div className="rts-copy-right ptb--30">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="copyright-h-2-wrapper">
                                <p className="disc">
                                    FINBIZ - Copyright 2024. All rights reserved.
                                </p>
                                <div className="right">
                                    <ul>
                                        <li>
                                            <Link href="blog-list.html">Company News</Link>
                                        </li>
                                        <li>
                                            <Link href={'#'}>Faq</Link>
                                        </li>
                                        <li>
                                            <Link href="contactus.html">Contact</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* copyright-area end */}

        </div>
    )
}

export default FooterSeven