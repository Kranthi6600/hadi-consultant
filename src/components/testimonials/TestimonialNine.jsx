"use client"
import React from 'react'
import Link from 'next/link';
function TestimonialNine() {
    return (
        <div>

            {/* rts testimonials area start */}
            <div className="rts-testimonials-area-start bg-dream rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center title-area-nine">
                                <p className="pre-title">Client Testimonial</p>
                                <h2 className="title">
                                    What They Say About <br /> Our Company
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--50">
                        <div className="col-lg-12">
                            <div className="testimonials-main-wrapper-nine">
                                <div className="left-image">
                                    <img src="assets/images/testimonials/09.jpg" alt="testimonials" />
                                </div>
                                <div className="right-content">
                                    <div className="brand-name">
                                        <img src="assets/images/testimonials/10.png" alt="alter" />
                                    </div>
                                    <h5 className="title">Building Amazing Modern Business</h5>
                                    <p className="dsic">
                                        "Collaborating with Modern Agency felt like having an extension
                                        of our own team. Their seamless integration, prompt responses,
                                        and ability to adapt to our changing needs made them an
                                        invaluable partner in our business journey."
                                    </p>
                                    <div className="testimonials-area-author">
                                        <img
                                            src="assets/images/testimonials/11.png"
                                            alt="testimonaisl"
                                        />
                                        <div className="infor-mation">
                                            <h6 className="title">Archer Graham</h6>
                                            <span>Finance Manager</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rts-trusted-client rts-section-gapTop">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="title-area-client text-center">
                                    <p className="client-title">Our Trusted Clients</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="client-wrapper-one">
                                <Link href={'#'}>
                                    <img src="assets/images/client/01.png" alt="business_finbiz" />
                                </Link>
                                <Link href={'#'}>
                                    <img src="assets/images/client/02.png" alt="business_finbiz" />
                                </Link>
                                <Link href={'#'}>
                                    <img src="assets/images/client/03.png" alt="business_finbiz" />
                                </Link>
                                <Link href={'#'}>
                                    <img src="assets/images/client/04.png" alt="business_finbiz" />
                                </Link>
                                <Link href={'#'}>
                                    <img src="assets/images/client/05.png" alt="business_finbiz" />
                                </Link>
                                <Link href={'#'}>
                                    <img src="assets/images/client/06.png" alt="business_finbiz" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts testimonials area end */}

        </div>
    )
}

export default TestimonialNine