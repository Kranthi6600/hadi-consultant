"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import Link from 'next/link';

function BannerThree() {
    return (
        <div>
            {/* banner area start three */}
            <div className="rts-banner-area banner-three" id='banner'>
                <div className="swiper ">
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, EffectFade, Scrollbar, A11y, Autoplay]}
                        className="mySwiperh3_banner"
                        speed={600}
                        slidesPerView={1}
                        spaceBetween={0}
                        loop={true}
                        autoplay={{
                            delay: 3000,
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
                            <div className=" bg_banner-three bg_image rts-section-gap">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="banner-three-inner">
                                                <span className="subtitle-banner">
                                                    Make Your Strategy Strong
                                                </span>
                                                {/* type headline start*/}
                                                <h1 className="title cd-headline clip is-full-width">
                                                    Grow Business
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
                                                        className="rts-btn btn-primary-3"
                                                    >
                                                        Get Started
                                                    </Link>
                                                    <Link
                                                        href={'/about-us'}
                                                        className="rts-btn btn-primary-3 transparent"
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
                            <div className=" bg_banner-three slide-2 bg_image rts-section-gap">
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
                                                        className="rts-btn btn-primary-3"
                                                    >
                                                        Get Started
                                                    </Link>
                                                    <Link
                                                        href={'/about-us'}
                                                        className="rts-btn btn-primary-3 transparent"
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
                            <div className=" bg_banner-three slide-3 bg_image rts-section-gap">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="banner-three-inner">
                                                <span className="subtitle-banner">
                                                    Make Your Strategy Strong
                                                </span>
                                                {/* type headline start*/}
                                                <h1 className="title cd-headline clip is-full-width">
                                                    Modern Strategy
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
                                                        className="rts-btn btn-primary-3"
                                                    >
                                                        Get Started
                                                    </Link>
                                                    <Link
                                                        href={'/about-us'}
                                                        className="rts-btn btn-primary-3 transparent"
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
            </div>
            {/* banner area end three */}
        </div>
    )
}

export default BannerThree