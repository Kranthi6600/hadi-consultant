"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import Link from 'next/link';

function ServiceThree() {
    return (
        <div>
            {/* rts-service area start */}
            <div className="rts-service-area rts-section-gap pb--140">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="text-center title-service-three">
                                <p className="pre-title">Our Services</p>
                                <h2 className="title">What We Do</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5 mt--20">
                        <div className="col-12">
                            <div className="swiper ">
                                <Swiper
                                    // install Swiper modules
                                    modules={[Navigation, EffectFade, Scrollbar, A11y, Autoplay]}
                                    className="mySwiperh2_Service"
                                    speed={200}
                                    slidesPerView={3}
                                    spaceBetween={30}
                                    loop={true}
                                    autoplay={true}
                                    navigation={{
                                        nextEl: '.swiper-button-next',
                                        prevEl: '.swiper-button-prev',
                                    }}
                                    breakpoints={{
                                        1200: { slidesPerView: 3 },
                                        900: { slidesPerView: 3 },
                                        768: { slidesPerView: 2 },
                                        580: { slidesPerView: 2 },
                                        450: { slidesPerView: 1 },
                                        0: { slidesPerView: 1 },
                                    }}
                                >
                                    <SwiperSlide>
                                        <div className="service-one-inner-four">
                                            <div className="big-thumbnail-area">
                                                <Link href={'/service-details'} className="thumbnail">
                                                    <img
                                                        src="assets/images/service/07.jpg"
                                                        alt="Business-service"
                                                    />
                                                </Link>
                                                <div className="content">
                                                    <img
                                                        src="assets/images/service/icon/16.svg"
                                                        alt="Business-icon"
                                                    />
                                                    <h5 className="title">Business Consultancy</h5>
                                                    <p className="disc">
                                                        Aenean augue venenatis est porttitor fames aptent
                                                        lobortis nam potenti
                                                    </p>
                                                </div>
                                                <Link href="service-details.html" className="over_link" />
                                            </div>
                                            <Link
                                                href="service-details.html"
                                                className="rts-btn btn-primary-3"
                                            >
                                                {" "}
                                                Read More
                                                <i className="fal fa-arrow-right" />
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="service-one-inner-four">
                                            <div className="big-thumbnail-area">
                                                <Link href={'/service-details'} className="thumbnail">
                                                    <img
                                                        src="assets/images/service/08.jpg"
                                                        alt="Business-service"
                                                    />
                                                </Link>
                                                <div className="content">
                                                    <img
                                                        src="assets/images/service/icon/17.svg"
                                                        alt="Business-icon"
                                                    />
                                                    <h5 className="title">Target Marketing</h5>
                                                    <p className="disc">
                                                        Aenean augue venenatis est porttitor fames aptent
                                                        lobortis nam potenti
                                                    </p>
                                                </div>
                                                <Link href="service-details.html" className="over_link" />
                                            </div>
                                            <Link
                                                href="service-details.html"
                                                className="rts-btn btn-primary-3"
                                            >
                                                {" "}
                                                Read More
                                                <i className="fal fa-arrow-right" />
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="service-one-inner-four">
                                            <div className="big-thumbnail-area">
                                                <Link href={'/service-details'} className="thumbnail">
                                                    <img
                                                        src="assets/images/service/09.jpg"
                                                        alt="Business-service"
                                                    />
                                                </Link>
                                                <div className="content">
                                                    <img
                                                        src="assets/images/service/icon/18.svg"
                                                        alt="Business-icon"
                                                    />
                                                    <h5 className="title">Investment Analysis</h5>
                                                    <p className="disc">
                                                        Aenean augue venenatis est porttitor fames aptent
                                                        lobortis nam potenti
                                                    </p>
                                                </div>
                                                <Link href="service-details.html" className="over_link" />
                                            </div>
                                            <Link
                                                href="service-details.html"
                                                className="rts-btn btn-primary-3"
                                            >
                                                {" "}
                                                Read More
                                                <i className="fal fa-arrow-right" />
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="service-one-inner-four">
                                            <div className="big-thumbnail-area">
                                                <Link href={'/service-details'} className="thumbnail">
                                                    <img
                                                        src="assets/images/service/07.jpg"
                                                        alt="Business-service"
                                                    />
                                                </Link>
                                                <div className="content">
                                                    <img
                                                        src="assets/images/service/icon/16.svg"
                                                        alt="Business-icon"
                                                    />
                                                    <h5 className="title">Business Consultancy</h5>
                                                    <p className="disc">
                                                        Aenean augue venenatis est porttitor fames aptent
                                                        lobortis nam potenti
                                                    </p>
                                                </div>
                                                <Link href="service-details.html" className="over_link" />
                                            </div>
                                            <Link
                                                href="service-details.html"
                                                className="rts-btn btn-primary-3"
                                            >
                                                {" "}
                                                Read More
                                                <i className="fal fa-arrow-right" />
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="service-one-inner-four">
                                            <div className="big-thumbnail-area">
                                                <Link href={'/service-details'} className="thumbnail">
                                                    <img
                                                        src="assets/images/service/08.jpg"
                                                        alt="Business-service"
                                                    />
                                                </Link>
                                                <div className="content">
                                                    <img
                                                        src="assets/images/service/icon/17.svg"
                                                        alt="Business-icon"
                                                    />
                                                    <h5 className="title">Target Marketing</h5>
                                                    <p className="disc">
                                                        Aenean augue venenatis est porttitor fames aptent
                                                        lobortis nam potenti
                                                    </p>
                                                </div>
                                                <Link href="service-details.html" className="over_link" />
                                            </div>
                                            <Link
                                                href="service-details.html"
                                                className="rts-btn btn-primary-3"
                                            >
                                                {" "}
                                                Read More
                                                <i className="fal fa-arrow-right" />
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="service-one-inner-four">
                                            <div className="big-thumbnail-area">
                                                <Link href={'/service-details'} className="thumbnail">
                                                    <img
                                                        src="assets/images/service/09.jpg"
                                                        alt="Business-service"
                                                    />
                                                </Link>
                                                <div className="content">
                                                    <img
                                                        src="assets/images/service/icon/18.svg"
                                                        alt="Business-icon"
                                                    />
                                                    <h5 className="title">Investment Analysis</h5>
                                                    <p className="disc">
                                                        Aenean augue venenatis est porttitor fames aptent
                                                        lobortis nam potenti
                                                    </p>
                                                </div>
                                                <Link href="service-details.html" className="over_link" />
                                            </div>
                                            <Link
                                                href="service-details.html"
                                                className="rts-btn btn-primary-3"
                                            >
                                                {" "}
                                                Read More
                                                <i className="fal fa-arrow-right" />
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--80">
                        <div className="col-12">
                            <div className="pagination-arrow navigation-center-bottom service text-center position-relative">
                                <div className="swiper-button-next" />
                                <div className="swiper-pagination" />
                                <div className="swiper-button-prev" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts-service area end */}
        </div>
    )
}

export default ServiceThree