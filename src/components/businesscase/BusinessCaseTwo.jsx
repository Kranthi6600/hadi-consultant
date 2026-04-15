"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import Link from 'next/link';
import ErrorBoundary from "@/components/ErrorBoundary";

function BusinessCaseTwo() {
    return (
        <ErrorBoundary>
            <div>

                {/* Our Business case style start */}
                <div className="rts-business-case-area rts-section-gapTop business-case-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="title-area-business-case-3">
                                    <div className="title-area">
                                        <span className="sub">RECENT CASE STUDIES</span>
                                        <h2 className="title">Our Business Cases</h2>
                                    </div>
                                    <Link
                                        className="rts-btn btn-primary-3 color-h-black"
                                        href={'/contactus'}
                                    >
                                        Lets Work Together
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-2 mt--65">
                        <div className="row g-5">
                            <div className="swiper ">

                                <Swiper
                                    // install Swiper modules
                                    modules={[Navigation, EffectFade, Scrollbar, A11y, Autoplay]}
                                    className="mySwiperh3_business-case"
                                    speed={1000}
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
                                        900: { slidesPerView: 3 },
                                        768: { slidesPerView: 2 },
                                        580: { slidesPerView: 2 },
                                        450: { slidesPerView: 1 },
                                        0: { slidesPerView: 1 },
                                    }}
                                >
                                    <SwiperSlide>
                                        {/* single case study */}
                                        <div className="rts-cse-study-3-wrapper">
                                            <div className="thumbnail">
                                                <img
                                                    src="assets/images/business-case/01.jpg"
                                                    alt="Business-solution"
                                                />
                                                <Link href={'/project-details'} className="icon">
                                                    <i className="far fa-eye" />
                                                </Link>
                                                <div className="content">
                                                    <div className="content-wrap">
                                                        <Link href={'/project-details'}>
                                                            <h5 className="title">Digital Business Solution</h5>
                                                        </Link>
                                                        <span>Business Strategy</span>
                                                    </div>
                                                </div>
                                                <Link href={'/project-details'} className="over_link" />
                                            </div>
                                        </div>
                                        {/* single case study End */}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        {/* single case study */}
                                        <div className="rts-cse-study-3-wrapper">
                                            <div className="thumbnail">
                                                <img
                                                    src="assets/images/business-case/02.jpg"
                                                    alt="Business-solution"
                                                />
                                                <Link href={'/project-details'} className="icon">
                                                    <i className="far fa-eye" />
                                                </Link>
                                                <div className="content">
                                                    <div className="content-wrap">
                                                        <Link href={'/project-details'}>
                                                            <h5 className="title">Digital Business Solution</h5>
                                                        </Link>
                                                        <span>Business Strategy</span>
                                                    </div>
                                                </div>
                                                <Link href={'/project-details'} className="over_link" />
                                            </div>
                                        </div>
                                        {/* single case study End */}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        {/* single case study */}
                                        <div className="rts-cse-study-3-wrapper">
                                            <div className="thumbnail">
                                                <img
                                                    src="assets/images/business-case/03.jpg"
                                                    alt="Business-solution"
                                                />
                                                <Link href={'/project-details'} className="icon">
                                                    <i className="far fa-eye" />
                                                </Link>
                                                <div className="content">
                                                    <div className="content-wrap">
                                                        <Link href={'/project-details'}>
                                                            <h5 className="title">Digital Business Solution</h5>
                                                        </Link>
                                                        <span>Business Strategy</span>
                                                    </div>
                                                </div>
                                                <Link href={'/project-details'} className="over_link" />
                                            </div>
                                        </div>
                                        {/* single case study End */}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        {/* single case study */}
                                        <div className="rts-cse-study-3-wrapper">
                                            <div className="thumbnail">
                                                <img
                                                    src="assets/images/business-case/01.jpg"
                                                    alt="Business-solution"
                                                />
                                                <Link href={'/project-details'} className="icon">
                                                    <i className="far fa-eye" />
                                                </Link>
                                                <div className="content">
                                                    <div className="content-wrap">
                                                        <Link href={'/project-details'}>
                                                            <h5 className="title">Digital Business Solution</h5>
                                                        </Link>
                                                        <span>Business Strategy</span>
                                                    </div>
                                                </div>
                                                <Link href={'/project-details'} className="over_link" />
                                            </div>
                                        </div>
                                        {/* single case study End */}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        {/* single case study */}
                                        <div className="rts-cse-study-3-wrapper">
                                            <div className="thumbnail">
                                                <img
                                                    src="assets/images/business-case/02.jpg"
                                                    alt="Business-solution"
                                                />
                                                <Link href={'/project-details'} className="icon">
                                                    <i className="far fa-eye" />
                                                </Link>
                                                <div className="content">
                                                    <div className="content-wrap">
                                                        <Link href={'/project-details'}>
                                                            <h5 className="title">Digital Business Solution</h5>
                                                        </Link>
                                                        <span>Business Strategy</span>
                                                    </div>
                                                </div>
                                                <Link href={'/project-details'} className="over_link" />
                                            </div>
                                        </div>
                                        {/* single case study End */}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        {/* single case study */}
                                        <div className="rts-cse-study-3-wrapper">
                                            <div className="thumbnail">
                                                <img
                                                    src="assets/images/business-case/03.jpg"
                                                    alt="Business-solution"
                                                />
                                                <Link href={'/project-details'} className="icon">
                                                    <i className="far fa-eye" />
                                                </Link>
                                                <div className="content">
                                                    <div className="content-wrap">
                                                        <Link href={'/project-details'}>
                                                            <h5 className="title">Digital Business Solution</h5>
                                                        </Link>
                                                        <span>Business Strategy</span>
                                                    </div>
                                                </div>
                                                <Link href={'/project-details'} className="over_link" />
                                            </div>
                                        </div>
                                        {/* single case study End */}
                                    </SwiperSlide>

                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Our Business case style End */}

            </div>
        </ErrorBoundary>
    )
}

export default BusinessCaseTwo