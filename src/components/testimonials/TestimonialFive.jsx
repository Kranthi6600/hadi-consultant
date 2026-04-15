"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import ErrorBoundary from "@/components/ErrorBoundary";



function TestimonialFive() {
    return (
         <ErrorBoundary>
        <div>
            {/* rts customer feedback area start */}
            <div className="rts-customer-feedback-area-six rts-section-gap bg-feedback-seven">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="title-area text-center">
                                <p className="pre-title">Our Testimonials</p>
                                <h2 className="title">Our Customer Feedbacks</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--40">
                        <div className="swiper">

                            <Swiper
                                // install Swiper modules
                                modules={[Navigation, EffectFade, Scrollbar, A11y, Autoplay]}
                                className=" mySwiperh2_clients"
                                speed={700}
                                slidesPerView={3}
                                spaceBetween={30}
                                loop={true}
                                autoplay={true}
                                breakpoints={{
                                    1200: { slidesPerView: 3 },
                                    900: { slidesPerView: 2 },
                                    768: { slidesPerView: 2 },
                                    580: { slidesPerView: 1 },
                                    450: { slidesPerView: 1 },
                                    0: { slidesPerView: 1 },
                                }}
                            >
                                <SwiperSlide>
                                    {/* single client reviews */}
                                    <div className="rts-client-reviews-h2 six">
                                        <div className="review-header">
                                            <a href="#" className="thumbnail">
                                                <img
                                                    src="assets/images/testimonials/02.png"
                                                    alt="testimonials_area"
                                                />
                                            </a>
                                            <div className="discription">
                                                <a href="#">
                                                    <h6 className="title">David Smith</h6>
                                                </a>
                                                <span>Finance</span>
                                            </div>
                                        </div>
                                        <div className="review-body">
                                            <p className="disc">
                                                “Dabus nisl aliquet congue tellus nascetur lectus sagpien
                                                mattis arcu dictums augue volutpat felis etiam suspendisse
                                                rhoncus mauris dignissim ante”
                                            </p>
                                            <div className="body-end">
                                                <a href="#">
                                                    <img
                                                        src="assets/images/testimonials/icon/logo-01.png"
                                                        alt="Client_logo"
                                                    />
                                                </a>
                                                <div className="star-icon">
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* single client reviews End */}
                                </SwiperSlide>
                                <SwiperSlide>
                                    {/* single client reviews */}
                                    <div className="rts-client-reviews-h2 six">
                                        <div className="review-header">
                                            <a href="#" className="thumbnail">
                                                <img
                                                    src="assets/images/testimonials/03.png"
                                                    alt="testimonials_area"
                                                />
                                            </a>
                                            <div className="discription">
                                                <a href="#">
                                                    <h6 className="title">David Smith</h6>
                                                </a>
                                                <span>Finance</span>
                                            </div>
                                        </div>
                                        <div className="review-body">
                                            <p className="disc">
                                                “Dabus nisl aliquet congue tellus nascetur lectus sagpien
                                                mattis arcu dictums augue volutpat felis etiam suspendisse
                                                rhoncus mauris dignissim ante”
                                            </p>
                                            <div className="body-end">
                                                <a href="#">
                                                    <img
                                                        src="assets/images/testimonials/icon/logo-02.png"
                                                        alt="Client_logo"
                                                    />
                                                </a>
                                                <div className="star-icon">
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* single client reviews End */}
                                </SwiperSlide>
                                <SwiperSlide>
                                    {/* single client reviews */}
                                    <div className="rts-client-reviews-h2 six">
                                        <div className="review-header">
                                            <a href="#" className="thumbnail">
                                                <img
                                                    src="assets/images/testimonials/04.png"
                                                    alt="testimonials_area"
                                                />
                                            </a>
                                            <div className="discription">
                                                <a href="#">
                                                    <h6 className="title">David Smith</h6>
                                                </a>
                                                <span>Finance</span>
                                            </div>
                                        </div>
                                        <div className="review-body">
                                            <p className="disc">
                                                “Dabus nisl aliquet congue tellus nascetur lectus sagpien
                                                mattis arcu dictums augue volutpat felis etiam suspendisse
                                                rhoncus mauris dignissim ante”
                                            </p>
                                            <div className="body-end">
                                                <a href="#">
                                                    <img
                                                        src="assets/images/testimonials/icon/logo-03.png"
                                                        alt="Client_logo"
                                                    />
                                                </a>
                                                <div className="star-icon">
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* single client reviews End */}
                                </SwiperSlide>
                                <SwiperSlide>
                                    {/* single client reviews */}
                                    <div className="rts-client-reviews-h2 six">
                                        <div className="review-header">
                                            <a href="#" className="thumbnail">
                                                <img
                                                    src="assets/images/testimonials/02.png"
                                                    alt="testimonials_area"
                                                />
                                            </a>
                                            <div className="discription">
                                                <a href="#">
                                                    <h6 className="title">David Smith</h6>
                                                </a>
                                                <span>Finance</span>
                                            </div>
                                        </div>
                                        <div className="review-body">
                                            <p className="disc">
                                                “Dabus nisl aliquet congue tellus nascetur lectus sagpien
                                                mattis arcu dictums augue volutpat felis etiam suspendisse
                                                rhoncus mauris dignissim ante”
                                            </p>
                                            <div className="body-end">
                                                <a href="#">
                                                    <img
                                                        src="assets/images/testimonials/icon/logo-01.png"
                                                        alt="Client_logo"
                                                    />
                                                </a>
                                                <div className="star-icon">
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* single client reviews End */}
                                </SwiperSlide>
                                <SwiperSlide>
                                    {/* single client reviews */}
                                    <div className="rts-client-reviews-h2 six">
                                        <div className="review-header">
                                            <a href="#" className="thumbnail">
                                                <img
                                                    src="assets/images/testimonials/03.png"
                                                    alt="testimonials_area"
                                                />
                                            </a>
                                            <div className="discription">
                                                <a href="#">
                                                    <h6 className="title">David Smith</h6>
                                                </a>
                                                <span>Finance</span>
                                            </div>
                                        </div>
                                        <div className="review-body">
                                            <p className="disc">
                                                “Dabus nisl aliquet congue tellus nascetur lectus sagpien
                                                mattis arcu dictums augue volutpat felis etiam suspendisse
                                                rhoncus mauris dignissim ante”
                                            </p>
                                            <div className="body-end">
                                                <a href="#">
                                                    <img
                                                        src="assets/images/testimonials/icon/logo-02.png"
                                                        alt="Client_logo"
                                                    />
                                                </a>
                                                <div className="star-icon">
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* single client reviews End */}
                                </SwiperSlide>
                                <SwiperSlide>
                                    {/* single client reviews */}
                                    <div className="rts-client-reviews-h2 six">
                                        <div className="review-header">
                                            <a href="#" className="thumbnail">
                                                <img
                                                    src="assets/images/testimonials/04.png"
                                                    alt="testimonials_area"
                                                />
                                            </a>
                                            <div className="discription">
                                                <a href="#">
                                                    <h6 className="title">David Smith</h6>
                                                </a>
                                                <span>Finance</span>
                                            </div>
                                        </div>
                                        <div className="review-body">
                                            <p className="disc">
                                                “Dabus nisl aliquet congue tellus nascetur lectus sagpien
                                                mattis arcu dictums augue volutpat felis etiam suspendisse
                                                rhoncus mauris dignissim ante”
                                            </p>
                                            <div className="body-end">
                                                <a href="#">
                                                    <img
                                                        src="assets/images/testimonials/icon/logo-03.png"
                                                        alt="Client_logo"
                                                    />
                                                </a>
                                                <div className="star-icon">
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* single client reviews End */}
                                </SwiperSlide>

                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts customer feedback area end */}
        </div>
        </ErrorBoundary>
    )
}

export default TestimonialFive