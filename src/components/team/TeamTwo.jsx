"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

import Link from 'next/link';

function TeamTwo() {
    return (
        <div>
            {/* rts team two area */}
            <div className="rts-team-area rts-section-gap team-two">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="rts-title-area team text-center">
                                <p className="pre-title">Professionals Team</p>
                                <h2 className="title">Professionals Team</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5 mt--20 mt_md--30 mt_sm--0">
                        <div className="swiper">
                            <Swiper
                                // install Swiper modules
                                modules={[Navigation, EffectFade, Scrollbar, A11y, Autoplay]}
                                className="swiper mySwiperh3_team pb--110 pl--20 pr--20"
                                speed={200}
                                slidesPerView={3}
                                spaceBetween={30}
                                loop={true}
                                autoplay={true}
                                navigation={{
                                    nextEl: '.swiper-button-next',
                                    prevEl: '.swiper-button-prev',
                                }}
                                breakpoints={{
                                    1200: { slidesPerView: 3 },
                                    900: { slidesPerView: 2 },
                                    768: { slidesPerView: 2 },
                                    580: { slidesPerView: 1 },
                                    450: { slidesPerView: 1 },
                                    0: { slidesPerView: 1 },
                                }}
                            >
                                <SwiperSlide>
                                    {/* single team inner */}
                                    <div className="team-inner-two">
                                        <Link href={'/team-details'} className="thumbnail">
                                            <img src="assets/images/team/tm/lg-01.jpg" alt="" />
                                        </Link>
                                        {/* Acquaintance area */}
                                        <div className="acquaintance-area">
                                            <div className="header">
                                                <h5 className="title">Kevin Martin</h5>
                                                <span>Consultant</span>
                                            </div>
                                            <div className="acquaintance-social">
                                                <Link href="#">
                                                    <i className="fab fa-facebook-f" />
                                                </Link>
                                                <Link href="#">
                                                    <i className="fab fa-twitter" />
                                                </Link>
                                                <Link href="#">
                                                    <i className="fab fa-instagram" />
                                                </Link>
                                            </div>
                                        </div>
                                        {/* Acquaintance area */}
                                    </div>
                                    {/* single team inner End */}
                                </SwiperSlide>
                                <SwiperSlide>
                                    {/* single team inner */}
                                    <div className="team-inner-two">
                                        <Link href={'/team-details'} className="thumbnail">
                                            <img src="assets/images/team/tm/lg-02.jpg" alt="" />
                                        </Link>
                                        {/* Acquaintance area */}
                                        <div className="acquaintance-area">
                                            <div className="header">
                                                <h5 className="title">Kevin Martin</h5>
                                                <span>Consultant</span>
                                            </div>
                                            <div className="acquaintance-social">
                                                <Link href="#">
                                                    <i className="fab fa-facebook-f" />
                                                </Link>
                                                <Link href="#">
                                                    <i className="fab fa-twitter" />
                                                </Link>
                                                <Link href="#">
                                                    <i className="fab fa-instagram" />
                                                </Link>
                                            </div>
                                        </div>
                                        {/* Acquaintance area */}
                                    </div>
                                    {/* single team inner End */}
                                </SwiperSlide>
                                <SwiperSlide>
                                    {/* single team inner */}
                                    <div className="team-inner-two">
                                        <Link href={'/team-details'} className="thumbnail">
                                            <img src="assets/images/team/tm/lg-03.jpg" alt="" />
                                        </Link>
                                        {/* Acquaintance area */}
                                        <div className="acquaintance-area">
                                            <div className="header">
                                                <h5 className="title">Kevin Martin</h5>
                                                <span>Consultant</span>
                                            </div>
                                            <div className="acquaintance-social">
                                                <Link href="#">
                                                    <i className="fab fa-facebook-f" />
                                                </Link>
                                                <Link href="#">
                                                    <i className="fab fa-twitter" />
                                                </Link>
                                                <Link href="#">
                                                    <i className="fab fa-instagram" />
                                                </Link>
                                            </div>
                                        </div>
                                        {/* Acquaintance area */}
                                    </div>
                                    {/* single team inner End */}
                                </SwiperSlide>
                                <SwiperSlide>
                                    {/* single team inner */}
                                    <div className="team-inner-two">
                                        <Link href={'/team-details'} className="thumbnail">
                                            <img src="assets/images/team/tm/lg-01.jpg" alt="" />
                                        </Link>
                                        {/* Acquaintance area */}
                                        <div className="acquaintance-area">
                                            <div className="header">
                                                <h5 className="title">Kevin Martin</h5>
                                                <span>Consultant</span>
                                            </div>
                                            <div className="acquaintance-social">
                                                <Link href="#">
                                                    <i className="fab fa-facebook-f" />
                                                </Link>
                                                <Link href="#">
                                                    <i className="fab fa-twitter" />
                                                </Link>
                                                <Link href="#">
                                                    <i className="fab fa-instagram" />
                                                </Link>
                                            </div>
                                        </div>
                                        {/* Acquaintance area */}
                                    </div>
                                    {/* single team inner End */}
                                </SwiperSlide>
                                <SwiperSlide>
                                    {/* single team inner */}
                                    <div className="team-inner-two">
                                        <Link href={'/team-details'} className="thumbnail">
                                            <img src="assets/images/team/tm/lg-02.jpg" alt="" />
                                        </Link>
                                        {/* Acquaintance area */}
                                        <div className="acquaintance-area">
                                            <div className="header">
                                                <h5 className="title">Kevin Martin</h5>
                                                <span>Consultant</span>
                                            </div>
                                            <div className="acquaintance-social">
                                                <Link href="#">
                                                    <i className="fab fa-facebook-f" />
                                                </Link>
                                                <Link href="#">
                                                    <i className="fab fa-twitter" />
                                                </Link>
                                                <Link href="#">
                                                    <i className="fab fa-instagram" />
                                                </Link>
                                            </div>
                                        </div>
                                        {/* Acquaintance area */}
                                    </div>
                                    {/* single team inner End */}
                                </SwiperSlide>
                                <SwiperSlide>
                                    {/* single team inner */}
                                    <div className="team-inner-two">
                                        <Link href={'/team-details'} className="thumbnail">
                                            <img src="assets/images/team/tm/lg-03.jpg" alt="" />
                                        </Link>
                                        {/* Acquaintance area */}
                                        <div className="acquaintance-area">
                                            <div className="header">
                                                <h5 className="title">Kevin Martin</h5>
                                                <span>Consultant</span>
                                            </div>
                                            <div className="acquaintance-social">
                                                <Link href="#">
                                                    <i className="fab fa-facebook-f" />
                                                </Link>
                                                <Link href="#">
                                                    <i className="fab fa-twitter" />
                                                </Link>
                                                <Link href="#">
                                                    <i className="fab fa-instagram" />
                                                </Link>
                                            </div>
                                        </div>
                                        {/* Acquaintance area */}
                                    </div>
                                    {/* single team inner End */}
                                </SwiperSlide>

                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts team two area End */}
        </div>
    )
}

export default TeamTwo