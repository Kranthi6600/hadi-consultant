"use client"
import React from 'react'
import  Link  from 'next/link';

const BlogTwoMain = (props) => {
    const { blogID, blogImage, blogTitle, blogPublishedDate } = props;
    return (
        <>


            <div className="thumbnail">
                <Link href={`/blog-list/${blogID}`}>
                    <img src={`assets/images/blog/${blogImage}`} alt="blog-area" />
                </Link>
                <div className="badge">
                    <span>{blogPublishedDate}</span>
                </div>
            </div>
            <div className="content-inner">
                <div className="top-blog">
                    <span className="main">Business Solution</span>
                    <span> / by David Dolean</span>
                </div>
                <Link className="title" href={`/blog-list/${blogID}`}>
                    <h5 className="title">
                        {blogTitle ? blogTitle : 'How to growing your business'}
                    </h5>
                </Link>
                <Link className="rts-read-more btn-primary" href={`/blog-list/${blogID}`}>
                    <i className="far fa-arrow-right" />
                    Read More
                </Link>
            </div>
        </>

    )
}

export default BlogTwoMain