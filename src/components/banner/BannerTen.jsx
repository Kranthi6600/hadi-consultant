"use client"
import React from 'react'
import Link from 'next/link';
function BannerTen() {
    return (
        <div>
            {/* banner ten area start */}
            <div className="banner-tena-area banner-bg-10 bg_image rts-section-gap" id="banner">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-6 order-lg-1 order-md-2 order-sm-2 order-2">
                            {/* banner inner-content ten area */}
                            <div className="banner-ten-inner-content">
                                <span className="pre-title">Building Business From Scratch</span>
                                <h1 className="title">
                                    Unleashing Potential,
                                    <span>Redefining Success</span>
                                </h1>
                                <p className="disc">
                                    We believe that every business, no matter the size or industry,
                                    deserves to thrive in today's dynamic economic landscape.
                                </p>
                                <Link href={'#'} className="rts-btn btn-primary-2">
                                    Book a Meeting
                                </Link>
                            </div>
                            {/* banner inner-content ten area end */}
                        </div>
                        <div className="col-lg-6 order-lg-2 order-md-1 order-sm-1 order-1">
                            <div className="thumbnail-img-10 pt--100">
                                <img src="assets/images/banner/banner-14.png" alt="banner" />
                                <img
                                    className="small-img"
                                    src="assets/images/banner/sm-1.png"
                                    alt="small-image"
                                />
                                <img
                                    className="small-img-2"
                                    src="assets/images/banner/sm-2.png"
                                    alt="small-image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* banner ten area end */}

        </div>
    )
}

export default BannerTen