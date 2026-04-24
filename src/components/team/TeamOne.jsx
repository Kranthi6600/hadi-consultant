"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import Link from 'next/link';
function TeamOne() {
    return (
        <div>
            <div className="rts-team-area rts-section-gap bg-team">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="rts-title-area team text-center">
                                <p className="pre-title">Meet Our Team</p>
                                <h2 className="title">Expert Consultants</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5 mt--0">
                        <Swiper
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
                                        <Link href={'#'}>
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
                                        <Link href={'#'}>
                                            <h5 className="title">Robert Martinez</h5>
                                        </Link>
                                        <p>Senior Consultant</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="team-single-one-start">
                                    <div className="team-image-area">
                                        <Link href={'#'}>
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
                                        <Link href={'#'}>
                                            <h5 className="title">Sarah Williams</h5>
                                        </Link>
                                        <p>Business Strategist</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="team-single-one-start">
                                    <div className="team-image-area">
                                        <Link href={'#'}>
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
                                        <Link href={'#'}>
                                            <h5 className="title">Michael Brown</h5>
                                        </Link>
                                        <p>Marketing Expert</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="team-single-one-start">
                                    <div className="team-image-area">
                                        <Link href={'#'}>
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
                                        <Link href={'#'}>
                                            <h5 className="title">Emily Johnson</h5>
                                        </Link>
                                        <p>Operations Manager</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="team-single-one-start">
                                    <div className="team-image-area">
                                        <Link href={'#'}>
                                            <img
                                                src="assets/images/team/tm/18.webp"
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
                                        <Link href={'#'}>
                                            <h5 className="title">Michelle Anderson</h5>
                                        </Link>
                                        <p>HR Director</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TeamOne