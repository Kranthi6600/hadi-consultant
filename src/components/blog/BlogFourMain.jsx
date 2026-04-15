"use client"
import React from 'react'
import Link from 'next/link';

const BlogTwoMain = (props) => {
    const { blogID, blogImage, blogTitle, blogPublishedDate } = props;
    return (
        <>


            <div className="service-one-inner-four">
                <div className="big-thumbnail-area">
                    <Link href={`/blog-list/${blogID}`} className="thumbnail">
                        <img src={`assets/images/blog/${blogImage}`} alt="Business-service" />
                    </Link>
                    <div className="content">
                        <h5 className="title">
                            {blogTitle ? blogTitle : 'How to growing your business'}
                        </h5>
                    </div>
                    <div className="author-box">
                        <p className="date">15 Oct, 2022</p>
                        <p className="author">by Admin</p>
                    </div>
                </div>
            </div>
        </>

    )
}

export default BlogTwoMain