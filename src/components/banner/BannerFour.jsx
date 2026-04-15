"use client"
import React from 'react'
import Link from 'next/link';

function BannerFour() {
    return (
        <div>
            {/* banner area start three */}
            <div className="rts-banner-area banner-three banner-four bg_image" id='banner'>
                <div className="shape">
                    <img src="assets/images/banner/shape/rectangle.png" alt="shape" />
                </div>
                <div className="shape1">
                    <img src="assets/images/banner/shape/05.png" alt="shape" />
                </div>
                <div className="shape2">
                    <img src="assets/images/banner/shape/06.png" alt="shape" />
                </div>
                <div className="shape3">
                    <img src="assets/images/banner/shape/07.png" alt="shape" />
                </div>
                <div className="shape4">
                    <img src="assets/images/banner/shape/08.png" alt="shape" />
                </div>
                <div className=" bg_banner-three bg_banner-four bg_image rts-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="banner-three-inner banner-four-inner">
                                    <span className="subtitle-banner">
                                        START GROWING YOUR INSURANCE
                                    </span>
                                    {/* type headline start*/}
                                    <h1 className="title cd-headline clip is-full-width">
                                        Plan for the future <br /> live your life now
                                    </h1>
                                    <p className="disc">
                                        Porttitor ornare fermentum aliquam pharetra facilisis gravida
                                        risus suscipit <br /> Dui feugiat fusce conubia ridiculus
                                        tristique parturient
                                    </p>
                                    <div className="button-group">
                                        <Link
                                            href={'/pricing-plane'}
                                            className="rts-btn btn-primary-3 btn-primary-4"
                                        >
                                            Free Consultant
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* banner area end three */}
        </div>
    )
}

export default BannerFour