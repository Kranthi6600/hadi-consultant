"use client"
import React from 'react'
import post from '../../data/Posts.json';
import BlogTwoMain from './BlogTwoMain';

function BlogTwo() {
    return (
        <div>
            {/* start blog area */}
            <div className="rts-blog-area rts-section-gapTop" id='blog-section'>
                <div className="container">
                    <div className="row">
                        <div className="title-area text-center blog">
                            <span>Blog &amp; Article</span>
                            <h2 className="title">Recent blog post</h2>
                        </div>
                    </div>
                    <div className="row g-5 mt--20">
                        {post.map((data, index) => {
                            return (
                                <div key={index} className="col-lg-6 col-md-6">
                                    <div className="rts-blog-h-2-wrapper">
                                        {
                                            <BlogTwoMain
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
                        }).slice(21, 23)}
                    </div>
                </div>
            </div>
            {/* start blog area End */}
        </div>
    )
}

export default BlogTwo