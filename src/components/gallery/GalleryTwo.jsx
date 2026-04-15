"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Core Swiper styles
import { Navigation, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import Link from 'next/link';


function GalleryOne() {
    return (
        <div>
            {/* start gallery section */}
            <div className="rts-gallery-area rts-section-gap bg_image">
                <div className="container">
                    <div className="row">
                        <div className="rts-title-area gallery text-start pl_sm--20">
                            <p className="pre-title">Popular Projects</p>
                            <h2 className="title">Our Completed Projects</h2>
                        </div>
                    </div>
                    <div className="row mt--45">
                        <div className="col-12">
                            <div className="swiper mygallery mySwipers">
                                <Swiper
                                    // install Swiper modules
                                    modules={[Navigation, EffectFade, Scrollbar, A11y, Autoplay]}
                                    className="mySwipers"
                                    speed={1500}
                                    effect='fade'
                                    slidesPerView={1}
                                    spaceBetween={30}
                                    loop={true}
                                    navigation={{
                                        nextEl: '.swiper-button-next',
                                        prevEl: '.swiper-button-prev',
                                    }}

                                >
                                    <SwiperSlide>
                                        <   div className="row g-5 w-g-100">
                                            <div className="col-lg-7 col-md-12 col-sm-12 col-12">
                                                <div className="thumbnail-gallery">
                                                    <img
                                                        src="assets/images/gallery/gallery-01.jpg"
                                                        alt="business-images"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-5 col-md-12 col-sm-12 col-12">
                                                <div className="bg-right-gallery">
                                                    <div className="icon">
                                                        <img
                                                            src="assets/images/gallery/icon/01.svg"
                                                            alt="Business-gallery"
                                                        />
                                                    </div>
                                                    <Link href={'#'}>
                                                        <h4 className="title">Pro Business Solution</h4>
                                                    </Link>
                                                    <span>Case Study, Growth</span>
                                                    <p className="disc">
                                                        Ornare etiam laoreet dictumst nisl quisque scelerisque
                                                        cras ut porta interdum purus mattis iaculis litora
                                                        turpis torquent posuere.
                                                    </p>
                                                    <Link
                                                        className="rts-btn btn-primary six"
                                                        href="project-details.html"
                                                    >
                                                        View Project
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="row g-5 w-g-100">
                                            <div className="col-lg-7">
                                                <div className="thumbnail-gallery">
                                                    <img
                                                        src="assets/images/gallery/gallery-02.jpg"
                                                        alt="business-images"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-5">
                                                <div className="bg-right-gallery">
                                                    <div className="icon">
                                                        <img
                                                            src="assets/images/gallery/icon/01.svg"
                                                            alt="Business-gallery"
                                                        />
                                                    </div>
                                                    <Link href={'#'}>
                                                        <h4 className="title">Finbiz Pro Business</h4>
                                                    </Link>
                                                    <span>Case Study, Growth</span>
                                                    <p className="disc">
                                                        In the literal sense, the term “Business” means the
                                                        state of being busy. But it is a very wide connotation
                                                        of business.
                                                    </p>
                                                    <Link
                                                        className="rts-btn btn-primary six"
                                                        href="project-details.html"
                                                    >
                                                        View Project
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="row g-5 w-g-100">
                                            <div className="col-lg-7">
                                                <div className="thumbnail-gallery">
                                                    <img
                                                        src="assets/images/gallery/gallery-03.jpg"
                                                        alt="business-images"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-5">
                                                <div className="bg-right-gallery">
                                                    <div className="icon">
                                                        <img
                                                            src="assets/images/gallery/icon/01.svg"
                                                            alt="Business-gallery"
                                                        />
                                                    </div>
                                                    <Link href={'#'}>
                                                        <h4 className="title">Pro Solution Business</h4>
                                                    </Link>
                                                    <span>Case Study, Growth</span>
                                                    <p className="disc">
                                                        But a very wide of business because it covers every
                                                        human activity. Business is really concerned with the
                                                        production.
                                                    </p>
                                                    <Link
                                                        className="rts-btn btn-primary six"
                                                        href="project-details.html"
                                                    >
                                                        View Project
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>


                                <div className="swiper-button-next" />
                                <div className="swiper-button-prev" />
                                <div className="swiper-pagination" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* start gallery section */}

        </div>
    )
}

export default GalleryOne