"use client"
import React from 'react'
import Link from 'next/link';
const BlogGridMain = (props) => {
    const { Slug, blogImage, blogTitle, blogCategory, blogPublishedDate, descripTion } = props;
    return (
        <>
            <div className="portfolio-wrapper2 mb-30">
                <div className="img-fluid">
                    <img
                        src={`assets/images/product/${blogImage}`}
                        alt="Business_Finbiz"
                    />
                    <div className="portfolio-content">
                        <Link className="fw-bold text-white" href={`/project/${Slug}`}>
                            Veiw Details{" "}
                        </Link>
                    </div>
                </div>
                <div className="portfolio-text">
                    <div className="text">
                        <p className="p-category">
                            <Link href={`/project/${Slug}`}>Development</Link>
                        </p>
                        <div className="p-title">
                            <Link href={`/project/${Slug}`}>{blogTitle ? blogTitle : 'How to growing your business'}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default BlogGridMain