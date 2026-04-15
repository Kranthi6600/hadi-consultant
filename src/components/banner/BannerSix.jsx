"use client"
import React from 'react'
import ErrorBoundary from "@/components/ErrorBoundary";
function BannerSix() {
    return (
        <ErrorBoundary>
        <div>
            {/* rts banner darea start */}
            <div className="rts-banner-area banner-bg-h7" id="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7">
                            {/* bannerq inner six */}
                            <div className="rts-banner-wrapper-seven">
                                <p className="pre-title">
                                    <span>Welcome!</span> Start Growing Your Business Today
                                </p>
                                <h1 className="banner-title">
                                    We Help to Grow <br />
                                    Your <span>Financial Business </span>
                                </h1>
                                <p className="disc">
                                    Porttitor ornare fermentum aliquam pharetra facilisis gravida
                                    risus suscipit Dui feugiat fusce conubia ridiculus tristique
                                    parturient
                                </p>
                                <div className="button-area">
                                    <a href="#" className="rts-btn btn-primary six mr--30">
                                        Our Services
                                    </a>
                                    <a href="#" className="rts-btn btn-primary deactive">
                                        Free Consultant
                                    </a>
                                </div>
                            </div>
                            {/* bannerq inner six ENd */}
                        </div>
                        <div className="col-xl-5">
                            <div className="rts-contact-form-area six">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="rts-contact-fluid">
                                                <div className="rts-title-area contact-fluid text-center">
                                                    <h2 className="title">Let’s Get in Touch</h2>
                                                </div>
                                                <div className="form-wrapper">
                                                    <div id="form-messages" />
                                                    <form id="contact-form" action="mailer.php" method="post">
                                                        <div className="name-email">
                                                            <input
                                                                type="text"
                                                                name="name"
                                                                placeholder="First Name"
                                                                required=""
                                                            />
                                                            <input
                                                                type="text"
                                                                name="name"
                                                                placeholder="Last Name"
                                                                required=""
                                                            />
                                                        </div>
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            placeholder="Your Email"
                                                            required=""
                                                        />
                                                        <input
                                                            type="number"
                                                            name="number"
                                                            placeholder="Numbers"
                                                            required=""
                                                        />
                                                        <select name="country" id="country">
                                                            <option value="country">Country</option>
                                                            <option value="">USA</option>
                                                            <option value="">UK</option>
                                                            <option value="">BRAZIL</option>
                                                        </select>
                                                        <textarea
                                                            placeholder="Type Your Message"
                                                            name="message"
                                                            defaultValue={""}
                                                        />
                                                        <button type="submit" className="rts-btn btn-primary">
                                                            Submit
                                                        </button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shape-banner-6">
                    <img
                        src="assets/images/banner/shape/shape-h6.png"
                        alt="shape-images"
                        data-sal-delay={150}
                        data-sal="slide-right"
                        data-sal-duration={800}
                    />
                </div>
            </div>
            {/* rts banner darea end */}
        </div>
        </ErrorBoundary>
    )
}

export default BannerSix