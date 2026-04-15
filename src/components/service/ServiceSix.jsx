"use  client"
import React from 'react'
import Link  from 'next/link';
function ServiceSix() {
    return (
        <div>
            {/* rts-service area start */}
            <div className="rts-service-area rts-section-gap" id="service">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center">
                                <p className="pre-title">Our Services</p>
                                <h2 className="title">Effective Services</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5 mt--10">
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                            {/* single service for home six */}
                            <div className="single-service-home-six">
                                <div className="icon">
                                    <img src="assets/images/service/icon/19.svg" alt="" />
                                </div>
                                <div className="inner">
                                    <h5 className="title">Financial planing</h5>
                                    <p className="disc">
                                        Purus dui eget sollicitudin curae leo proin platea cras, morbi
                                        torquent massa
                                    </p>
                                    <Link href={'/service-details'} className="rts-btn btn-primary">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                            {/* single service for home six End */}
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                            {/* single service for home six */}
                            <div className="single-service-home-six">
                                <div className="icon">
                                    <img src="assets/images/service/icon/20.svg" alt="" />
                                </div>
                                <div className="inner">
                                    <h5 className="title">Managment planing</h5>
                                    <p className="disc">
                                        Purus dui eget sollicitudin curae leo proin platea cras, morbi
                                        torquent massa
                                    </p>
                                    <Link href={'/service-details'} className="rts-btn btn-primary">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                            {/* single service for home six End */}
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                            {/* single service for home six */}
                            <div className="single-service-home-six">
                                <div className="icon">
                                    <img src="assets/images/service/icon/21.svg" alt="" />
                                </div>
                                <div className="inner">
                                    <h5 className="title">Social planing</h5>
                                    <p className="disc">
                                        Purus dui eget sollicitudin curae leo proin platea cras, morbi
                                        torquent massa
                                    </p>
                                    <Link href={'/service-details'} className="rts-btn btn-primary">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                            {/* single service for home six End */}
                        </div>
                    </div>
                </div>
            </div>
            {/* rts-service area end */}
        </div>
    )
}

export default ServiceSix