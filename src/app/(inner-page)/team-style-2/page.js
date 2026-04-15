"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import HeaderOne from "@/components/header/HeaderOne";
import BackToTop from "@/components/BackToTop";
import FooterOne from "@/components/footer/FooterOne";
import Breadcrumb from "@/components/Breadcrumb";
export default function Home() {
    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'Team Two' }
    ];
    return (

        <div className="">
            <HeaderOne />

            <Breadcrumb title="Team Two" breadcrumbs={breadcrumbs} />


            {/* rts team two area */}
            <div className="rts-team-area rts-section-gap team-two">
                <div className="container">
                    <div className="row g-5 mt--20 mt_md--30 mt_sm--0">
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="team-inner-two inner">
                                <Link href={'/team-details'} className="thumbnail">
                                    <img src="assets/images/team/tm/06.jpg" alt="" />
                                </Link>
                                {/* Acquaintance area */}
                                <div className="acquaintance-area">
                                    <div className="header">
                                        <h5 className="title">Kevin Martin</h5>
                                        <span>Consultant</span>
                                    </div>
                                    <div className="acquaintance-social">
                                        <Link href={'#'}>
                                            <i className="fab fa-facebook-f" />
                                        </Link>
                                        <Link href={'#'}>
                                            <i className="fab fa-twitter" />
                                        </Link>
                                        <Link href={'#'}>
                                            <i className="fab fa-instagram" />
                                        </Link>
                                    </div>
                                </div>
                                {/* Acquaintance area */}
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="team-inner-two inner">
                                <Link href={'/team-details'} className="thumbnail">
                                    <img src="assets/images/team/tm/07.jpg" alt="" />
                                </Link>
                                {/* Acquaintance area */}
                                <div className="acquaintance-area">
                                    <div className="header">
                                        <h5 className="title">Kevin Martin</h5>
                                        <span>Consultant</span>
                                    </div>
                                    <div className="acquaintance-social">
                                        <Link href={'#'}>
                                            <i className="fab fa-facebook-f" />
                                        </Link>
                                        <Link href={'#'}>
                                            <i className="fab fa-twitter" />
                                        </Link>
                                        <Link href={'#'}>
                                            <i className="fab fa-instagram" />
                                        </Link>
                                    </div>
                                </div>
                                {/* Acquaintance area */}
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="team-inner-two inner">
                                <Link href={'/team-details'} className="thumbnail">
                                    <img src="assets/images/team/tm/08.jpg" alt="" />
                                </Link>
                                {/* Acquaintance area */}
                                <div className="acquaintance-area">
                                    <div className="header">
                                        <h5 className="title">Kevin Martin</h5>
                                        <span>Consultant</span>
                                    </div>
                                    <div className="acquaintance-social">
                                        <Link href={'#'}>
                                            <i className="fab fa-facebook-f" />
                                        </Link>
                                        <Link href={'#'}>
                                            <i className="fab fa-twitter" />
                                        </Link>
                                        <Link href={'#'}>
                                            <i className="fab fa-instagram" />
                                        </Link>
                                    </div>
                                </div>
                                {/* Acquaintance area */}
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="team-inner-two inner">
                                <Link href={'/team-details'} className="thumbnail">
                                    <img src="assets/images/team/tm/09.jpg" alt="" />
                                </Link>
                                {/* Acquaintance area */}
                                <div className="acquaintance-area">
                                    <div className="header">
                                        <h5 className="title">Kevin Martin</h5>
                                        <span>Consultant</span>
                                    </div>
                                    <div className="acquaintance-social">
                                        <Link href={'#'}>
                                            <i className="fab fa-facebook-f" />
                                        </Link>
                                        <Link href={'#'}>
                                            <i className="fab fa-twitter" />
                                        </Link>
                                        <Link href={'#'}>
                                            <i className="fab fa-instagram" />
                                        </Link>
                                    </div>
                                </div>
                                {/* Acquaintance area */}
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="team-inner-two inner">
                                <Link href={'/team-details'} className="thumbnail">
                                    <img src="assets/images/team/tm/10.jpg" alt="" />
                                </Link>
                                {/* Acquaintance area */}
                                <div className="acquaintance-area">
                                    <div className="header">
                                        <h5 className="title">Kevin Martin</h5>
                                        <span>Consultant</span>
                                    </div>
                                    <div className="acquaintance-social">
                                        <Link href={'#'}>
                                            <i className="fab fa-facebook-f" />
                                        </Link>
                                        <Link href={'#'}>
                                            <i className="fab fa-twitter" />
                                        </Link>
                                        <Link href={'#'}>
                                            <i className="fab fa-instagram" />
                                        </Link>
                                    </div>
                                </div>
                                {/* Acquaintance area */}
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="team-inner-two inner">
                                <Link href={'/team-details'} className="thumbnail">
                                    <img src="assets/images/team/tm/11.jpg" alt="" />
                                </Link>
                                {/* Acquaintance area */}
                                <div className="acquaintance-area">
                                    <div className="header">
                                        <h5 className="title">Kevin Martin</h5>
                                        <span>Consultant</span>
                                    </div>
                                    <div className="acquaintance-social">
                                        <Link href={'#'}>
                                            <i className="fab fa-facebook-f" />
                                        </Link>
                                        <Link href={'#'}>
                                            <i className="fab fa-twitter" />
                                        </Link>
                                        <Link href={'#'}>
                                            <i className="fab fa-instagram" />
                                        </Link>
                                    </div>
                                </div>
                                {/* Acquaintance area */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <FooterOne />
            <BackToTop />
        </div>

    );
}
