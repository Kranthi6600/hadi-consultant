"use client"
import React from 'react'
import Link from 'next/link';
const BlogGridMain = (props) => {
    const { Slug, blogImage, blogTitle, blogCategory, blogPublishedDate, descripTion } = props;
    return (
        <>
            {/* single -product area */}
            <div className="rts-product-one">
                <div className="thumbnail-area">
                    <img
                        src={`assets/images/product/${blogImage}`}
                        alt="Business_Finbiz"
                    />
                    <Link
                        className="rts-btn btn-primary rounded"
                        href={`/project/${Slug}`}
                    >
                        <i className="far fa-arrow-right" />
                    </Link>
                </div>
                <div className="product-contact-wrapper">
                    <span>Business Solution</span>
                    <Link href={`/project/${Slug}`} >
                        <h5 className="title">{blogTitle ? blogTitle : 'How to growing your business'}</h5>
                    </Link>
                    <p className="disc">
                        Ultricies nequenulla eros sapien cubilia nostra
                        viverra integer ornare prointa
                    </p>
                </div>
            </div>
            {/* single -product area End */}
        </>

    )
}

export default BlogGridMain