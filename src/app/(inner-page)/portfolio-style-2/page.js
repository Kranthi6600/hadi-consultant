"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import HeaderOne from "@/components/header/HeaderOne";
import BackToTop from "@/components/BackToTop";
import FooterOne from "@/components/footer/FooterOne";
import Breadcrumb from "@/components/Breadcrumb";
import PortfolioMain from "./PortfolioMain";
import Project from "@/data/Project.json";
export default function Home() {
    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'Portfolio Style 2' }
    ];
    const [activeKey, setActiveKey] = useState('home');
    return (

        <div className="">
            <HeaderOne />

            <Breadcrumb title="Portfolio Style 2" breadcrumbs={breadcrumbs} />

            {/*case-study-area start*/}
            <section className="case-study-area case-bg2 nav-style-1 pt--115 pt_md--60 pt_xs--60 pb--115 pb_md--60 pb_xs--60">
                <div className="container">
                    <div className="row">
                        {Project.map((data, index) => {
                            return (
                                <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                                    {
                                        <PortfolioMain
                                            Slug={data.slug}
                                            blogImage={`${data.image}`}
                                            blogAuthor={data.author}
                                            blogPublishedDate={data.publishedDate}
                                            blogCategory={data.category}
                                            blogTitle={data.title}
                                            descripTion={data.descripTion}
                                        />
                                    }
                                </div>
                            )
                        }).slice(0, 6)}
                    </div>
                </div>
            </section>
            {/*case-study-area end*/}

            <FooterOne />
            <BackToTop />
        </div>

    );
}
