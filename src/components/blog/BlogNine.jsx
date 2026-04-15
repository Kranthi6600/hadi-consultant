"use client"
import React from 'react'
import Link from 'next/link';

function BlogNine() {
    return (
        <div>
            {/* blog post area start */}
            <div className="blog-post-ten-area rts-section-gapTop" id='blog-section'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-area-left-ten center">
                                <span className="pre-title">News Updates</span>
                                <h2 className="title">
                                    Most Recent <span>Blog Posts</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5 mt--30">
                        <div className="col-lg-6">
                            {/* single blog style ten */}
                            <div className="single-blog-style-ten">
                                <Link href="/blog-list/26" className="thumbnail">
                                    <img src="assets/images/blog/17.png" alt="blog" />
                                </Link>
                                <div className="information">
                                    <div className="blog-top-area">
                                        <div className="single-area">
                                            <i className="far fa-clock" />
                                            <span>15 Oct, 2022</span>
                                        </div>
                                        <div className="single-area">
                                            <i className="fal fa-user" />
                                            <span>by Admin</span>
                                        </div>
                                    </div>
                                    <div className="main-wrapper">
                                        <Link href="/blog-list/26">
                                            <h5 className="title">
                                                How Analytics Agencies Shape Business Strategies
                                            </h5>
                                        </Link>
                                        <Link
                                            className="rts-read-more btn-primary"
                                            href="/blog-list/26"
                                        >
                                            <i className="far fa-arrow-right" />
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* single blog style ten end */}
                        </div>
                        <div className="col-lg-6">
                            {/* single blog style ten */}
                            <div className="single-blog-style-ten">
                                <Link href="/blog-list/26" className="thumbnail">
                                    <img src="assets/images/blog/18.png" alt="blog" />
                                </Link>
                                <div className="information">
                                    <div className="blog-top-area">
                                        <div className="single-area">
                                            <i className="far fa-clock" />
                                            <span>15 Oct, 2022</span>
                                        </div>
                                        <div className="single-area">
                                            <i className="fal fa-user" />
                                            <span>by Admin</span>
                                        </div>
                                    </div>
                                    <div className="main-wrapper">
                                        <Link href="/blog-list/26">
                                            <h5 className="title">
                                                HR Agencies' Role in Attracting &amp; Retaining Top
                                                Performers
                                            </h5>
                                        </Link>
                                        <Link
                                            className="rts-read-more btn-primary"
                                            href="/blog-list/26"
                                        >
                                            <i className="far fa-arrow-right" />
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* single blog style ten end */}
                        </div>
                        <div className="col-lg-6">
                            {/* single blog style ten */}
                            <div className="single-blog-style-ten">
                                <Link href="/blog-list/26" className="thumbnail">
                                    <img src="assets/images/blog/19.png" alt="blog" />
                                </Link>
                                <div className="information">
                                    <div className="blog-top-area">
                                        <div className="single-area">
                                            <i className="far fa-clock" />
                                            <span>15 Oct, 2022</span>
                                        </div>
                                        <div className="single-area">
                                            <i className="fal fa-user" />
                                            <span>by Admin</span>
                                        </div>
                                    </div>
                                    <div className="main-wrapper">
                                        <Link href="/blog-list/26">
                                            <h5 className="title">
                                                Performance Marketing Agencies Drive Revenue Growth
                                            </h5>
                                        </Link>
                                        <Link
                                            className="rts-read-more btn-primary"
                                            href="/blog-list/26"
                                        >
                                            <i className="far fa-arrow-right" />
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* single blog style ten end */}
                        </div>
                        <div className="col-lg-6">
                            {/* single blog style ten */}
                            <div className="single-blog-style-ten">
                                <Link href="/blog-list/26" className="thumbnail">
                                    <img src="assets/images/blog/20.png" alt="blog" />
                                </Link>
                                <div className="information">
                                    <div className="blog-top-area">
                                        <div className="single-area">
                                            <i className="far fa-clock" />
                                            <span>15 Oct, 2022</span>
                                        </div>
                                        <div className="single-area">
                                            <i className="fal fa-user" />
                                            <span>by Admin</span>
                                        </div>
                                    </div>
                                    <div className="main-wrapper">
                                        <Link href="/blog-list/26">
                                            <h5 className="title">
                                                What Content Marketing Agencies Rule the Online Realm
                                            </h5>
                                        </Link>
                                        <Link
                                            className="rts-read-more btn-primary"
                                            href="/blog-list/26"
                                        >
                                            <i className="far fa-arrow-right" />
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* single blog style ten end */}
                        </div>
                    </div>
                </div>
            </div>
            {/* blog post area end */}
        </div>
    )
}

export default BlogNine