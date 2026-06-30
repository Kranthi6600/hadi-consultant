"use client"
import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Core Swiper styles
import { Navigation, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import BlogMain from './BlogMain';
import ErrorBoundary from "@/components/ErrorBoundary";
function Blog() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("/api/proxy-blogs")
            .then((res) => res.json())
            .then((data) => setBlogs((data.data || []).slice(0, 6)))
            .catch(() => setBlogs([]));
    }, []);

    return (
        <ErrorBoundary>
            <div>
                {}
                <div className="rts-blog-area rts-section-gap bg-secondary" id='blog-section'>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="title-area text-center">
                                    <span>Blog Posts</span>
                                    <h2 className="title">Latest Updates</h2>
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
                                    breakpoints={{
                                        320: {
                                            slidesPerView: 1,
                                        },
                                        640: {
                                            slidesPerView: 1,
                                        },
                                        768: {
                                            slidesPerView: 2,
                                        },
                                        1024: {
                                            slidesPerView: 3,
                                        },
                                    }}
                                >
                                    {blogs.map((blog, index) => {
                                        return (
                                            <SwiperSlide key={blog.id || index}>
                                                {
                                                    <BlogMain
                                                        blogID={blog.slug}
                                                        blogImage={blog.thumbnail || ''}
                                                        blogPublishedDate={blog.published_at ? new Date(blog.published_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : ''}
                                                        blogTitle={blog.title || 'Untitled'}
                                                    />
                                                }
                                            </SwiperSlide>
                                        )
                                    })}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
                {}
            </div>
        </ErrorBoundary>
    )
}
export default Blog