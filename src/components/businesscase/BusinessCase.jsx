"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import Link from 'next/link';


function BusinessCase() {
    return (
        <div>
            {/* business case start */}
            <div className="rts-business-case rts-section-gap business-case-bg-2">
                <div className="container">
                    <div className="row">
                        <div className="title-area text-center business-case">
                            <span>Case Studies</span>
                            <h2 className="title">Specialist Business Cases</h2>
                        </div>
                    </div>
                </div>
                <div className="container-cusiness-case-h2 mt--50">
                    <div className="row">
                        <div className="col-12">
                            <div className="swiper mySwiperh2_Business_Cases">

                                <Swiper
                                    // install Swiper modules
                                    modules={[Navigation, EffectFade, Scrollbar, A11y, Autoplay]}
                                    className="mySwiperh2_Business_Cases"
                                    speed={700}
                                    slidesPerView={4}
                                    spaceBetween={30}
                                    loop={true}
                                    autoplay={true}
                                    breakpoints={{
                                        1200: { slidesPerView: 4 },
                                        900: { slidesPerView: 3 },
                                        768: { slidesPerView: 2 },
                                        580: { slidesPerView: 2 },
                                        450: { slidesPerView: 1 },
                                        0: { slidesPerView: 1 },
                                    }}
                                >
                                    <SwiperSlide>
                                        {/* single business case */}
                                        <div className="rts-business-case-s-2">
                                            <Link href={'/project-details'} className="thumbnail">
                                                <img
                                                    src="assets/images/business-case/04.jpg"
                                                    alt="Business_case"
                                                />
                                            </Link>
                                            <div className="inner">
                                                <Link href={'/project-details'}>
                                                    <h5 className="title">Business Growth</h5>
                                                </Link>
                                                <span>Business Strategy</span>
                                            </div>
                                            <Link href={'/project-details'} className="over_link" />
                                        </div>
                                        {/* single business case End */}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        {/* single business case */}
                                        <div className="rts-business-case-s-2">
                                            <Link href={'/project-details'} className="thumbnail">
                                                <img
                                                    src="assets/images/business-case/05.jpg"
                                                    alt="Business_case"
                                                />
                                            </Link>
                                            <div className="inner">
                                                <Link href={'/project-details'}>
                                                    <h5 className="title">Business Growth</h5>
                                                </Link>
                                                <span>Business Strategy</span>
                                            </div>
                                            <Link href={'/project-details'} className="over_link" />
                                        </div>
                                        {/* single business case End */}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        {/* single business case */}
                                        <div className="rts-business-case-s-2">
                                            <Link href={'/project-details'} className="thumbnail">
                                                <img
                                                    src="assets/images/business-case/06.jpg"
                                                    alt="Business_case"
                                                />
                                            </Link>
                                            <div className="inner">
                                                <Link href={'/project-details'}>
                                                    <h5 className="title">Startup Solution</h5>
                                                </Link>
                                                <span>Business Strategy</span>
                                            </div>
                                            <Link href={'/project-details'} className="over_link" />
                                        </div>
                                        {/* single business case End */}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        {/* single business case */}
                                        <div className="rts-business-case-s-2">
                                            <Link href={'/project-details'} className="thumbnail">
                                                <img
                                                    src="assets/images/business-case/06.jpg"
                                                    alt="Business_case"
                                                />
                                            </Link>
                                            <div className="inner">
                                                <Link href={'/project-details'}>
                                                    <h5 className="title">Startup Solution</h5>
                                                </Link>
                                                <span>Business Strategy</span>
                                            </div>
                                            <Link href={'/project-details'} className="over_link" />
                                        </div>
                                        {/* single business case End */}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        {/* single business case */}
                                        <div className="rts-business-case-s-2">
                                            <Link href={'/project-details'} className="thumbnail">
                                                <img
                                                    src="assets/images/business-case/06.jpg"
                                                    alt="Business_case"
                                                />
                                            </Link>
                                            <div className="inner">
                                                <Link href={'/project-details'}>
                                                    <h5 className="title">Startup Solution</h5>
                                                </Link>
                                                <span>Business Strategy</span>
                                            </div>
                                            <Link href={'/project-details'} className="over_link" />
                                        </div>
                                        {/* single business case End */}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        {/* single business case */}
                                        <div className="rts-business-case-s-2">
                                            <Link href={'/project-details'} className="thumbnail">
                                                <img
                                                    src="assets/images/business-case/06.jpg"
                                                    alt="Business_case"
                                                />
                                            </Link>
                                            <div className="inner">
                                                <Link href={'/project-details'}>
                                                    <h5 className="title">Startup Solution</h5>
                                                </Link>
                                                <span>Business Strategy</span>
                                            </div>
                                            <Link href={'/project-details'} className="over_link" />
                                        </div>
                                        {/* single business case End */}
                                    </SwiperSlide>
                                </Swiper>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* business case End */}
        </div>
    )
}

export default BusinessCase