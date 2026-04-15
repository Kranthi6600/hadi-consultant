"use client"
import React from 'react'
import Link from 'next/link';
function BannerNine() {
    return (
        <div>
            <div className="banner-area-nine bg_image" id='banner'>
                <div className="inner">
                    <div className="banner-image-right-top">
                        <img src="assets/images/banner/banner-12.png" alt="banner_image" />
                    </div>
                    <div className="banner-image-left-bottom">
                        <img src="assets/images/banner/banner-13.png" alt="banner_image" />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="banner-inner-content">
                                    <div className="main-wrapper">
                                        <h1 className="title">
                                            Collaborative <br />
                                            Whiteboarding Platform
                                        </h1>
                                        <p className="disc">
                                            Maecenas quis integer aenean nisl, viverra morbi magna amet,
                                            viverra. Sollicitudin posuere scelerisque urna, urna. At
                                            vestibulum fringilla.
                                        </p>
                                        <Link href="#" className="rts-btn btn-nine">
                                            View Services
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BannerNine