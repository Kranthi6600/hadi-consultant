"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

import Link from 'next/link';
import post from '../../data/Posts.json';
import BlogEightMain from './BlogEightMain';

function BlogEight() {
    return (
        <div>
            {/* start blog area */}
            <div className="rts-blog-area eight rts-section-gapTop" id='blog-section'>
                <div className="container">
                    <div className="row">
                        <div className="title-area text-center blog">
                            <span>Blog &amp; Article</span>
                            <h2 className="title">Recent blog post</h2>
                        </div>
                    </div>
                    <div className=" mt--20">

                        <Swiper
                            // install Swiper modules
                            modules={[Navigation, EffectFade, Scrollbar, A11y, Autoplay]}
                            className="mySwiperh2_blog"
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
                                            <BlogEightMain
                                                blogID={data.id}
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
                            }).slice(28, 32)}
                        </Swiper>
                    </div>
                </div>
            </div>
            {/* start blog area End */}

        </div>
    )
}

export default BlogEight