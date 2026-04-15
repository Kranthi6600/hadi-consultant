"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import ErrorBoundary from "@/components/ErrorBoundary";



function BannerOne() {
    return (
        <ErrorBoundary>
            <div>
                {/* banner blank space area */}
                <div className="rts-banner-area rts-banner-one" id='banner'>
                    <div className="swiper mySwiper banner-one">

                        <Swiper
                            // install Swiper modules
                            modules={[Navigation, EffectFade, Scrollbar, A11y, Autoplay]}
                            className="rts-brand__slider"
                            speed={700}
                            slidesPerView={1}
                            spaceBetween={0}
                            loop={true}
                            autoplay={{
                                delay: 3000,
                            }}
                            effect='fade'
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
                                {/* banner single content */}
                                <div className="banner-one-inner text-start">
                                    <p className="pre-title">
                                        <span>Welcome!</span> Start Growing Your Business Today
                                    </p>
                                    <h1 className="title ">
                                        Make <span>Business Unique </span> <br />
                                        With Great Ideas
                                    </h1>
                                    <p className="disc banner-para">
                                        Porttitor ornare fermentum aliquam pharetra facilisis gravida
                                        risus suscipit <br /> Dui feugiat fusce conubia ridiculus
                                        tristique parturient
                                    </p>
                                    <a href="#" className="rts-btn btn-primary color-h-black">
                                        Get Consultant
                                    </a>
                                    <img
                                        className="shape-img one"
                                        src="assets/images/banner/shape/01.png"
                                        alt="banner_business"
                                    />
                                </div>
                                {/* banner single content end */}
                            </SwiperSlide>
                            <SwiperSlide>
                                {/* banner single content */}
                                <div className="banner-one-inner text-start">
                                    <p className="pre-title">
                                        <span>Welcome!</span> Start Growing Your Business Today
                                    </p>
                                    <h1 className="title ">
                                        Launch <span>Ultra Modern</span> <br /> Effective Business
                                    </h1>
                                    <p className="disc banner-para">
                                        Porttitor ornare fermentum aliquam pharetra facilisis gravida
                                        risus suscipit <br /> Dui feugiat fusce conubia ridiculus
                                        tristique parturient
                                    </p>
                                    <a href="#" className="rts-btn btn-primary color-h-black">
                                        Get Consultant
                                    </a>
                                    <img
                                        className="shape-img one"
                                        src="assets/images/banner/shape/01.png"
                                        alt="banner_business"
                                    />
                                </div>
                                {/* banner single content end */}
                            </SwiperSlide>
                            <SwiperSlide>
                                {/* banner single content */}
                                <div className="banner-one-inner text-start">
                                    <p className="pre-title">
                                        <span>Welcome!</span> Start Growing Your Business Today
                                    </p>
                                    <h1 className="title ">
                                        Make <span>Business Growth</span> <br /> With Next Level
                                    </h1>
                                    <p className="disc banner-para">
                                        Porttitor ornare fermentum aliquam pharetra facilisis gravida
                                        risus suscipit <br /> Dui feugiat fusce conubia ridiculus
                                        tristique parturient
                                    </p>
                                    <a href="#" className="rts-btn btn-primary color-h-black">
                                        Get Consultant
                                    </a>
                                    <img
                                        className="shape-img one"
                                        src="assets/images/banner/shape/01.png"
                                        alt="banner_business"
                                    />
                                </div>
                                {/* banner single content end */}
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="animation-img">
                        <img
                            className="shape-img two"
                            src="assets/images/banner/shape/02.png"
                            alt="banner_business"
                        />
                        <img
                            className="shape-img three"
                            src="assets/images/banner/shape/03.png"
                            alt="banner_business"
                        />
                    </div>
                </div>
                {/* banner blank space area end */}
            </div>
        </ErrorBoundary>
    )
}

export default BannerOne