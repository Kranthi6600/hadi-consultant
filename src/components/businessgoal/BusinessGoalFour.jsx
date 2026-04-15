"use client"
import React from 'react'
import  Link  from 'next/link';
function BusinessGoalFour() {
    return (
        <div>
            {/* rts service area start */}
            <div className="rts-service-area home-seven rts-section-gap" id='service'>
                <div className="shape-business-service">
                    <img src="assets/images/service/icon/shape-1.png" alt="shape" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="title-area-with-btn-home-6">
                                <div className="title-area-style-six text-start">
                                    <div className="pre-title">
                                        <img
                                            src="assets/images/banner/shape/pre-title.png"
                                            alt="pre-title"
                                        />
                                        <span className="pre">Business Progress</span>
                                        <img
                                            className="two"
                                            src="assets/images/banner/shape/pre-title.png"
                                            alt="pre-title"
                                        />
                                    </div>
                                    <h2 className="title">
                                        Together we can envision <br />
                                        your business
                                    </h2>
                                </div>
                                <Link href={'#'} className="rts-btn btn-primary-5">
                                    View All Services <i className="fal fa-arrow-right" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5 mt--80">
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="service-single-style-six">
                                <div className="icon">
                                    <img src="assets/images/service/icon/22.svg" alt="service_icon" />
                                </div>
                                <h5 className="title">Team Leadership</h5>
                                <p className="disc">
                                    Dictumst enim tristique conubia parturient ornare vivamus euismod
                                    pulvinar habitasse porttitor aptent dignissim.
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="service-single-style-six">
                                <div className="icon">
                                    <img src="assets/images/service/icon/23.svg" alt="service_icon" />
                                </div>
                                <h5 className="title">People Cohesion</h5>
                                <p className="disc">
                                    Dictumst enim tristique conubia parturient ornare vivamus euismod
                                    pulvinar habitasse porttitor aptent dignissim.
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="service-single-style-six">
                                <div className="icon">
                                    <img src="assets/images/service/icon/24.svg" alt="service_icon" />
                                </div>
                                <h5 className="title">Team Build Up</h5>
                                <p className="disc">
                                    Dictumst enim tristique conubia parturient ornare vivamus euismod
                                    pulvinar habitasse porttitor aptent dignissim.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts service area end */}
        </div>
    )
}

export default BusinessGoalFour