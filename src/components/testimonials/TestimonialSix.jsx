"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Core Swiper styles
import { Navigation, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import  Link  from 'next/link';



function TestimonialSix() {
    return (
        <div>
            {/* client rationg area start */}
            <div className="rts-client-rating rts-section-gapBottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 position-relative">
                            <div className="swiper ">
                                <Swiper
                                    // install Swiper modules
                                    modules={[Navigation, EffectFade, Scrollbar, A11y, Autoplay]}
                                    className="clients-review-7"
                                    speed={500}
                                    slidesPerView={3}
                                    spaceBetween={30}
                                    loop={true}
                                    autoplay={true}
                                    navigation={{
                                        nextEl: '.swiper-button-next',
                                        prevEl: '.swiper-button-prev',
                                    }}

                                >
                                    <SwiperSlide>
                                        <div className="single-testimonials-styele-clients-7 text-center">
                                            <div className="logo">
                                                <img
                                                    src="assets/images/testimonials/icon/logo-04.png"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="inner">
                                                <p className="disc">
                                                    4.88 out of 5 star from 1,645 reviews
                                                </p>
                                                <div className="stars-area">
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="single-testimonials-styele-clients-7 text-center">
                                            <div className="logo">
                                                <img
                                                    src="assets/images/testimonials/icon/logo-04.png"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="inner">
                                                <p className="disc">
                                                    4.88 out of 5 star from 1,645 reviews
                                                </p>
                                                <div className="stars-area">
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="single-testimonials-styele-clients-7 text-center">
                                            <div className="logo">
                                                <img
                                                    src="assets/images/testimonials/icon/logo-04.png"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="inner">
                                                <p className="disc">
                                                    4.88 out of 5 star from 1,645 reviews
                                                </p>
                                                <div className="stars-area">
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="single-testimonials-styele-clients-7 text-center">
                                            <div className="logo">
                                                <img
                                                    src="assets/images/testimonials/icon/logo-04.png"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="inner">
                                                <p className="disc">
                                                    4.88 out of 5 star from 1,645 reviews
                                                </p>
                                                <div className="stars-area">
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="single-testimonials-styele-clients-7 text-center">
                                            <div className="logo">
                                                <img
                                                    src="assets/images/testimonials/icon/logo-04.png"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="inner">
                                                <p className="disc">
                                                    4.88 out of 5 star from 1,645 reviews
                                                </p>
                                                <div className="stars-area">
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                </Swiper>
                            </div>
                            <div className="swiper-button-next" />
                            <div className="swiper-button-prev" />
                        </div>
                    </div>
                </div>
            </div>
            {/* client rationg area end */}
        </div>
    )
}

export default TestimonialSix