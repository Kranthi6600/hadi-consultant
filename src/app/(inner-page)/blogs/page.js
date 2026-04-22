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
                            <div className="rts-single-wized Categories">
                                <div className="wized-header">
                                    <h5 className="title">Categories</h5>
                                </div>
                                <div className="wized-body">
                                    {}
                                    <ul className="single-categories">
                                        <li>
                                            <Link href={'#'}>
                                                Tax Consulting <i className="far fa-long-arrow-right" />
                                            </Link>
                                        </li>
                                    </ul>
                                    {}
                                    {}
                                    <ul className="single-categories">
                                        <li>
                                            <Link href={'#'}>
                                                Financial Planning
                                                <i className="far fa-long-arrow-right" />
                                            </Link>
                                        </li>
                                    </ul>
                                    {}
                                    {}
                                    <ul className="single-categories">
                                        <li>
                                            <Link href={'#'}>
                                                Tax Compliance
                                                <i className="far fa-long-arrow-right" />
                                            </Link>
                                        </li>
                                    </ul>
                                    {}
                                    {}
                                    <ul className="single-categories">
                                        <li>
                                            <Link href={'#'}>
                                                Business Advisory
                                                <i className="far fa-long-arrow-right" />
                                            </Link>
                                        </li>
                                    </ul>
                                    {}
                                    {}
                                    <ul className="single-categories">
                                        <li>
                                            <Link href={'#'}>
                                                Audit Services
                                                <i className="far fa-long-arrow-right" />
                                            </Link>
                                        </li>
                                    </ul>
                                    {}
                                </div>
                            </div>
                            {}
                            {}
                            <div className="rts-single-wized contact">
                                <div className="wized-header">
                                    <img src="/assets/images/cropped-cropped-HADI_CONSULTANTS_logo-removebg-preview-140x74.webp" alt="HADI CONSULTANTS logo" />
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
