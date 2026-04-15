"use client"
import React from 'react'
import Link from 'next/link';
const BlogGridMain = (props) => {
    const { Slug, blogImage, blogTitle, blogCategory, blogPublishedDate, descripTion } = props;
    return (
        <>
            <div className="item">
                    <div className="cases-wrapper2">
                        <div className="item-image">
                            <img src={`assets/images/product/${blogImage}`} alt="Image" />

                        </div>
                        <div className="item-content">
                            <h6>{blogCategory ? blogCategory : "1"}</h6>
                            <h5 className="fs-20 text-heding3">
                                {blogTitle ? blogTitle : 'How to growing your business'}
                            </h5>
                            <p>
                                Lorem ipsum dolor sit amet, conse ctetur a dipisicing elit
                            </p>
                        </div>
                        <Link href={`/project/${Slug}`} className="read-more">
                            Case Details{" "}
                            <span className="f-right">
                                <i className="far fa-long-arrow-right" />
                            </span>
                        </Link>
                    </div>
                </div>
        </>

    )
}

export default BlogGridMain