"use client"
import React from 'react'
import Link  from 'next/link';

const BlogGridMain = (props) => {
    const { blogID, blogImage, blogTitle, blogCategory, blogPublishedDate, descripTion } = props;
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
                    <Link className='blog-title' href={`/blog/${blogID}`}>
                        {blogTitle ? blogTitle : 'How to growing your business'}
                    </Link>
                </h3>
                <p className="disc">
                    {descripTion ? descripTion : "How to growing your business"}
                </p>
                <Link className="rts-btn btn-primary" href={`/blog/${blogID}`}>
                    Read Details
                </Link>
            </div>
        </>

    )
}

export default BlogGridMain