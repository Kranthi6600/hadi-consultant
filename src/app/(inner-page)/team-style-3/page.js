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
        { label: 'Team Three' }
    ];
    return (

        <div className="">
            <HeaderOne />

            <Breadcrumb title="Team Three" breadcrumbs={breadcrumbs} />


            {/* rts team two area */}
            <div className="rts-team-area style-3 rts-section-gap">
                <div className="container">
                    <div className="row g-5 mt--20 mt_md--30 mt_sm--0">
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="team-inner-two inner">
                                <div className="thumbnail">
                                    <Link href={'/team-details'}>
                                        <img src="assets/images/team/tm/06.jpg" alt="" />
                                    </Link>
                                    <div className="social">
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
                                <div className="inner-content">
                                    <div className="header">
                                        <h5 className="title">Beckett Hayden</h5>
                                        <span>UX DESIGNER</span>
                                    </div>
                                </div>
                                {/* Acquaintance area */}
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="team-inner-two inner">
                                <div className="thumbnail">
                                    <Link href={'/team-details'}>
                                        <img src="assets/images/team/tm/07.jpg" alt="" />
                                    </Link>
                                    <div className="social">
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
                                <div className="inner-content">
                                    <div className="header">
                                        <h5 className="title">Julian Wyat</h5>
                                        <span>MANAGER</span>
                                    </div>
                                </div>
                                {/* Acquaintance area */}
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="team-inner-two inner">
                                <div className="thumbnail">
                                    <Link href={'/team-details'}>
                                        <img src="assets/images/team/tm/08.jpg" alt="" />
                                    </Link>
                                    <div className="social">
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
                                <div className="inner-content">
                                    <div className="header">
                                        <h5 className="title">Hake Mowana</h5>
                                        <span>FOUNDER</span>
                                    </div>
                                </div>
                                {/* Acquaintance area */}
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="team-inner-two inner">
                                <div className="thumbnail">
                                    <Link href={'/team-details'}>
                                        <img src="assets/images/team/tm/09.jpg" alt="" />
                                    </Link>
                                    <div className="social">
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
                                <div className="inner-content">
                                    <div className="header">
                                        <h5 className="title">Oulian Miyako</h5>
                                        <span>FINANCE MANAGER</span>
                                    </div>
                                </div>
                                {/* Acquaintance area */}
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="team-inner-two inner">
                                <div className="thumbnail">
                                    <Link href={'/team-details'}>
                                        <img src="assets/images/team/tm/10.jpg" alt="" />
                                    </Link>
                                    <div className="social">
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
                                <div className="inner-content">
                                    <div className="header">
                                        <h5 className="title">Alan Dosan</h5>
                                        <span>DEPUTY MANAGER</span>
                                    </div>
                                </div>
                                {/* Acquaintance area */}
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="team-inner-two inner">
                                <div className="thumbnail">
                                    <Link href={'/team-details'}>
                                        <img src="assets/images/team/tm/11.jpg" alt="" />
                                    </Link>
                                    <div className="social">
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
                                <div className="inner-content">
                                    <div className="header">
                                        <h5 className="title">Stive Stikollo</h5>
                                        <span>BUSINESS MANAGER</span>
                                    </div>
                                </div>
                                {/* Acquaintance area */}
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="team-inner-two inner">
                                <div className="thumbnail">
                                    <Link href={'/team-details'}>
                                        <img src="assets/images/team/tm/12.jpg" alt="" />
                                    </Link>
                                    <div className="social">
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
                                <div className="inner-content">
                                    <div className="header">
                                        <h5 className="title">Archer Graham</h5>
                                        <span>MARKETING EXECUTIVE</span>
                                    </div>
                                </div>
                                {/* Acquaintance area */}
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="team-inner-two inner">
                                <div className="thumbnail">
                                    <Link href={'/team-details'}>
                                        <img src="assets/images/team/tm/13.jpg" alt="" />
                                    </Link>
                                    <div className="social">
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
                                <div className="inner-content">
                                    <div className="header">
                                        <h5 className="title">Amelia Clover</h5>
                                        <span>MARKETING EXECUTIVE</span>
                                    </div>
                                </div>
                                {/* Acquaintance area */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts team two area End */}


            <FooterOne />
            <BackToTop />
        </div>

    );
}
