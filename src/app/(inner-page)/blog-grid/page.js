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
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 4;
    const totalPages = Math.ceil(Posts.length / postsPerPage);
const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = Posts.slice(indexOfFirstPost, indexOfLastPost);
const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'Blog Post' }
    ];
const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo(0, 0);
    };
return (
        <div className="">
            <HeaderOne />
            <Breadcrumb title="Blog Post" breadcrumbs={breadcrumbs} />
            <BackToTop />
            {}
            <div className="rts-blog-grid-area rts-section-gap">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-xl-8 col-md-12 col-sm-12 col-12 pr--40 pr_md--0 pr_sm-controler--0">
                            <div className="row g-5">
                                {currentPosts.map((data, index) => {
                                    return (
                                        <div key={index} className="col-lg-6 col-md-6 col-sm-12 col-12">
                                            <div className="blog-grid-inner">
                                                <BlogListMain
                                                    blogCategory={data.category}
                                                    Slug={data.slug}
                                                    blogImage={data.image}
                                                    authorImg={data.authorImg}
                                                    blogTitle={data.title}
                                                    blogAuthor={data.author}
                                                    blogPublishedDate={data.publishedDate}
                                                />
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            {}
                            <div className="row mt--30">
                                <div className="col-12">
                                    <div className="text-center">
                                        <div className="pagination">
                                            {Array.from({ length: totalPages }, (_, i) => (
                                                <button
                                                    key={i + 1}
                                                    className={currentPage === i + 1 ? 'active' : ''}
                                                    onClick={() => handlePageChange(i + 1)}
                                                    style={{
                                                        padding: '10px 15px',
                                                        margin: '0 5px',
                                                        border: '1px solid #e0e0e0',
                                                        backgroundColor: currentPage === i + 1 ? '#DF0A0A' : '#fff',
                                                        color: currentPage === i + 1 ? '#fff' : '#333',
                                                        borderRadius: '5px',
                                                        cursor: 'pointer',
                                                        transition: 'all 0.3s ease',
                                                        fontSize: '14px',
                                                        fontWeight: '500'
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        if (currentPage !== i + 1) {
                                                            e.target.style.backgroundColor = '#FFECEC';
                                                            e.target.style.borderColor = '#DF0A0A';
                                                        }
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        if (currentPage !== i + 1) {
                                                            e.target.style.backgroundColor = '#fff';
                                                            e.target.style.borderColor = '#e0e0e0';
                                                        }
                                                    }}
                                                >
                                                    {(i + 1).toString().padStart(2, '0')}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {}
                        </div>
                        {}
                        <div className="col-xl-4 col-md-12 col-sm-12 col-12">
                            {}
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
                            {}
                            {}
                            <div className="rts-single-wized Categories">
                                <div className="wized-header">
                                    <h5 className="title">Categories</h5>
                                </div>
                                <div className="wized-body">
                                    {}
                                    <ul className="single-categories">
                                        <li>
                                            <Link href={'#'}>
                                                Business Solution <i className="far fa-long-arrow-right" />
                                            </Link>
                                        </li>
                                    </ul>
                                    {}
                                    {}
                                    <ul className="single-categories">
                                        <li>
                                            <Link href={'#'}>
                                                Solution Model
                                                <i className="far fa-long-arrow-right" />
                                            </Link>
                                        </li>
                                    </ul>
                                    {}
                                    {}
                                    <ul className="single-categories">
                                        <li>
                                            <Link href={'#'}>
                                                Business Advantage
                                                <i className="far fa-long-arrow-right" />
                                            </Link>
                                        </li>
                                    </ul>
                                    {}
                                    {}
                                    <ul className="single-categories">
                                        <li>
                                            <Link href={'#'}>
                                                Feature Product
                                                <i className="far fa-long-arrow-right" />
                                            </Link>
                                        </li>
                                    </ul>
                                    {}
                                    {}
                                    <ul className="single-categories">
                                        <li>
                                            <Link href={'#'}>
                                                Catagory Thury
                                                <i className="far fa-long-arrow-right" />
                                            </Link>
                                        </li>
                                    </ul>
                                    {}
                                </div>
                            </div>
                            {}
                            {}
                            <div className="rts-single-wized Recent-post">
                                <div className="wized-header">
                                    <h5 className="title">Recent Posts</h5>
                                </div>
                                <div className="wized-body">
                                    {}
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
                                    {}
                                    {}
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
                                    {}
                                    {}
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
                                    {}
                                    {}
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
                                    {}
                                </div>
                            </div>
                            {}
                            {}
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
                            {}
                            {}
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
                            {}
                            {}
                            <div className="rts-single-wized contact">
                                <div className="wized-header">
                                    <Link href="/">
                                        <img src="assets/images/logo/logo-2.svg" alt="Business_logo" />
                                    </Link>
                                </div>
                                <div className="wized-body">
                                    <h5 className="title">Need Help? We Are Here To Help You</h5>
                                    <Link className="rts-btn btn-primary" href="/contact">
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                            {}
                        </div>
                        {}
                    </div>
                </div>
            </div>
            {}
<FooterOne />
        </div>
    )
}
