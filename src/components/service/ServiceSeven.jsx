"use client"
import React from 'react'
import Link from 'next/link';

function ServiceSeven() {
    return (
        <div>
            {/* Working Process section start */}
            <div className="rts-working-process-section eight rts-section-gap" id='service'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="title-area">
                                <span>Our Values</span>
                                <h2 className="title">Why Choose Us?</h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <p className="decs">
                                We believe in the power of teamwork. We are driven by a sense of
                                community inculcated in us through our clients, colleagues, and
                                associates. We provide worldwide our services.
                            </p>
                        </div>
                    </div>
                    <div className="rts-working-process-inner">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                <div className="wrapper">
                                    <Link href={'/service-details'} className="icon">
                                        <img
                                            src="assets/images/working-step/icon/target.svg"
                                            alt="Icon"
                                        />
                                    </Link>
                                    <div className="content">
                                        <h5 className="title">Customer Centric</h5>
                                        <p className="disc">
                                            Customer centricity are that the is the focal point of all
                                            decisions related to products, services and experiences.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                <div className="wrapper">
                                    <Link href={'/service-details'} className="icon">
                                        <img
                                            src="assets/images/working-step/icon/user.svg"
                                            alt="Icon"
                                        />
                                    </Link>
                                    <div className="content">
                                        <h5 className="title">Human Centric</h5>
                                        <p className="disc">
                                            Customer centricity are that the is the focal point of all
                                            decisions related to products, services and experiences.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                <div className="wrapper">
                                    <Link href={'/service-details'} className="icon">
                                        <img
                                            src="assets/images/working-step/icon/save.svg"
                                            alt="Icon"
                                        />
                                    </Link>
                                    <div className="content">
                                        <h5 className="title">Sustainable</h5>
                                        <p className="disc">
                                            Customer centricity are that the is the focal point of all
                                            decisions related to products, services and experiences.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                <div className="wrapper">
                                    <Link href={'/service-details'} className="icon">
                                        <img
                                            src="assets/images/working-step/icon/goal.svg"
                                            alt="Icon"
                                        />
                                    </Link>
                                    <div className="content">
                                        <h5 className="title">Goal-Driven</h5>
                                        <p className="disc">
                                            Customer centricity are that the is the focal point of all
                                            decisions related to products, services and experiences.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Working Process section end */}
        </div>
    )
}

export default ServiceSeven