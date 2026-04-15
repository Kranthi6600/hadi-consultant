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
import post from '../../data/Posts.json';
import BlogOneMain from './BlogOneMain';

function BlogOne() {
    return (
        <div>

            {/* blog area start */}
            <div className="rts-blog-area rts-section-gap style-seven " id='blog-section'>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="title-area text-center">
                                <span>Blog Posts</span>
                                <h2 className="title">News &amp; Updates</h2>
                            </div>
                        </div>
                    </div>
                    <div className="g-5 mt--20">
                        <div className="swiper ">
                            <Swiper
                                // install Swiper modules
                                modules={[Navigation, EffectFade, Scrollbar, A11y, Autoplay]}
                                className="mySwiperh1_blog"
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

                                {post.map((data, index) => {
                                    return (
                                        <SwiperSlide key={index}>
                                            {
                                                <BlogOneMain
                                                    blogID={data.id}
                                                    Slug={data.slug}
                                                    blogImage={`${data.image}`}
                                                    blogAuthor={data.author}
                                                    blogPublishedDate={data.publishedDate}
                                                    blogCategory={data.category}
                                                    blogTitle={data.title}
                                                    descripTion={data.descripTion}
                                                />
                                            }
                                        </SwiperSlide>
                                    )
                                }).slice(17, 21)}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
            {/* blog area end */}

        </div>
    )
}

export default BlogOne