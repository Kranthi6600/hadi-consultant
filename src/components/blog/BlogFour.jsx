"use client"
import React from 'react'
import Link from 'next/link';
import post from '../../data/Posts.json';
import BlogFourMain from './BlogFourMain';
import ErrorBoundary from "@/components/ErrorBoundary";
function BlogFour() {
    return (
        <ErrorBoundary>
        <div>
            {/* rts-service area start */}
            <div className="rts-blog-area4 rts-section-gap pb--140" id='blog-section'>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="text-center title-service-three">
                                <p className="pre-title">WEEKLY POSTS</p>
                                <h2 className="title">Our Latest Post</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5 mt--20">
                        {post.map((data, index) => {
                            return (
                                <div key={index} className="col-xl-4">
                                    <div className="service-one-inner-four">
                                        {
                                            <BlogFourMain
                                                blogCategory={data.category}
                                                blogID={data.id}
                                                blogImage={`${data.image}`}
                                                authorImg={`${data.authorImg}`}
                                                blogTitle={data.title}
                                                blogAuthor={data.author}
                                                blogPublishedDate={data.publishedDate}
                                            />
                                        }
                                    </div>

                                </div>
                            )
                        }).slice(23, 26)}
                    </div>
                </div>
            </div>
            {/* rts-service area end */}

        </div>
        </ErrorBoundary>
    )
}

export default BlogFour