"use client"
import React from 'react'
import Link from 'next/link';
function BlogThree() {
    return (
        <div>
            {/* tart latest blog area */}
            <div className="rts-latest-blog-three rts-section-gapBottom" id='blog-section'>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="title-area blog-three text-center">
                                <span>Weekly Updates</span>
                                <h2 className="title">Our Latest Updates</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5 mt--20">
                        {/* single blog */}
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="blog-three-wrapepr">
                                <Link href={'/blog-list/Profitable%20business%20makes%20your%20profi'} className="main-thumbnail">
                                    <img src="assets/images/blog/05.jpg" alt="Blog_image" />
                                    <span className="badge-blog">Solution</span>
                                </Link>
                                <div className="blog-body">
                                    <div className="blog-header">
                                        <div className="left">
                                            <i className="far fa-clock" />
                                            <span>25 Jan, 2022</span>
                                        </div>
                                        <div className="right">
                                            <i className="far fa-user" />
                                            <span>by david smith</span>
                                        </div>
                                    </div>
                                    <div className="body">
                                        <Link href={'/blog-list/Profitable%20business%20makes%20your%20profi'}>
                                            <h5 className="title">
                                                The quick settle tips new ages exist working solution
                                            </h5>
                                        </Link>
                                        <Link href={'/blog-list/Profitable%20business%20makes%20your%20profi'} className="rts-btn btn-light-3">
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* single blog */}
                        {/* single blog */}
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="blog-three-wrapepr">
                                <Link href={'/blog-list/Profitable%20business%20makes%20your%20profi'} className="main-thumbnail">
                                    <img src="assets/images/blog/06.jpg" alt="Blog_image" />
                                    <span className="badge-blog">Solution</span>
                                </Link>
                                <div className="blog-body">
                                    <div className="blog-header">
                                        <div className="left">
                                            <i className="far fa-clock" />
                                            <span>25 Jan, 2022</span>
                                        </div>
                                        <div className="right">
                                            <i className="far fa-user" />
                                            <span>by david smith</span>
                                        </div>
                                    </div>
                                    <div className="body">
                                        <Link href={'/blog-list/Profitable%20business%20makes%20your%20profi'}>
                                            <h5 className="title">
                                                The quick settle tips new ages exist working solution
                                            </h5>
                                        </Link>
                                        <Link href={'/blog-list/Profitable%20business%20makes%20your%20profi'} className="rts-btn btn-light-3">
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* single blog */}
                        {/* single blog */}
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="blog-three-wrapepr">
                                <Link href={'/blog-list/Profitable%20business%20makes%20your%20profi'} className="main-thumbnail">
                                    <img src="assets/images/blog/07.jpg" alt="Blog_image" />
                                    <span className="badge-blog">Solution</span>
                                </Link>
                                <div className="blog-body">
                                    <div className="blog-header">
                                        <div className="left">
                                            <i className="far fa-clock" />
                                            <span>25 Jan, 2022</span>
                                        </div>
                                        <div className="right">
                                            <i className="far fa-user" />
                                            <span>by david smith</span>
                                        </div>
                                    </div>
                                    <div className="body">
                                        <Link href={'/blog-list/Profitable%20business%20makes%20your%20profi'}>
                                            <h5 className="title">
                                                The quick settle tips new ages exist working solution
                                            </h5>
                                        </Link>
                                        <Link href={'/blog-list/Profitable%20business%20makes%20your%20profi'} className="rts-btn btn-light-3">
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* single blog */}
                    </div>
                </div>
            </div>
            {/* tart latest blog area End */}
        </div>
    )
}

export default BlogThree