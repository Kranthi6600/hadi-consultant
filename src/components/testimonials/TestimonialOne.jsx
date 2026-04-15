"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Core Swiper styles
import { Navigation, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import ErrorBoundary from "@/components/ErrorBoundary";

function TestimonialOne() {
    return (
        <ErrorBoundary>
            <div>

                {/* start client feed back section */}
                <div className="rts-client-feedback">
                    <div className="container">
                        <div className="row">
                            {/* start testimonials area */}
                            <div className="col-lg-7">
                                <div className="rts-title-area reviews text-start pl--30 pt--70">
                                    <p className="pre-title">Our Testimonials</p>
                                    <h2 className="title">Client’s Feedbacks</h2>
                                    {/* swiper area start */}
                                    <div className="swiper mySwipertestimonial">
                                        <Swiper
                                            // install Swiper modules
                                            modules={[Navigation, EffectFade, Scrollbar, A11y, Autoplay]}
                                            className="mySwipers"
                                            speed={500}
                                            slidesPerView={1}
                                            spaceBetween={0}
                                            loop={true}
                                            navigation={{
                                                nextEl: '.swiper-button-next',
                                                prevEl: '.swiper-button-prev',
                                            }}

                                        >
                                            <SwiperSlide>
                                                <div className="testimonial-inner">
                                                    <p className="disc text-start">
                                                        “Consectetur adipiscing elit velit porta sapien purus erat
                                                        nec, a ornare laoreet sem gravida accumsan in commodo
                                                        aliquet nascetur maecenas. Sem tempus hendrerit diam
                                                        mauris leo magna sociosqu viverra, accumsan massa
                                                        tristique egestas cum sodales hac lacinia feugiat
                                                        scelerisque porttitor”
                                                    </p>
                                                    <div className="testimonial-bottom-one">
                                                        <div className="thumbnail">
                                                            <img
                                                                src="assets/images/testimonials/02.png"
                                                                alt="business-testimonials"
                                                            />
                                                        </div>
                                                        <div className="details">
                                                            <a href="#">
                                                                <h5 className="title">David Smith</h5>
                                                            </a>
                                                            <span>JHKL Owner</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="testimonial-inner">
                                                    <p className="disc text-start">
                                                        “Consectetur adipiscing elit velit porta sapien purus erat
                                                        nec, a ornare laoreet sem gravida accumsan in commodo
                                                        aliquet nascetur maecenas. Sem tempus hendrerit diam
                                                        mauris leo magna sociosqu viverra, accumsan massa
                                                        tristique egestas cum sodales hac lacinia feugiat
                                                        scelerisque porttitor”
                                                    </p>
                                                    <div className="testimonial-bottom-one">
                                                        <div className="thumbnail">
                                                            <img
                                                                src="assets/images/testimonials/02.png"
                                                                alt="business-testimonials"
                                                            />
                                                        </div>
                                                        <div className="details">
                                                            <a href="#">
                                                                <h5 className="title">David Smith</h5>
                                                            </a>
                                                            <span>JHKL Owner</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="testimonial-inner">
                                                    <p className="disc text-start">
                                                        “Consectetur adipiscing elit velit porta sapien purus erat
                                                        nec, a ornare laoreet sem gravida accumsan in commodo
                                                        aliquet nascetur maecenas. Sem tempus hendrerit diam
                                                        mauris leo magna sociosqu viverra, accumsan massa
                                                        tristique egestas cum sodales hac lacinia feugiat
                                                        scelerisque porttitor”
                                                    </p>
                                                    <div className="testimonial-bottom-one">
                                                        <div className="thumbnail">
                                                            <img
                                                                src="assets/images/testimonials/02.png"
                                                                alt="business-testimonials"
                                                            />
                                                        </div>
                                                        <div className="details">
                                                            <a href="#">
                                                                <h5 className="title">David Smith</h5>
                                                            </a>
                                                            <span>JHKL Owner</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        </Swiper>
                                        <div className="swiper-button-next" />
                                        <div className="swiper-button-prev" />
                                    </div>
                                    {/* swiper area end */}
                                </div>
                            </div>
                            {/* end testimonials are */}
                            {/* images area */}
                            <div className="col-lg-5">
                                <div className="rts-test-one-image-inner">
                                    <img
                                        src="assets/images/testimonials/01.png"
                                        alt="business_testimobials"
                                    />
                                </div>
                            </div>
                            {/* image area end */}
                        </div>
                    </div>
                </div>
                {/* start client feed back section End */}

            </div>
        </ErrorBoundary>
    )
}

export default TestimonialOne