"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import HeaderOne from "@/components/header/HeaderOne";
import FooterOne from "@/components/footer/FooterOne";
import Breadcrumb from "@/components/Breadcrumb";
import BackToTop from "@/components/BackToTop";
import BlogListMain from "./BlogListMain";
import Posts from "@/data/Posts.json";


export default function Home() {
    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'Blog Post' }
    ];
    return (

        <div className="">
            <HeaderOne />

            <Breadcrumb title="Blog Post" breadcrumbs={breadcrumbs} />

            <BackToTop />

            {/* rts blog grid area */}
            <div className="rts-blog-grid-area rts-section-gap">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-xl-8 col-md-12 col-sm-12 col-12 pr--40 pr_md--0 pr_sm-controler--0">
                            <div className="row g-5">

                                {Posts.map((data, index) => {
                                    return (
                                        <div key={index} className="col-lg-6 col-md-6 col-sm-12 col-12">
                                            <div className="blog-grid-inner">
                                                {
                                                    <BlogListMain
                                                        blogCategory={data.category}
                                                        Slug={data.slug}
                                                        blogImage={`${data.image}`}
                                                        authorImg={`${data.authorImg}`}
                                                        blogTitle={data.title}
                                                        blogAuthor={data.author}
                                                        blogPublishedDate={data.publishedDate}
                                                    />
                                                }
                                            </div>

                                        </div>
                                    )
                                }).slice(4, 16)}

                            </div>
                            {/* pagination area */}
                            <div className="row mt--30">
                                <div className="col-12">
                                    <div className="text-center">
                                        <div className="pagination">
                                            <button className="active">01</button>
                                            <button>02</button>
                                            <button>03</button>
                                            <button>04</button>
                                            <button>
                                                <i className="fal fa-angle-double-right" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* pagination area End */}
                        </div>
                        {/*rts blog wized area */}
                        <div className="col-xl-4 col-md-12 col-sm-12 col-12">
                            {/* single wized start */}
                            <div className="rts-single-wized search">
                                <div className="wized-header">
                                    <h5 className="title">Search Hear</h5>
                                </div>
                                <div className="wized-body">
                                    <div className="rts-search-wrapper">
                                        <input
                                            className="Search"
                                            type="text"
                                            placeholder="Enter Keyword"
                                        />
                                        <button>
                                            <i className="fal fa-search" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* single wized End */}
                            {/* single wized start */}
                            <div className="rts-single-wized Categories">
                                <div className="wized-header">
                                    <h5 className="title">Categories</h5>
                                </div>
                                <div className="wized-body">
                                    {/* single categoris */}
                                    <ul className="single-categories">
                                        <li>
                                            <Link href={'#'}>
                                                Business Solution <i className="far fa-long-arrow-right" />
                                            </Link>
                                        </li>
                                    </ul>
                                    {/* single categoris End */}
                                    {/* single categoris */}
                                    <ul className="single-categories">
                                        <li>
                                            <Link href={'#'}>
                                                Solution Model
                                                <i className="far fa-long-arrow-right" />
                                            </Link>
                                        </li>
                                    </ul>
                                    {/* single categoris End */}
                                    {/* single categoris */}
                                    <ul className="single-categories">
                                        <li>
                                            <Link href={'#'}>
                                                Business Advantage
                                                <i className="far fa-long-arrow-right" />
                                            </Link>
                                        </li>
                                    </ul>
                                    {/* single categoris End */}
                                    {/* single categoris */}
                                    <ul className="single-categories">
                                        <li>
                                            <Link href={'#'}>
                                                Feature Product
                                                <i className="far fa-long-arrow-right" />
                                            </Link>
                                        </li>
                                    </ul>
                                    {/* single categoris End */}
                                    {/* single categoris */}
                                    <ul className="single-categories">
                                        <li>
                                            <Link href={'#'}>
                                                Catagory Thury
                                                <i className="far fa-long-arrow-right" />
                                            </Link>
                                        </li>
                                    </ul>
                                    {/* single categoris End */}
                                </div>
                            </div>
                            {/* single wizered End */}
                            {/* single wizered start */}
                            <div className="rts-single-wized Recent-post">
                                <div className="wized-header">
                                    <h5 className="title">Recent Posts</h5>
                                </div>
                                <div className="wized-body">
                                    {/* recent-post */}
                                    <div className="recent-post-single">
                                        <div className="thumbnail">
                                            <Link href={'#'}>
                                                <img
                                                    src="assets/images/blog/details/recent-post/01.png"
                                                    alt="Blog_post"
                                                />
                                            </Link>
                                        </div>
                                        <div className="content-area">
                                            <div className="user">
                                                <i className="fal fa-clock" />
                                                <span>15 Jan, 2023</span>
                                            </div>
                                            <Link className="post-title" href={'#'}>
                                                <h6 className="title">
                                                    We would love to share a similar experience
                                                </h6>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* recent-post End */}
                                    {/* recent-post */}
                                    <div className="recent-post-single">
                                        <div className="thumbnail">
                                            <Link href={'#'}>
                                                <img
                                                    src="assets/images/blog/details/recent-post/02.png"
                                                    alt="Blog_post"
                                                />
                                            </Link>
                                        </div>
                                        <div className="content-area">
                                            <div className="user">
                                                <i className="fal fa-clock" />
                                                <span>15 Jan, 2023</span>
                                            </div>
                                            <Link className="post-title" href={'#'}>
                                                <h6 className="title">
                                                    We would love to share a similar experience
                                                </h6>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* recent-post End */}
                                    {/* recent-post */}
                                    <div className="recent-post-single">
                                        <div className="thumbnail">
                                            <Link href={'#'}>
                                                <img
                                                    src="assets/images/blog/details/recent-post/03.png"
                                                    alt="Blog_post"
                                                />
                                            </Link>
                                        </div>
                                        <div className="content-area">
                                            <div className="user">
                                                <i className="fal fa-clock" />
                                                <span>15 Jan, 2023</span>
                                            </div>
                                            <Link className="post-title" href={'#'}>
                                                <h6 className="title">
                                                    We would love to share a similar experience
                                                </h6>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* recent-post End */}
                                    {/* recent-post */}
                                    <div className="recent-post-single">
                                        <div className="thumbnail">
                                            <Link href={'#'}>
                                                <img
                                                    src="assets/images/blog/details/recent-post/04.png"
                                                    alt="Blog_post"
                                                />
                                            </Link>
                                        </div>
                                        <div className="content-area">
                                            <div className="user">
                                                <i className="fal fa-clock" />
                                                <span>15 Jan, 2023</span>
                                            </div>
                                            <Link className="post-title" href={'#'}>
                                                <h6 className="title">
                                                    We would love to share a similar experience
                                                </h6>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* recent-post End */}
                                </div>
                            </div>
                            {/* single wized End */}
                            {/* single wized start */}
                            <div className="rts-single-wized Recent-post">
                                <div className="wized-header">
                                    <h5 className="title">Recent Posts</h5>
                                </div>
                                <div className="wized-body">
                                    <div className="gallery-inner">
                                        <div className="row-1 single-row">
                                            <Link href={'#'}>
                                                <img
                                                    src="assets/images/blog/details/gallery/01.png"
                                                    alt="Gallery"
                                                />
                                            </Link>
                                            <Link href={'#'}>
                                                <img
                                                    src="assets/images/blog/details/gallery/02.png"
                                                    alt="Gallery"
                                                />
                                            </Link>
                                            <Link href={'#'}>
                                                <img
                                                    src="assets/images/blog/details/gallery/03.png"
                                                    alt="Gallery"
                                                />
                                            </Link>
                                        </div>
                                        <div className="row-2 single-row">
                                            <Link href={'#'}>
                                                <img
                                                    src="assets/images/blog/details/gallery/04.png"
                                                    alt="Gallery"
                                                />
                                            </Link>
                                            <Link href={'#'}>
                                                <img
                                                    src="assets/images/blog/details/gallery/05.png"
                                                    alt="Gallery"
                                                />
                                            </Link>
                                            <Link href={'#'}>
                                                <img
                                                    src="assets/images/blog/details/gallery/06.png"
                                                    alt="Gallery"
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* single wized End */}
                            {/* single wized start */}
                            <div className="rts-single-wized">
                                <div className="wized-header">
                                    <h5 className="title">Popular Tags</h5>
                                </div>
                                <div className="wized-body">
                                    <div className="tags-wrapper">
                                        <Link href={'#'}>Services</Link>
                                        <Link href={'#'}>Business</Link>
                                        <Link href={'#'}>Growth</Link>
                                        <Link href={'#'}>Finance</Link>
                                        <Link href={'#'}>UI/UX Design</Link>
                                        <Link href={'#'}>Solution</Link>
                                        <Link href={'#'}>Speed</Link>
                                        <Link href={'#'}>Strategy</Link>
                                        <Link href={'#'}>Technology</Link>
                                    </div>
                                </div>
                            </div>
                            {/* single wized End */}
                            {/* single wized start */}
                            <div className="rts-single-wized contact">
                                <div className="wized-header">
                                    <Link href="/">
                                        <img src="assets/images/logo/logo-2.svg" alt="Business_logo" />
                                    </Link>
                                </div>
                                <div className="wized-body">
                                    <h5 className="title">Need Help? We Are Here To Help You</h5>
                                    <Link className="rts-btn btn-primary" href="/contactus">
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                            {/* single wized End */}
                        </div>
                        {/* rts- blog wized end area */}
                    </div>
                </div>
            </div>
            {/* rts blog grid area end */}


            <FooterOne />
        </div>

    );
}
