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



function BannerEight() {
    return (
        <ErrorBoundary>
        <div>
            {/* rts banner area start */}
            <div className="rts-banner-area-two eight" id='banner'>
                <div className="swiper mySwiperh3_banner">
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, EffectFade, Scrollbar, A11y, Autoplay]}
                        className="swiper mySwiperh3_banner"
                        speed={1000}
                        slidesPerView={1}
                        spaceBetween={0}
                        loop={true}
                        autoplay={true}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        breakpoints={{
                            1200: { slidesPerView: 1 },
                            900: { slidesPerView: 1 },
                            768: { slidesPerView: 1 },
                            580: { slidesPerView: 1 },
                            450: { slidesPerView: 1 },
                            0: { slidesPerView: 1 },
                        }}
                    >
                        <SwiperSlide>
                            <div className=" bg_banner-three bg_image rts-section-gap eight">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="banner-three-inner">
                                                <span className="subtitle-banner">
                                                    Expert Guidence Model
                                                </span>
                                                {/* type headline start*/}
                                                <h1 className="title cd-headline clip is-full-width">
                                                    Web Services
                                                </h1>
                                                <p className="disc">
                                                    Urna justo odio ultrices aliquet vitae sollicitudin
                                                    gravida congue in sapien eget sociosqu mollis lacus cursus
                                                    per primis quis nascetur nisl risus porta issues business
                                                    solution service
                                                </p>
                                                <div className="button-group">
                                                    <Link
                                                        href={'/pricing-plane'}
                                                        className="rts-btn btn-primary-2"
                                                    >
                                                        Get Started
                                                    </Link>
                                                    <Link
                                                        href={'/about-us'}
                                                        className="rts-btn btn-primary-2 transparent"
                                                    >
                                                        About Us
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=" bg_banner-three eight-2 bg_image rts-section-gap">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="banner-three-inner">
                                                <span className="subtitle-banner">
                                                    Make Your Strategy Strong
                                                </span>
                                                {/* type headline start*/}
                                                <h1 className="title cd-headline clip is-full-width">
                                                    Software Model
                                                </h1>
                                                <p className="disc">
                                                    Urna justo odio ultrices aliquet vitae sollicitudin
                                                    gravida congue in sapien eget sociosqu mollis lacus cursus
                                                    per primis quis nascetur nisl risus porta issues business
                                                    solution service
                                                </p>
                                                <div className="button-group">
                                                    <Link
                                                        href="price-plan.html"
                                                        className="rts-btn btn-primary-2"
                                                    >
                                                        Get Started
                                                    </Link>
                                                    <Link
                                                        href={'/about-us'}
                                                        className="rts-btn btn-primary-2 transparent"
                                                    >
                                                        About Us
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=" bg_banner-three eight-3 bg_image rts-section-gap">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="banner-three-inner">
                                                <span className="subtitle-banner">
                                                    Make Your Strategy Strong
                                                </span>
                                                {/* type headline start*/}
                                                <h1 className="title cd-headline clip is-full-width">
                                                    Expert Solution
                                                </h1>
                                                <p className="disc">
                                                    Urna justo odio ultrices aliquet vitae sollicitudin
                                                    gravida congue in sapien eget sociosqu mollis lacus cursus
                                                    per primis quis nascetur nisl risus porta issues business
                                                    solution service
                                                </p>
                                                <div className="button-group">
                                                    <Link
                                                        href={'/pricing-plane'}
                                                        className="rts-btn btn-primary-2"
                                                    >
                                                        Get Started
                                                    </Link>
                                                    <Link
                                                        href={'/about-us'}
                                                        className="rts-btn btn-primary-2 transparent"
                                                    >
                                                        About Us
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="swiper-navigation">
                    <span className="swiper-button-prev" />
                    <span className="swiper-button-next" />
                </div>
            </div>
            {/* rts banner area end */}
        </div>
        </ErrorBoundary>
    )
}

export default BannerEight