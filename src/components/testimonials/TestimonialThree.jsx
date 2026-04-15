"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

function TestimonialThree() {
    return (
        <div>
            {/* testimonials area start */}
            <div className="rts-testimonials-h2-area rts-section-gap bg_testimonials-h2">
                <div className="container">
                    <div className="row mb--30">
                        <div className="col-12">
                            <div className="title-area testimonials-area-h2 text-center">
                                <span>
                                    Customer Testimonial
                                </span>
                                <h2
                                    className="title">
                                    2356+ Customer Feedback’s
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5">
                        <div className="col-12">
                            {/* Swiper */}
                            <div className="swiper testimonials-h2">
                                <Swiper
                                    // install Swiper modules
                                    modules={[Navigation, EffectFade, Scrollbar, A11y, Autoplay]}
                                    className="testimonials-h2"
                                    speed={700}
                                    slidesPerView={1}
                                    spaceBetween={30}
                                    loop={true}
                                    autoplay={true}
                                    pagination={{
                                        clickable: true,
                                        el: 'swiper-pagination2'
                                    }}
                                    breakpoints={{
                                        1200: { slidesPerView: 2 },
                                        900: { slidesPerView: 2 },
                                        768: { slidesPerView: 1 },
                                        580: { slidesPerView: 1 },
                                        450: { slidesPerView: 1 },
                                        0: { slidesPerView: 1 },
                                    }}
                                >
                                    <SwiperSlide>
                                        {/* single testimonials area */}
                                        <div className="single-testimonials-h2">
                                            <div className="body">
                                                <h5 className="title">Great Business Solution</h5>
                                                <p className="disc">
                                                    “Dictum egravida praimis rhoncus maecenas qismart curae
                                                    mauris turpis quisque ad dictumst semper tempor aliquam
                                                    senectus commodo”
                                                </p>
                                            </div>
                                            <div className="footer">
                                                <div className="left">
                                                    <a className="thumbnail" href="#">
                                                        <img
                                                            src="assets/images/testimonials/07.png"
                                                            alt="testimonials_image"
                                                        />
                                                    </a>
                                                    <div className="desig">
                                                        <a href="#">
                                                            <h6 className="title">Jasmine Lemon</h6>
                                                        </a>
                                                        <p>
                                                            Manager at <span>Apple</span>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="right">
                                                    <div className="stars-area">
                                                        <ul>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="fas fa-star" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="fas fa-star" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="fas fa-star" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="fas fa-star" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="fas fa-star" />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* single testimonials area End */}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        {/* single testimonials area */}
                                        <div className="single-testimonials-h2">
                                            <div className="body">
                                                <h5 className="title">Great Marketing Solution</h5>
                                                <p className="disc">
                                                    “Dictum egravida praimis rhoncus maecenas qismart curae
                                                    mauris turpis quisque ad dictumst semper tempor aliquam
                                                    senectus commodo”
                                                </p>
                                            </div>
                                            <div className="footer">
                                                <div className="left">
                                                    <a className="thumbnail" href="#">
                                                        <img
                                                            src="assets/images/testimonials/07.png"
                                                            alt="testimonials_image"
                                                        />
                                                    </a>
                                                    <div className="desig">
                                                        <a href="#">
                                                            <h6 className="title">Jasmine Lemon</h6>
                                                        </a>
                                                        <p>
                                                            Manager at <span>Apple</span>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="right">
                                                    <div className="stars-area">
                                                        <ul>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="fas fa-star" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="fas fa-star" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="fas fa-star" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="fas fa-star" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="fas fa-star" />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* single testimonials area End */}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        {/* single testimonials area */}
                                        <div className="single-testimonials-h2">
                                            <div className="body">
                                                <h5 className="title">Great Business Solution</h5>
                                                <p className="disc">
                                                    “Dictum egravida praimis rhoncus maecenas qismart curae
                                                    mauris turpis quisque ad dictumst semper tempor aliquam
                                                    senectus commodo”
                                                </p>
                                            </div>
                                            <div className="footer">
                                                <div className="left">
                                                    <a className="thumbnail" href="#">
                                                        <img
                                                            src="assets/images/testimonials/07.png"
                                                            alt="testimonials_image"
                                                        />
                                                    </a>
                                                    <div className="desig">
                                                        <a href="#">
                                                            <h6 className="title">Jasmine Lemon</h6>
                                                        </a>
                                                        <p>
                                                            Manager at <span>Apple</span>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="right">
                                                    <div className="stars-area">
                                                        <ul>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="fas fa-star" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="fas fa-star" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="fas fa-star" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="fas fa-star" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="fas fa-star" />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* single testimonials area End */}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        {/* single testimonials area */}
                                        <div className="single-testimonials-h2">
                                            <div className="body">
                                                <h5 className="title">Great Marketing Solution</h5>
                                                <p className="disc">
                                                    “Dictum egravida praimis rhoncus maecenas qismart curae
                                                    mauris turpis quisque ad dictumst semper tempor aliquam
                                                    senectus commodo”
                                                </p>
                                            </div>
                                            <div className="footer">
                                                <div className="left">
                                                    <a className="thumbnail" href="#">
                                                        <img
                                                            src="assets/images/testimonials/07.png"
                                                            alt="testimonials_image"
                                                        />
                                                    </a>
                                                    <div className="desig">
                                                        <a href="#">
                                                            <h6 className="title">Jasmine Lemon</h6>
                                                        </a>
                                                        <p>
                                                            Manager at <span>Apple</span>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="right">
                                                    <div className="stars-area">
                                                        <ul>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="fas fa-star" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="fas fa-star" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="fas fa-star" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="fas fa-star" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="fas fa-star" />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* single testimonials area End */}
                                    </SwiperSlide>


                                </Swiper>
                            </div>
                            {/* swiper end */}
                        </div>

                        <div className="swiper-pagination2" />
                    </div>
                </div>
            </div>
            {/* testimonials area end */}

        </div>
    )
}

export default TestimonialThree