"use client"
import React from 'react'

function FooterFour() {
    return (
        <div>
            {/* rts footer three area start */}
            <div className="rts-footer-area footer-three footer-four rts-section-gapTop footer-bg-2" id='f-contact'>
                <div className="container pb--100 pb_sm--40">
                    <div className="row g-5">
                        <div className="col-xl-3 col-lg-6">
                            <div className="footer-three-single-wized left">
                                <a href="index" className="logo_footer">
                                    <img src="assets/images/logo/logo-5.1.svg" alt="Logo-image" />
                                </a>
                                <p className="disc">
                                    Felis consquat magnis fames sagittis ultrices plasodales porttitor
                                    quisque ultrice tempor turpis.
                                </p>
                                <ul className="social-three-wrapper">
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-skype" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* footer three mid area */}
                        <div className="col-xl-6 col-lg-6">
                            <div className="row">
                                {/* footer mid area left */}
                                <div className="col-lg-6">
                                    <div className="footer-three-single-wized mid-left">
                                        <h5 className="title">Office Information</h5>
                                        <div className="body">
                                            <div className="info-wrapper">
                                                <div className="single">
                                                    <ul className="icon">
                                                        <li>
                                                            <i className="fas fa-phone-alt" />
                                                        </li>
                                                    </ul>
                                                    <div className="info">
                                                        <span>Call Us 24/7</span>
                                                        <a href="#">(+256) 2145.2156</a>
                                                    </div>
                                                </div>
                                                <div className="single">
                                                    <ul className="icon">
                                                        <li>
                                                            <i className="far fa-envelope" />
                                                        </li>
                                                    </ul>
                                                    <div className="info">
                                                        <span>Work with us</span>
                                                        <a href="#">info@finbiz.com</a>
                                                    </div>
                                                </div>
                                                <div className="single">
                                                    <ul className="icon">
                                                        <li>
                                                            <i className="fas fa-map-marker-alt" />
                                                        </li>
                                                    </ul>
                                                    <div className="info">
                                                        <span>Our Location</span>
                                                        <a href="#">
                                                            XYZ Hilton Street, 125 <br />
                                                            Town United State
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* footer mid area left end */}
                                {/* footer mid area right */}
                                <div className="col-lg-6">
                                    <div className="footer-three-single-wized mid-right">
                                        <h5 className="title">Get Updates</h5>
                                        <div className="body">
                                            <div className="update-wrapper">
                                                <p className="disc">
                                                    Sign up for our latest news &amp; articles. We won’t give
                                                    you spam mails.
                                                </p>
                                                <form className="email-footer-area">
                                                    <input
                                                        type="email"
                                                        placeholder="Enter Email Address"
                                                        required=""
                                                    />
                                                    <button type="submit">
                                                        <i className="fas fa-location-arrow" />
                                                    </button>
                                                </form>
                                                <div className="note-area">
                                                    <p>
                                                        <span>Note:</span> We do not publish your email
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* footer mid area right end */}
                            </div>
                        </div>
                        {/* footer three mid area ENd */}
                        <div className="col-xl-3 col-lg-6">
                            <div className="footer-three-single-wized right">
                                <h5 className="title">Instagram Posts</h5>
                                <div className="body">
                                    <div className="footer-gallery-inner">
                                        <a href="#">
                                            <img
                                                src="assets/images/footer/three-gallery/01.png"
                                                alt="Footer-gallery"
                                            />
                                        </a>
                                        <a href="#">
                                            <img
                                                src="assets/images/footer/three-gallery/02.png"
                                                alt="Footer-gallery"
                                            />
                                        </a>
                                        <a href="#">
                                            <img
                                                src="assets/images/footer/three-gallery/03.png"
                                                alt="Footer-gallery"
                                            />
                                        </a>
                                        <a href="#">
                                            <img
                                                src="assets/images/footer/three-gallery/04.png"
                                                alt="Footer-gallery"
                                            />
                                        </a>
                                        <a href="#">
                                            <img
                                                src="assets/images/footer/three-gallery/05.png"
                                                alt="Footer-gallery"
                                            />
                                        </a>
                                        <a href="#">
                                            <img
                                                src="assets/images/footer/three-gallery/06.png"
                                                alt="Footer-gallery"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <p className="disc text-center ptb--25">
                                    FINBIZ - Copyright 2024. All rights reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts footer three area end */}

        </div>
    )
}

export default FooterFour