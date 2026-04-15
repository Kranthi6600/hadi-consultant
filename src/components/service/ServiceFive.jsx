"use client"
import React from 'react'
import Link from 'next/link';
function ServiceFive() {
    return (
        <div>
            {/* rts-service area start */}
            <div className="rts-service-area rts-service-area5" id='service'>
                <div className="container">
                    <div className="row g-5 mt--20">
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                            <div className="service-one-inner-four">
                                <Link href={'/service-details'} className="icon">
                                    <img
                                        src="assets/images/service/icon/service-logo1.svg"
                                        alt="Business-service"
                                    />
                                </Link>
                                <div className="content">
                                    <h5 className="title">Financial Planning</h5>
                                    <p className="disc">
                                        Purus dui eget sollicitudin curae leo proin platea cras, morbi
                                        torquent massa
                                    </p>
                                </div>
                                <Link href={'/service-details'} className="rts-btn btn-primary-3">

                                    Read More
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                            <div className="service-one-inner-four">
                                <Link href={'/service-details'} className="icon">
                                    <img
                                        src="assets/images/service/icon/service-logo2.svg"
                                        alt="Business-service"
                                    />
                                </Link>
                                <div className="content">
                                    <h5 className="title">Business Planning</h5>
                                    <p className="disc">
                                        Commodo gravida sodales pulvinar quamta habitant tristique
                                        auctore sapien
                                    </p>
                                </div>
                                <Link href={'/service-details'} className="rts-btn btn-primary-3">
                                    {" "}
                                    Read More
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                            <div className="service-one-inner-four">
                                <Link href={'/service-details'} className="icon">
                                    <img
                                        src="assets/images/service/icon/service-logo3.svg"
                                        alt="Business-service"
                                    />
                                </Link>
                                <div className="content">
                                    <h5 className="title">Marketing Planning</h5>
                                    <p className="disc">
                                        Sodales pulvinar habitant tristique sapien pretiumto turpis
                                        dignissim mus
                                    </p>
                                </div>
                                <Link href={'/service-details'} className="rts-btn btn-primary-3">
                                    {" "}
                                    Read More
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

export default ServiceFive