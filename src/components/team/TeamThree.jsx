"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Core Swiper styles
import { Navigation, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import Link from 'next/link';


function TeamThree() {
    return (
        <div>
            {/* start team section */}
            <div className="rts-team-area rts-team-area4 rts-section-gap bg-team">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="rts-title-area team text-center">
                                <p className="pre-title">Professionals Team</p>
                                <h2 className="title">Professionals Team</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5 mt--0">
                        <div className="swiper mySwiperh1_team">
                            <Swiper
                                // install Swiper modules
                                modules={[Navigation, Scrollbar, A11y, Autoplay]}
                                className="mySwiperh1_team"
                                speed={1500}
                                slidesPerView={4}
                                spaceBetween={30}
                                loop={true}
                                autoplay={true}
                                navigation={{
                                    nextEl: '.rts-next',
                                    prevEl: '.rts-prev',
                                }}
                                breakpoints={{
                                    1200: { slidesPerView: 4 },
                                    900: { slidesPerView: 3 },
                                    768: { slidesPerView: 2 },
                                    580: { slidesPerView: 2 },
                                    450: { slidesPerView: 1 },
                                    0: { slidesPerView: 1 },
                                }}
                            >
                                <SwiperSlide>
                                    <div className="team-single-one-start">
                                        <div className="team-image-area">
                                            <Link href={'/team-details'}>
                                                <img
                                                    src="assets/images/team/tm/01.jpg"
                                                    alt="Business_Team_single"
                                                />
                                                <div className="team-social">
                                                    <div className="main">
                                                        <i className="fal fa-plus" />
                                                    </div>
                                                    <div className="team-social-one">
                                                        <i className="fab fa-youtube" />
                                                        <i className="fab fa-twitter" />
                                                        <i className="fab fa-instagram" />
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="single-details">
                                            <Link href={'/team-details'}>
                                                <h5 className="title">Archer Graham</h5>
                                            </Link>
                                            <p>Founder</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="team-single-one-start">
                                        <div className="team-image-area">
                                            <Link href={'/team-details'}>
                                                <img
                                                    src="assets/images/team/tm/02.jpg"
                                                    alt="Business_Team_single"
                                                />
                                                <div className="team-social">
                                                    <div className="main">
                                                        <i className="fal fa-plus" />
                                                    </div>
                                                    <div className="team-social-one">
                                                        <i className="fab fa-youtube" />
                                                        <i className="fab fa-twitter" />
                                                        <i className="fab fa-instagram" />
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="single-details">
                                            <Link href={'/team-details'}>
                                                <h5 className="title">Amelia Clover</h5>
                                            </Link>
                                            <p>Co-Founder</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="team-single-one-start">
                                        <div className="team-image-area">
                                            <Link href={'/team-details'}>
                                                <img
                                                    src="assets/images/team/tm/03.jpg"
                                                    alt="Business_Team_single"
                                                />
                                                <div className="team-social">
                                                    <div className="main">
                                                        <i className="fal fa-plus" />
                                                    </div>
                                                    <div className="team-social-one">
                                                        <i className="fab fa-youtube" />
                                                        <i className="fab fa-twitter" />
                                                        <i className="fab fa-instagram" />
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="single-details">
                                            <Link href={'/team-details'}>
                                                <h5 className="title">Beckett Hayden</h5>
                                            </Link>
                                            <p>Deputy Manager</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="team-single-one-start">
                                        <div className="team-image-area">
                                            <Link href={'/team-details'}>
                                                <img
                                                    src="assets/images/team/tm/04.jpg"
                                                    alt="Business_Team_single"
                                                />
                                                <div className="team-social">
                                                    <div className="main">
                                                        <i className="fal fa-plus" />
                                                    </div>
                                                    <div className="team-social-one">
                                                        <i className="fab fa-youtube" />
                                                        <i className="fab fa-twitter" />
                                                        <i className="fab fa-instagram" />
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="single-details">
                                            <Link href={'/team-details'}>
                                                <h5 className="title">Julian Wyat</h5>
                                            </Link>
                                            <p>Finance Manager</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="team-single-one-start">
                                        <div className="team-image-area">
                                            <Link href={'/team-details'}>
                                                <img
                                                    src="assets/images/team/tm/04.jpg"
                                                    alt="Business_Team_single"
                                                />
                                                <div className="team-social">
                                                    <div className="main">
                                                        <i className="fal fa-plus" />
                                                    </div>
                                                    <div className="team-social-one">
                                                        <i className="fab fa-youtube" />
                                                        <i className="fab fa-twitter" />
                                                        <i className="fab fa-instagram" />
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="single-details">
                                            <Link href={'/team-details'}>
                                                <h5 className="title">Julian Wyat</h5>
                                            </Link>
                                            <p>Finance Manager</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
            {/* end team section */}

        </div>
    )
}

export default TeamThree