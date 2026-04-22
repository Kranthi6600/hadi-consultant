"use client"
import React from 'react'
import Link from 'next/link';
function ServiceOne() {
    return (
        <div>
            <>
                {}
                <div className="rts-service-area rts-section-gapBottom" id="service">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="rts-title-area service text-center">
                                    <p className="pre-title">Services</p>
                                    <h2 className="title">What I do</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid service-main plr--120-service mt--50 plr_md--0 pl_sm--0 pr_sm--0">
                        <div className="background-service row">
                            {}
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="service-one-inner one">
                                    <div className="thumbnail">
                                        <img
                                            src="assets/images/service/icon/01.svg"
                                            alt="hadi_consultant_service"
                                        />
                                    </div>
                                    <div className="service-details">
                                        <Link href={'/service-details'}>
                                            <h5 className="title">01. FINANCIAL STATEMENTS PREPARATION</h5>
                                        </Link>
                                        <p className="disc">
                                            Professional preparation of financial statements for individuals and corporate accounts, 
                                            ensuring accuracy and compliance with accounting standards.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {}
                            {}
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="service-one-inner two">
                                    <div className="thumbnail">
                                        <img
                                            src="assets/images/service/icon/02.svg"
                                            alt="hadi_consultant_service"
                                        />
                                    </div>
                                    <div className="service-details">
                                        <Link href={'/service-details'}>
                                            <h5 className="title">02. TAX FILING FOR INDIVIDUALS</h5>
                                        </Link>
                                        <p className="disc">
                                            Expert tax filing services for individuals, maximizing deductions and ensuring 
                                            timely submission to tax authorities.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {}
                            {}
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="service-one-inner three">
                                    <div className="thumbnail">
                                        <img
                                            src="assets/images/service/icon/03.svg"
                                            alt="hadi_consultant_service"
                                        />
                                    </div>
                                    <div className="service-details">
                                        <Link href={'/service-details'}>
                                            <h5 className="title">03. FINANCIAL ADVISORY</h5>
                                        </Link>
                                        <p className="disc">
                                            Comprehensive financial advisory services to help you make informed decisions 
                                            about your financial future and business growth.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {}
                            {}
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="service-one-inner four">
                                    <div className="thumbnail">
                                        <img
                                            src="assets/images/service/icon/04.svg"
                                            alt="hadi_consultant_service"
                                        />
                                    </div>
                                    <div className="service-details">
                                        <Link href={'/service-details'}>
                                            <h5 className="title">04. TAXES FOR CORPORATE</h5>
                                        </Link>
                                        <p className="disc">
                                            Specialized corporate tax services including tax planning, compliance, and 
                                            strategic tax management for businesses of all sizes.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {}
                            {}
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="service-one-inner five">
                                    <div className="thumbnail">
                                        <img
                                            src="assets/images/service/icon/05.svg"
                                            alt="hadi_consultant_service"
                                        />
                                    </div>
                                    <div className="service-details">
                                        <Link href={'/service-details'}>
                                            <h5 className="title">05. T4 FILING</h5>
                                        </Link>
                                        <p className="disc">
                                            Professional T4 filing services for businesses, ensuring accurate and timely 
                                            preparation of employee T4 slips for tax reporting.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {}
                            {}
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="service-one-inner six">
                                    <div className="thumbnail">
                                        <img
                                            src="assets/images/service/icon/06.svg"
                                            alt="hadi_consultant_service"
                                        />
                                    </div>
                                    <div className="service-details">
                                        <Link href={'/service-details'}>
                                            <h5 className="title">FAMILY BENEFITS</h5>
                                        </Link>
                                        <p className="disc">
                                            Guidance on various family benefits and tax credits available to Canadian families, 
                                            helping you maximize your entitled benefits.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {}
                        </div>
                        <div className="row">
                            <div className="col-12 text-center mt--60 mb--60">
                                <Link className="rts-btn btn-primary btn-large" href="/our-service">
                                    View All Services
                                </Link>
                            </div>
                        </div>
                        <div className="row">
                            <div className="cta-one-bg col-12">
                                <div className="cta-one-inner">
                                    <div className="cta-left">
                                        <h3 className="title">
                                            Get A Free Quote - Expert Tax Services
                                        </h3>
                                    </div>
                                    <div className="cta-right">
                                        <Link className="rts-btn btn-white" href="/contact">
                                            Contact Us
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {}
            </>
        </div>
    )
}
export default ServiceOne