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






function TestimonialSeven() {
    return (
        <div>
            <div className="bg-shape-wrapper-two">
                {/* customers testimonials start */}
                <div className="rts-testimonials-6 rts-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="title-area-style-six text-center">
                                    <div className="pre-title">
                                        <img
                                            src="assets/images/banner/shape/pre-title.png"
                                            alt="pre-title"
                                        />
                                        <span className="pre">Business Progress</span>
                                        <img
                                            className="two"
                                            src="assets/images/banner/shape/pre-title.png"
                                            alt="pre-title"
                                        />
                                    </div>
                                    <h2 className="title">Customer Testimonials</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row g-5 mt--30">
                            <div className="col-lg-12">
                                <div className="swiper clients-review-testimonials-7 ">
                                    <Swiper
                                        // install Swiper modules
                                        modules={[Navigation, EffectFade, Scrollbar, A11y, Autoplay]}
                                        className="clients-review-testimonials-7"
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
                                            <div className="testimonials-7-style">
                                                <a className="thumb" href="#">
                                                    <img src="assets/images/testimonials/08.png" alt="image" />
                                                </a>
                                                <div className="body">
                                                    <h5 className="title">The quick settle tips</h5>
                                                    <p className="disc">
                                                        “Itae varius intger justo neque massa facisi orci,
                                                        lobortis rutrum dictumst morbi metus aptent sem nunc a
                                                        conubia”
                                                    </p>
                                                </div>
                                                <div className="footer">
                                                    <div className="name-area">
                                                        <a href="#">
                                                            <h6 className="title">Andrew Smith</h6>
                                                        </a>
                                                        <span>Zoko Author</span>
                                                    </div>
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
                                            <div className="testimonials-7-style">
                                                <a className="thumb" href="#">
                                                    <img src="assets/images/testimonials/08.png" alt="image" />
                                                </a>
                                                <div className="body">
                                                    <h5 className="title">The quick settle tips</h5>
                                                    <p className="disc">
                                                        “Itae varius intger justo neque massa facisi orci,
                                                        lobortis rutrum dictumst morbi metus aptent sem nunc a
                                                        conubia”
                                                    </p>
                                                </div>
                                                <div className="footer">
                                                    <div className="name-area">
                                                        <a href="#">
                                                            <h6 className="title">Andrew Smith</h6>
                                                        </a>
                                                        <span>Zoko Author</span>
                                                    </div>
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
                                            <div className="testimonials-7-style">
                                                <a className="thumb" href="#">
                                                    <img src="assets/images/testimonials/08.png" alt="image" />
                                                </a>
                                                <div className="body">
                                                    <h5 className="title">The quick settle tips</h5>
                                                    <p className="disc">
                                                        “Itae varius intger justo neque massa facisi orci,
                                                        lobortis rutrum dictumst morbi metus aptent sem nunc a
                                                        conubia”
                                                    </p>
                                                </div>
                                                <div className="footer">
                                                    <div className="name-area">
                                                        <a href="#">
                                                            <h6 className="title">Andrew Smith</h6>
                                                        </a>
                                                        <span>Zoko Author</span>
                                                    </div>
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
                                            <div className="testimonials-7-style">
                                                <a className="thumb" href="#">
                                                    <img src="assets/images/testimonials/08.png" alt="image" />
                                                </a>
                                                <div className="body">
                                                    <h5 className="title">The quick settle tips</h5>
                                                    <p className="disc">
                                                        “Itae varius intger justo neque massa facisi orci,
                                                        lobortis rutrum dictumst morbi metus aptent sem nunc a
                                                        conubia”
                                                    </p>
                                                </div>
                                                <div className="footer">
                                                    <div className="name-area">
                                                        <a href="#">
                                                            <h6 className="title">Andrew Smith</h6>
                                                        </a>
                                                        <span>Zoko Author</span>
                                                    </div>
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
                            </div>
                        </div>
                    </div>
                </div>
                {/* customers testimonials end */}
            </div>

        </div>
    )
}

export default TestimonialSeven