"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

function CaseSeven() {
    return (
        <div>
            {/* rts use case hone nine start */}
            <div className="rts-use-case-home-9 rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="case-home-9-title-wrapper">
                                <div className="text-left title-area-nine">
                                    <p className="pre-title text-start">Project Portfolio</p>
                                    <h2 className="title">Digital Case Studies</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-120 mt--40">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="case-10-swiper-main-wrapper">
                                <div className="swiper ">
                                    <Swiper
                                        // install Swiper modules
                                        modules={[Navigation, EffectFade, Scrollbar, A11y, Autoplay]}
                                        className="swiper mySwiper-case-11"
                                        speed={700}
                                        slidesPerView={2.3}
                                        spaceBetween={30}
                                        loop={true}
                                        autoplay={true}
                                        centeredSlides={true}
                                        breakpoints={{
                                            1200: { slidesPerView: 2.3 },
                                            900: { slidesPerView: 3 },
                                            768: { slidesPerView: 2 },
                                            580: { slidesPerView: 2 },
                                            450: { slidesPerView: 1 },
                                            0: { slidesPerView: 1 },
                                        }}
                                    >
                                        <SwiperSlide>
                                            <a
                                                href="/project-details"
                                                className="thumbnail-image-case-11"
                                            >
                                                <img src="assets/images/product/11.png" alt="product" />
                                            </a>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <a
                                                href="/project-details"
                                                className="thumbnail-image-case-11"
                                            >
                                                <img src="assets/images/product/11.png" alt="product" />
                                            </a>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <a
                                                href="/project-details"
                                                className="thumbnail-image-case-11"
                                            >
                                                <img src="assets/images/product/11.png" alt="product" />
                                            </a>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <a
                                                href="/project-details"
                                                className="thumbnail-image-case-11"
                                            >
                                                <img src="assets/images/product/11.png" alt="product" />
                                            </a>
                                        </SwiperSlide>

                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts use case hone nine end */}

        </div>
    )
}

export default CaseSeven