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
                {}
                <div className="rts-client-feedback">
                    <div className="container">
                        <div className="row">
                            {}
                            <div className="col-lg-7">
                                <div className="rts-title-area reviews text-start pl--30 pt--70">
                                    <p className="pre-title">Testimonials</p>
                                    <h2 className="title">What My Clients Say?</h2>
                                    {}
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
                                                        "Faisal was surprisingly awesome at finding tax savings for me. Made the process extremely easy from my side. Very professional, everything was done on time, required only one meeting and a couple of follow up phone calls. I highly recommend Faisal for tax filings."
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
                                                                <h5 className="title">Amanda Lee</h5>
                                                            </a>
                                                            <span>Client</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="testimonial-inner">
                                                    <p className="disc text-start">
                                                        "I have been a client of Faisal CPA since I moved to Canada in 2006. Faisal has helped me through a plethora of issues over the years. He always gets back to me quickly with sensible advice. Faisal's experience gives me confidence, which is exactly what you want in the firm you turn to for advice. I highly recommend Faisal's tax services."
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
                                                                <h5 className="title">Adam Cheise</h5>
                                                            </a>
                                                            <span>Long-term Client</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="testimonial-inner">
                                                    <p className="disc text-start">
                                                        "I've used Faisal Consulting services for years now, always highly satisfied with Faisal's work. My tax filings and advice requests were always taken care of in timely manner and most importantly, Faisal always made sure all potential deductions were discussed and considered. As a non-US resident, I wanted a specialist and not just another ordinary tax service, and this is what you get with Faisal."
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
                                                                <h5 className="title">Catherine Gilbert</h5>
                                                            </a>
                                                            <span>International Client</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        </Swiper>
                                        <div className="swiper-button-next" />
                                        <div className="swiper-button-prev" />
                                    </div>
                                    {}
                                </div>
                            </div>
                            {}
                            {}
                            <div className="col-lg-5">
                                <div className="rts-test-one-image-inner">
                                    <img
                                        src="assets/images/testimonials/01.png"
                                        alt="business_testimobials"
                                    />
                                </div>
                            </div>
                            {}
                        </div>
                    </div>
                </div>
                {}
            </div>
        </ErrorBoundary>
    )
}
export default TestimonialOne