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
                {}
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
                                {}
                                <div className="banner-one-inner text-start">
                                    <p className="pre-title">
                                        <span>Hadi Consultant.</span> Practical Tax and Finance Advice You Can Count On
                                    </p>
                                    <h1 className="title ">
                                        Your <span>Financial Consultancy</span> <br />
                                        Expert
                                    </h1>
                                    <p className="disc banner-para">
                                        Hadi Consultants Tax Experts in Mississauga, Ontario offers a wide range of 
                                        bookkeeping and accountancy services for individual and corporate accounts. <br />
                                        Our Certified Public Accountants provide well-organized accounting assistance.
                                    </p>
                                    <a href="/contact" className="rts-btn btn-primary color-h-black">
                                        Get A Free Quote
                                    </a>
                                    <img
                                        className="shape-img one"
                                        src="assets/images/banner/shape/01.png"
                                        alt="banner_business"
                                    />
                                </div>
                                {}
                            </SwiperSlide>
                            <SwiperSlide>
                                {}
                                <div className="banner-one-inner text-start">
                                    <p className="pre-title">
                                        <span>Trusted</span> Experienced Professional
                                    </p>
                                    <h1 className="title ">
                                        Expert <span>Tax Filing</span> <br />
                                        For Individuals
                                    </h1>
                                    <p className="disc banner-para">
                                        Whether you need proper and timely tax filing services or corporate bookkeeping – 
                                        Hadi Consultants Tax Experts keeps an eye on the details, <br />
                                        giving you improved manageability of everything else.
                                    </p>
                                    <a href="/contact" className="rts-btn btn-primary color-h-black">
                                        Get A Free Quote
                                    </a>
                                    <img
                                        className="shape-img one"
                                        src="assets/images/banner/shape/01.png"
                                        alt="banner_business"
                                    />
                                </div>
                                {}
                            </SwiperSlide>
                            <SwiperSlide>
                                {}
                                <div className="banner-one-inner text-start">
                                    <p className="pre-title">
                                        <span>24/7 Availability</span> Always On Time
                                    </p>
                                    <h1 className="title ">
                                        Corporate <span>Tax Services</span> <br />
                                        & Financial Advisory
                                    </h1>
                                    <p className="disc banner-para">
                                        Our Certified Public Accountants provide well-organized accounting assistance, 
                                        tailored to suit your specific requirements. <br />
                                        Accurate Record Keeping with professional service you can trust.
                                    </p>
                                    <a href="/contact" className="rts-btn btn-primary color-h-black">
                                        Get A Free Quote
                                    </a>
                                    <img
                                        className="shape-img one"
                                        src="assets/images/banner/shape/01.png"
                                        alt="banner_business"
                                    />
                                </div>
                                {}
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
                {}
            </div>
        </ErrorBoundary>
    )
}
export default BannerOne