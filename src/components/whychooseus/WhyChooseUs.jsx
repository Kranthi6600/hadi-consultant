"use client"
import React from 'react'

function WhyChooseUs() {
    return (
        <div>
            {/* start service area */}
            <div className="rts-service-areah2-im-3 rts-section-gap">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="image-area">
                                <img src="assets/images/service/h2/03.jpg" alt="Service_Image" />
                                <img
                                    className="two"
                                    src="assets/images/service/h2/02.jpg"
                                    alt="Service_Image"
                                />
                                <img
                                    className="three"
                                    src="assets/images/service/h2/01.jpg"
                                    alt="Service_Image"
                                />
                                <div className="ratio-area">
                                    <h3 className="ratio">85%</h3>
                                    <span>Successful Ratio</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="service-h2-content pl--30">
                                <div className="title-area  service-h2 service">
                                    <span>Why Choose Us</span>
                                    <h2 className="title">We focus to get excellent performance </h2>
                                </div>
                                <div className="content-wrapper">
                                    <p className="disc">
                                        Aliquet porta est cras proin donec odio curabitur convallis,
                                        penatibus vulputate facilisi montes blandit condimentum quisque
                                        platea, sociosqu ut nec nam cursus magnis leo nullam
                                    </p>
                                    <div className="feature-one-wrapper mt--40">
                                        <div className="single-feature-one">
                                            <i className="fal fa-check" />
                                            <p>Fast Growing Sells</p>
                                        </div>
                                        <div className="single-feature-one">
                                            <i className="fal fa-check" />
                                            <p>24/7 Quality Services</p>
                                        </div>
                                        <div className="single-feature-one">
                                            <i className="fal fa-check" />
                                            <p>Expert Members</p>
                                        </div>
                                        <div className="single-feature-one">
                                            <i className="fal fa-check" />
                                            <p>Best Quality Services</p>
                                        </div>
                                    </div>
                                    <div className="support-team">
                                        <a href="team-details.html" className="thumbnail">
                                            <img
                                                src="assets/images/business-goal/team.png"
                                                alt="Image-team"
                                            />
                                        </a>
                                        <div className="details">
                                            <span>24/7 Support Team</span>
                                            <a href="team-details.html">
                                                <h6 className="title">(+214) 2158.31598</h6>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* start service area End */}

        </div>
    )
}

export default WhyChooseUs