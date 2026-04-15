"use client"
import React from 'react'
import Link from 'next/link';
const BlogGridMain = (props) => {
    const { Slug, blogImage, blogTitle, blogCategory, blogPublishedDate, descripTion } = props;
    return (
        <>
            <div className="item">
                <div className="portfolio-wrapper">
                    <div className="img-fluid">
                    <img
                        src={`assets/images/product/${blogImage}`}
                        alt="Business_Finbiz"
                    />
                    </div>
                    <div className="single-portfolio">
                        <span>UI &amp; UX, IT Solution</span>
                        <h4 className="portfolio-title text-white">
                            {blogTitle ? blogTitle : 'How to growing your business'}
                        </h4>
                    </div>
                    <Link className="pf-btn" href={`/project/${Slug}`}>
                        <i className="fal fa-long-arrow-right" />
                    </Link>
                </div>
            </div>
            
        </>

    )
}

export default BlogGridMain