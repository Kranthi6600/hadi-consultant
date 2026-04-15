"use client"
import React from 'react'
import Link from 'next/link';
function ServiceFour() {
    return (
        <div>
            {/* rts-service area start */}
            <div className="rts-service-area rts-service-area4 rts-section-gap" id='service'>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="text-center title-service-three">
                                <p className="pre-title">Popular Insurance</p>
                                <h2 className="title">Our Latest Insurance</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5 mt--20">
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                            <div className="service-one-inner-four">
                                <div className="big-thumbnail-area">
                                    <Link href={'#'} className="thumbnail">
                                        <img
                                            src="assets/images/service/14.jpg"
                                            alt="Business-service"
                                        />
                                    </Link>
                                    <div className="content">
                                        <h5 className="title">Personal Insurance</h5>
                                        <p className="disc">
                                            Commodo gravida quamta sodales pulvinar habitant tristique
                                            auctore sapien pretiumto turpis dignissim mus feugiat
                                        </p>
                                    </div>
                                    <Link href={'/service-details'} className="over_link" />
                                </div>
                                <Link href={'/service-details'} className="rts-btn btn-primary-3">
                                    {" "}
                                    Read More
                                    <i className="fal fa-arrow-right" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                            <div className="service-one-inner-four">
                                <div className="big-thumbnail-area">
                                    <Link href={'#'} className="thumbnail">
                                        <img
                                            src="assets/images/service/15.jpg"
                                            alt="Business-service"
                                        />
                                    </Link>
                                    <div className="content">
                                        <h5 className="title">Home Insurance</h5>
                                        <p className="disc">
                                            Commodo gravida quamta sodales pulvinar habitant tristique
                                            auctore sapien pretiumto turpis dignissim mus feugiat
                                        </p>
                                    </div>
                                    <Link href={'/service-details'} className="over_link" />
                                </div>
                                <Link href={'/service-details'} className="rts-btn btn-primary-3">
                                    {" "}
                                    Read More
                                    <i className="fal fa-arrow-right" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                            <div className="service-one-inner-four">
                                <div className="big-thumbnail-area">
                                    <Link href={'#'} className="thumbnail">
                                        <img
                                            src="assets/images/service/16.jpg"
                                            alt="Business-service"
                                        />
                                    </Link>
                                    <div className="content">
                                        <h5 className="title">Financial Insurance</h5>
                                        <p className="disc">
                                            Commodo gravida quamta sodales pulvinar habitant tristique
                                            auctore sapien pretiumto turpis dignissim mus feugiat
                                        </p>
                                    </div>
                                    <Link href={'/service-details'} className="over_link" />
                                </div>
                                <Link href={'/service-details'} className="rts-btn btn-primary-3">
                                    {" "}
                                    Read More
                                    <i className="fal fa-arrow-right" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts-service area end */}
        </div>
    )
}

export default ServiceFour