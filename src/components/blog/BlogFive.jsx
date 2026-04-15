"use client"
import React from 'react'
import  Link  from 'next/link';
function BlogFive() {
    return (
        <div>
            {/* rts-service area start */}
            <div className="rts-blog-area4 blog-area5 rts-section-gap pb--120 pb_sm--60" id='blog-section'>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="text-center title-service-three">
                                <p className="pre-title">Weekly Posts</p>
                                <h2 className="title">Our Latest Post</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5 mt--20">
                        <div className="col-xl-6 col-lg-6">
                            <div className="service-one-inner-four">
                                <div className="big-thumbnail-area">
                                    <Link href={'#'} className="thumbnail">
                                        <img src="assets/images/blog/13.jpg" alt="Business-service" />
                                        <span className="date">25 Dec, 2022</span>
                                    </Link>
                                    <div className="content-box">
                                        <div className="author-box">
                                            <p className="author">
                                                <span>BUSINESS SOLUTION</span> / BY DAVID DOLEAN
                                            </p>
                                        </div>
                                        <div className="content">
                                            <Link href={'/blog-details-default'}>
                                                <h5 className="title">
                                                    The quick settle tips of the new ages exist
                                                </h5></Link>
                                            <p className="desc">
                                                Euismod pulvinar tempus mi cum imperdiet felis blandit
                                                veldui libero pharetra enim magna nostra urna erat sagittis
                                                venatis
                                            </p>
                                        </div>
                                        <div className="button-area">
                                            <Link href={'/blog-details-default'}>
                                                <span>
                                                    <i className="far fa-arrow-right" />
                                                </span>
                                                Read More
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="service-one-inner-four">
                                <div className="big-thumbnail-area area-5">
                                    <div className="content-box">
                                        <div className="author-box">
                                            <p className="author">
                                                <span>MARKETING SOLUTION</span> / BY DAVID DOLEAN
                                            </p>
                                        </div>
                                        <div className="content">
                                            <Link href={'/blog-details-default'}>
                                                <h5 className="title">
                                                    The new ages tips of the quick settle
                                                </h5></Link>
                                            <p className="desc">
                                                Euismod pulvinar tempus mi cum imperdiet felis blandit
                                                veldui libero pharetra enim magna nostra urna erat sagittis
                                                venatis
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="big-thumbnail-area area-5">
                                    <div className="content-box">
                                        <div className="author-box">
                                            <p className="author">
                                                <span>CONSULTING SOLUTION</span> / BY DAVID DOLEAN
                                            </p>
                                        </div>
                                        <div className="content">
                                            <Link href={'/blog-details-default'}>
                                                <h5 className="title">
                                                    Report current news in your bussiness
                                                </h5></Link>
                                            <p className="desc">
                                                Euismod pulvinar tempus mi cum imperdiet felis blandit
                                                veldui libero pharetra enim magna nostra urna erat sagittis
                                                venatis
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="big-thumbnail-area area-5">
                                    <div className="content-box">
                                        <div className="author-box">
                                            <p className="author">
                                                <span>CORPORATE SOLUTION</span> / BY DAVID DOLEAN
                                            </p>
                                        </div>
                                        <div className="content">
                                            <Link href={'/blog-details-default'}>
                                                <h5 className="title">
                                                    Profitable bussiness make your profit
                                                </h5></Link>
                                            <p className="desc">
                                                Euismod pulvinar tempus mi cum imperdiet felis blandit
                                                veldui libero pharetra enim magna nostra urna erat sagittis
                                                venatis
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts-service area end */}

        </div>
    )
}

export default BlogFive