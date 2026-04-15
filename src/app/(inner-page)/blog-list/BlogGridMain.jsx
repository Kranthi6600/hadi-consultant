"use client"
import React from 'react'

const BlogGridMain = (props) => {
    const { Slug, blogImage, blogTitle, blogCategory, blogPublishedDate, descripTion } = props;
    return (
        <>
            {/* thumbnail image dynamic */}
            <div className="thumbnail">
                <img src={`assets/images/blog/${blogImage}`} alt="Business-Blog" />
            </div>
            <div className="blog-listing-content">
                <div className="user-info">
                    {/* single info */}
                    <div className="single">
                        <i className="far fa-user-circle" />
                        <span>by David Smith</span>
                    </div>
                    {/* single infoe end */}
                    {/* single info */}
                    <div className="single">
                        <i className="far fa-clock" />
                        <span>{blogPublishedDate ? blogPublishedDate : 'Charlie Doyle'}</span>
                    </div>
                    {/* single infoe end */}
                    {/* single info */}
                    <div className="single">
                        <i className="far fa-tags" />
                        <span>{blogCategory ? blogCategory : "1"}</span>
                    </div>
                    {/* single info end */}
                </div>
                <h3 className="title">
                    <a className='blog-title' href={`/blog-list/${Slug}`}>
                        {blogTitle ? blogTitle : 'How to growing your business'}
                    </a>
                </h3>
                <p className="disc">
                    {descripTion ? descripTion : "How to growing your business"}
                </p>
                <a className="rts-btn btn-primary" href={`/blog-list/${Slug}`}>
                    Read Details
                </a>
            </div>
        </>

    )
}

export default BlogGridMain