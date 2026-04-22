"use client"
import Link from 'next/link';
import { Tabs, Tab, TabContent } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import HeaderOne from "@/components/header/HeaderOne";
import BackToTop from "@/components/BackToTop";
import FooterOne from "@/components/footer/FooterOne";
import Breadcrumb from "@/components/Breadcrumb";
import ProjectMain from "./ProjectMain";
import Project from "@/data/Project.json";
export default function Home(props) {
    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'Portfolio' }
    ];
    const [activeKey, setActiveKey] = useState('home');
    return (
        <div className="">
            <HeaderOne />
            <Breadcrumb title="Portfolio" breadcrumbs={breadcrumbs} />
            {}
            <div className="rts-project-area rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="tab-button-area-one">
                                <Tabs
                                    activeKey={activeKey}
                                    onSelect={(k) => setActiveKey(k)}
                                    id="controlled-tab-example"
                                    className="mb-3"
                                >
                                    <Tab eventKey="home" title="All Projects" />
                                    <Tab eventKey="profile" title="Business" />
                                    <Tab eventKey="contact" title="Solution" />
                                    <Tab eventKey="marketing" title="Marketing" />
                                </Tabs>
                            </div>
                            <div className="tab-content-area mt--50 mt_sm--30">
                                {activeKey === 'home' && (
                                    <TabContent>
                                        {}
                                        <div className="row g-5">
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
                                        {}
                                    </TabContent>
                                )}
                                {activeKey === 'profile' && (
                                    <TabContent>
                                  {}
                                  <div className="row g-5">
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
                                        {}
                                    </TabContent>
                                )}
                                {activeKey === 'contact' && (
                                    <TabContent>
                                        {}
                                        <div className="row g-5">
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                {}
                                                <div className="rts-product-one">
                                                    <div className="thumbnail-area">
                                                        <img
                                                            src="assets/images/product/06.jpg"
                                                            alt="Business_Finbiz"
                                                        />
                                                        <Link
                                                            className="rts-btn btn-primary rounded"
                                                            href={'/project-details'}
                                                        >
                                                            <i className="far fa-arrow-right" />
                                                        </Link>
                                                    </div>
                                                    <div className="product-contact-wrapper">
                                                        <span>Business Solution</span>
                                                        <Link href={'/project-details'}>
                                                            <h5 className="title">Business Growth Check</h5>
                                                        </Link>
                                                        <p className="disc">
                                                            Ultricies nequenulla eros sapien cubilia nostra
                                                            viverra integer ornare prointa
                                                        </p>
                                                    </div>
                                                </div>
                                                {}
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                {}
                                                <div className="rts-product-one">
                                                    <div className="thumbnail-area">
                                                        <img
                                                            src="assets/images/product/05.jpg"
                                                            alt="Business_Finbiz"
                                                        />
                                                        <Link
                                                            className="rts-btn btn-primary rounded"
                                                            href={'/project-details'}
                                                        >
                                                            <i className="far fa-arrow-right" />
                                                        </Link>
                                                    </div>
                                                    <div className="product-contact-wrapper">
                                                        <span>Business Solution</span>
                                                        <Link href={'/project-details'}>
                                                            <h5 className="title">Business Growth Check</h5>
                                                        </Link>
                                                        <p className="disc">
                                                            Ultricies nequenulla eros sapien cubilia nostra
                                                            viverra integer ornare prointa
                                                        </p>
                                                    </div>
                                                </div>
                                                {}
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                                {}
                                                <div className="rts-product-one">
                                                    <div className="thumbnail-area">
                                                        <img
                                                            src="assets/images/product/04.jpg"
                                                            alt="Business_Finbiz"
                                                        />
                                                        <Link
                                                            className="rts-btn btn-primary rounded"
                                                            href={'/project-details'}
                                                        >
                                                            <i className="far fa-arrow-right" />
                                                        </Link>
                                                    </div>
                                                    <div className="product-contact-wrapper">
                                                        <span>Business Solution</span>
                                                        <Link href={'/project-details'}>
                                                            <h5 className="title">Business Growth Check</h5>
                                                        </Link>
                                                        <p className="disc">
                                                            Ultricies nequenulla eros sapien cubilia nostra
                                                            viverra integer ornare prointa
                                                        </p>
                                                    </div>
                                                </div>
                                                {}
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                                {}
                                                <div className="rts-product-one">
                                                    <div className="thumbnail-area">
                                                        <img
                                                            src="assets/images/product/03.jpg"
                                                            alt="Business_Finbiz"
                                                        />
                                                        <Link
                                                            className="rts-btn btn-primary rounded"
                                                            href={'/project-details'}
                                                        >
                                                            <i className="far fa-arrow-right" />
                                                        </Link>
                                                    </div>
                                                    <div className="product-contact-wrapper">
                                                        <span>Business Solution</span>
                                                        <Link href={'/project-details'}>
                                                            <h5 className="title">Business Growth Check</h5>
                                                        </Link>
                                                        <p className="disc">
                                                            Ultricies nequenulla eros sapien cubilia nostra
                                                            viverra integer ornare prointa
                                                        </p>
                                                    </div>
                                                </div>
                                                {}
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                                {}
                                                <div className="rts-product-one">
                                                    <div className="thumbnail-area">
                                                        <img
                                                            src="assets/images/product/02.jpg"
                                                            alt="Business_Finbiz"
                                                        />
                                                        <Link
                                                            className="rts-btn btn-primary rounded"
                                                            href={'/project-details'}
                                                        >
                                                            <i className="far fa-arrow-right" />
                                                        </Link>
                                                    </div>
                                                    <div className="product-contact-wrapper">
                                                        <span>Business Solution</span>
                                                        <Link href={'/project-details'}>
                                                            <h5 className="title">Business Growth Check</h5>
                                                        </Link>
                                                        <p className="disc">
                                                            Ultricies nequenulla eros sapien cubilia nostra
                                                            viverra integer ornare prointa
                                                        </p>
                                                    </div>
                                                </div>
                                                {}
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                                {}
                                                <div className="rts-product-one">
                                                    <div className="thumbnail-area">
                                                        <img
                                                            src="assets/images/product/01.jpg"
                                                            alt="Business_Finbiz"
                                                        />
                                                        <Link
                                                            className="rts-btn btn-primary rounded"
                                                            href={'/project-details'}
                                                        >
                                                            <i className="far fa-arrow-right" />
                                                        </Link>
                                                    </div>
                                                    <div className="product-contact-wrapper">
                                                        <span>Business Solution</span>
                                                        <Link href={'/project-details'}>
                                                            <h5 className="title">Business Growth Check</h5>
                                                        </Link>
                                                        <p className="disc">
                                                            Ultricies nequenulla eros sapien cubilia nostra
                                                            viverra integer ornare prointa
                                                        </p>
                                                    </div>
                                                </div>
                                                {}
                                            </div>
                                        </div>
                                        {}
                                    </TabContent>
                                )}
                                {activeKey === 'marketing' && (
                                    <TabContent>
                                        {}
                                        <div className="row g-5">
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                {}
                                                <div className="rts-product-one">
                                                    <div className="thumbnail-area">
                                                        <img
                                                            src="assets/images/product/06.jpg"
                                                            alt="Business_Finbiz"
                                                        />
                                                        <Link
                                                            className="rts-btn btn-primary rounded"
                                                            href={'/project-details'}
                                                        >
                                                            <i className="far fa-arrow-right" />
                                                        </Link>
                                                    </div>
                                                    <div className="product-contact-wrapper">
                                                        <span>Business Solution</span>
                                                        <Link href={'/project-details'}>
                                                            <h5 className="title">Business Growth Check</h5>
                                                        </Link>
                                                        <p className="disc">
                                                            Ultricies nequenulla eros sapien cubilia nostra
                                                            viverra integer ornare prointa
                                                        </p>
                                                    </div>
                                                </div>
                                                {}
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                {}
                                                <div className="rts-product-one">
                                                    <div className="thumbnail-area">
                                                        <img
                                                            src="assets/images/product/05.jpg"
                                                            alt="Business_Finbiz"
                                                        />
                                                        <Link
                                                            className="rts-btn btn-primary rounded"
                                                            href={'/project-details'}
                                                        >
                                                            <i className="far fa-arrow-right" />
                                                        </Link>
                                                    </div>
                                                    <div className="product-contact-wrapper">
                                                        <span>Business Solution</span>
                                                        <Link href={'/project-details'}>
                                                            <h5 className="title">Business Growth Check</h5>
                                                        </Link>
                                                        <p className="disc">
                                                            Ultricies nequenulla eros sapien cubilia nostra
                                                            viverra integer ornare prointa
                                                        </p>
                                                    </div>
                                                </div>
                                                {}
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                                {}
                                                <div className="rts-product-one">
                                                    <div className="thumbnail-area">
                                                        <img
                                                            src="assets/images/product/04.jpg"
                                                            alt="Business_Finbiz"
                                                        />
                                                        <Link
                                                            className="rts-btn btn-primary rounded"
                                                            href={'/project-details'}
                                                        >
                                                            <i className="far fa-arrow-right" />
                                                        </Link>
                                                    </div>
                                                    <div className="product-contact-wrapper">
                                                        <span>Business Solution</span>
                                                        <Link href={'/project-details'}>
                                                            <h5 className="title">Business Growth Check</h5>
                                                        </Link>
                                                        <p className="disc">
                                                            Ultricies nequenulla eros sapien cubilia nostra
                                                            viverra integer ornare prointa
                                                        </p>
                                                    </div>
                                                </div>
                                                {}
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                                {}
                                                <div className="rts-product-one">
                                                    <div className="thumbnail-area">
                                                        <img
                                                            src="assets/images/product/03.jpg"
                                                            alt="Business_Finbiz"
                                                        />
                                                        <Link
                                                            className="rts-btn btn-primary rounded"
                                                            href={'/project-details'}
                                                        >
                                                            <i className="far fa-arrow-right" />
                                                        </Link>
                                                    </div>
                                                    <div className="product-contact-wrapper">
                                                        <span>Business Solution</span>
                                                        <Link href={'/project-details'}>
                                                            <h5 className="title">Business Growth Check</h5>
                                                        </Link>
                                                        <p className="disc">
                                                            Ultricies nequenulla eros sapien cubilia nostra
                                                            viverra integer ornare prointa
                                                        </p>
                                                    </div>
                                                </div>
                                                {}
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                                {}
                                                <div className="rts-product-one">
                                                    <div className="thumbnail-area">
                                                        <img
                                                            src="assets/images/product/02.jpg"
                                                            alt="Business_Finbiz"
                                                        />
                                                        <Link
                                                            className="rts-btn btn-primary rounded"
                                                            href={'/project-details'}
                                                        >
                                                            <i className="far fa-arrow-right" />
                                                        </Link>
                                                    </div>
                                                    <div className="product-contact-wrapper">
                                                        <span>Business Solution</span>
                                                        <Link href={'/project-details'}>
                                                            <h5 className="title">Business Growth Check</h5>
                                                        </Link>
                                                        <p className="disc">
                                                            Ultricies nequenulla eros sapien cubilia nostra
                                                            viverra integer ornare prointa
                                                        </p>
                                                    </div>
                                                </div>
                                                {}
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                                {}
                                                <div className="rts-product-one">
                                                    <div className="thumbnail-area">
                                                        <img
                                                            src="assets/images/product/01.jpg"
                                                            alt="Business_Finbiz"
                                                        />
                                                        <Link
                                                            className="rts-btn btn-primary rounded"
                                                            href={'/project-details'}
                                                        >
                                                            <i className="far fa-arrow-right" />
                                                        </Link>
                                                    </div>
                                                    <div className="product-contact-wrapper">
                                                        <span>Business Solution</span>
                                                        <Link href={'/project-details'}>
                                                            <h5 className="title">Business Growth Check</h5>
                                                        </Link>
                                                        <p className="disc">
                                                            Ultricies nequenulla eros sapien cubilia nostra
                                                            viverra integer ornare prointa
                                                        </p>
                                                    </div>
                                                </div>
                                                {}
                                            </div>
                                        </div>
                                        {}
                                    </TabContent>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {}
            <FooterOne />
            <BackToTop />
        </div>
    );
}
