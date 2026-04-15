"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import HeaderOne from "@/components/header/HeaderOne";
import BackToTop from "@/components/BackToTop";
import FooterOne from "@/components/footer/FooterOne";
import Breadcrumb from "@/components/Breadcrumb";
import ProjectMain from "./ProjectMain";
import Project from "@/data/Project.json";
export default function Home() {
    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'Portfolio Style 3' }
    ];
    const [activeKey, setActiveKey] = useState('home');
    return (

        <div className="">
            <HeaderOne />

            <Breadcrumb title="Portfolio Style 3" breadcrumbs={breadcrumbs} />

            {/*portfolio-area start*/}
            <section className="portfolio-area style-3 pt--110 pb--90 pt--md--60 pb--md-30 pt_xs--60 pb_xs--30">
                <div className="container">
                    <div className="grid row align-items-center">
                        {Project.map((data, index) => {
                            return (
                                <div key={index} className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                    {
                                        <ProjectMain
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
                        }).slice(6, 12)}
                    </div>
                </div>
            </section>
            {/*portfolio-area end*/}

            <FooterOne />
            <BackToTop />
        </div>

    );
}
