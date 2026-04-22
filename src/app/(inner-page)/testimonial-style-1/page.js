"use client"
import React, { useState, useEffect } from 'react';
import HeaderOne from "@/components/header/HeaderOne";
import BackToTop from "@/components/BackToTop";
import Breadcrumb from "@/components/Breadcrumb";
import FooterOne from "@/components/footer/FooterOne";
import { Tabs, Tab, TabContent } from 'react-bootstrap';
export default function Home() {
    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'Pricing Plan' }
    ];
    const [activeKey, setActiveKey] = useState('home');
    return (
        <div className="">
            <HeaderOne />
            <Breadcrumb title="Pricing Plan" breadcrumbs={breadcrumbs} />
            {}
            <div className="rts-pricing-area rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="pricing-tab-button-area">
                                <span className="pricing-sub">
                                    {" "}
                                    <strong>Save Over 25%</strong> When You Select Annual Billing
                                </span>
                                <Tabs
                                    activeKey={activeKey}
                                    onSelect={(k) => setActiveKey(k)}
                                    id="controlled-tab-example"
                                    className="mb-3"
                                >
                                    <Tab eventKey="home" title="Monthly PLan" />
                                    <Tab eventKey="profile" title="Yearly Plan" />
                                </Tabs>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--100">
                        <div className="col-12">
                            {activeKey === 'home' && (
                                <TabContent>
                                    <div className="row g-5">
                                        {}
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="pricing-wrapper-one">
                                                <div className="plane-process">
                                                    <span>/month</span>
                                                    <h3 className="title">$260</h3>
                                                </div>
                                                {}
                                                <div className="pricing-header-start">
                                                    <span className="pre-title">Starter Package</span>
                                                    <h4 className="title">Basic Plan</h4>
                                                </div>
                                                {}
                                                {}
                                                <div className="pricing-body">
                                                    {}
                                                    <div className="single-pricing available">
                                                        <div className="icon">
                                                            <i className="far fa-check" />
                                                        </div>
                                                        <span className="price-details">Business Solution</span>
                                                    </div>
                                                    {}
                                                    {}
                                                    <div className="single-pricing available">
                                                        <div className="icon">
                                                            <i className="far fa-check" />
                                                        </div>
                                                        <span className="price-details">
                                                            24/7 Consultant Service
                                                        </span>
                                                    </div>
                                                    {}
                                                    {}
                                                    <div className="single-pricing available">
                                                        <div className="icon">
                                                            <i className="far fa-check" />
                                                        </div>
                                                        <span className="price-details">
                                                            Great Customer Support
                                                        </span>
                                                    </div>
                                                    {}
                                                    {}
                                                    <div className="single-pricing ">
                                                        <div className="icon">
                                                            <i className="far fa-check" />
                                                        </div>
                                                        <span className="price-details">
                                                            Market Growth Solution
                                                        </span>
                                                    </div>
                                                    {}
                                                    {}
                                                    <div className="single-pricing">
                                                        <div className="icon">
                                                            <i className="far fa-check" />
                                                        </div>
                                                        <span className="price-details">
                                                            24/7 Consultant Service
                                                        </span>
                                                    </div>
                                                    {}
                                                    <a className="rts-btn btn-primary" href="#">
                                                        Buy This
                                                    </a>
                                                </div>
                                                {}
                                            </div>
                                        </div>
                                        {}
                                        {}
                                        <div className="col-lg-4 col-md-6 col-sm-12 mt_sm--80">
                                            <div className="pricing-wrapper-one">
                                                <div className="plane-process">
                                                    <span>/month</span>
                                                    <h3 className="title">$290</h3>
                                                </div>
                                                {}
                                                <div className="pricing-header-start">
                                                    <span className="pre-title">Starter Package</span>
                                                    <h4 className="title">Strandard Plan</h4>
                                                </div>
                                                {}
                                                {}
                                                <div className="pricing-body">
                                                    {}
                                                    <div className="single-pricing available">
                                                        <div className="icon">
                                                            <i className="far fa-check" />
                                                        </div>
                                                        <span className="price-details">Business Solution</span>
                                                    </div>
                                                    {}
                                                    {}
                                                    <div className="single-pricing available">
                                                        <div className="icon">
                                                            <i className="far fa-check" />
                                                        </div>
                                                        <span className="price-details">
                                                            24/7 Consultant Service
                                                        </span>
                                                    </div>
                                                    {}
                                                    {}
                                                    <div className="single-pricing available">
                                                        <div className="icon">
                                                            <i className="far fa-check" />
                                                        </div>
                                                        <span className="price-details">
                                                            Great Customer Support
                                                        </span>
                                                    </div>
                                                    {}
                                                    {}
                                                    <div className="single-pricing ">
                                                        <div className="icon">
                                                            <i className="far fa-check" />
                                                        </div>
                                                        <span className="price-details">
                                                            Market Growth Solution
                                                        </span>
                                                    </div>
                                                    {}
                                                    {}
                                                    <div className="single-pricing">
                                                        <div className="icon">
                                                            <i className="far fa-check" />
                                                        </div>
                                                        <span className="price-details">
                                                            24/7 Consultant Service
                                                        </span>
                                                    </div>
                                                    {}
                                                    <a className="rts-btn btn-primary" href="#">
                                                        Buy This
                                                    </a>
                                                </div>
                                                {}
                                            </div>
                                        </div>
                                        {}
                                        {}
                                        <div className="col-lg-4 col-md-6 col-sm-12 mt_md--80 mt_sm--80">
                                            <div className="pricing-wrapper-one">
                                                <div className="plane-process">
                                                    <span>/month</span>
                                                    <h3 className="title">$300</h3>
                                                </div>
                                                {}
                                                <div className="pricing-header-start">
                                                    <span className="pre-title">Starter Package</span>
                                                    <h4 className="title">Premium Plan</h4>
                                                </div>
                                                {}
                                                {}
                                                <div className="pricing-body">
                                                    {}
                                                    <div className="single-pricing available">
                                                        <div className="icon">
                                                            <i className="far fa-check" />
                                                        </div>
                                                        <span className="price-details">Business Solution</span>
                                                    </div>
                                                    {}
                                                    {}
                                                    <div className="single-pricing available">
                                                        <div className="icon">
                                                            <i className="far fa-check" />
                                                        </div>
                                                        <span className="price-details">
                                                            24/7 Consultant Service
                                                        </span>
                                                    </div>
                                                    {}
                                                    {}
                                                    <div className="single-pricing available">
                                                        <div className="icon">
                                                            <i className="far fa-check" />
                                                        </div>
                                                        <span className="price-details">
                                                            Great Customer Support
                                                        </span>
                                                    </div>
                                                    {}
                                                    {}
                                                    <div className="single-pricing ">
                                                        <div className="icon">
                                                            <i className="far fa-check" />
                                                        </div>
                                                        <span className="price-details">
                                                            Market Growth Solution
                                                        </span>
                                                    </div>
                                                    {}
                                                    {}
                                                    <div className="single-pricing">
                                                        <div className="icon">
                                                            <i className="far fa-check" />
                                                        </div>
                                                        <span className="price-details">
                                                            24/7 Consultant Service
                                                        </span>
                                                    </div>
                                                    {}
                                                    <a className="rts-btn btn-primary" href="#">
                                                        Buy This
                                                    </a>
                                                </div>
                                                {}
                                            </div>
                                        </div>
                                        {}
                                    </div>
                                </TabContent>
                            )}
                            {activeKey === 'profile' && (
                                <TabContent>
                                    <div className="row g-5">
                                        {}
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="pricing-wrapper-one">
                                                <div className="plane-process">
                                                    <span>/month</span>
                                                    <h3 className="title">$560</h3>
                                                </div>
                                                {}
                                                <div className="pricing-header-start">
                                                    <span className="pre-title">Starter Package</span>
                                                    <h4 className="title">Basic Plan</h4>
                                                </div>
                                                {}
                                                {}
                                                <div className="pricing-body">
                                                    {}
                                                    <div className="single-pricing available">
                                                        <div className="icon">
                                                            <i className="far fa-check" />
                                                        </div>
                                                        <span className="price-details">Business Solution</span>
                                                    </div>
                                                    {}
                                                    {}
                                                    <div className="single-pricing available">
                                                        <div className="icon">
                                                            <i className="far fa-check" />
                                                        </div>
                                                        <span className="price-details">
                                                            24/7 Consultant Service
                                                        </span>
                                                    </div>
                                                    {}
                                                    {}
                                                    <div className="single-pricing available">
                                                        <div className="icon">
                                                            <i className="far fa-check" />
                                                        </div>
                                                        <span className="price-details">
                                                            Great Customer Support
                                                        </span>
                                                    </div>
                                                    {}
                                                    {}
                                                    <div className="single-pricing ">
                                                        <div className="icon">
                                                            <i className="far fa-check" />
                                                        </div>
                                                        <span className="price-details">
                                                            Market Growth Solution
                                                        </span>
                                                    </div>
                                                    {}
                                                    {}
                                                    <div className="single-pricing">
                                                        <div className="icon">
                                                            <i className="far fa-check" />
                                                        </div>
                                                        <span className="price-details">
                                                            24/7 Consultant Service
                                                        </span>
                                                    </div>
                                                    {}
                                                    <a className="rts-btn btn-primary" href="#">
                                                        Buy This
                                                    </a>
                                                </div>
                                                {}
                                            </div>
                                        </div>
                                        {}
                                        {}
                                        <div className="col-lg-4 col-md-6 col-sm-12 mt_sm--80">
                                            <div className="pricing-wrapper-one">
                                                <div className="plane-process">
                                                    <span>/month</span>
                                                    <h3 className="title">$590</h3>
                                                </div>
                                                {}
                                                <div className="pricing-header-start">
                                                    <span className="pre-title">Starter Package</span>
                                                    <h4 className="title">Basic Plan</h4>
                                                </div>
                                                {}
                                                {}
                                                <div className="pricing-body">
                                                    {}
                                                    <div className="single-pricing available">
                                                        <div className="icon">
                                                            <i className="far fa-check" />
                                                        </div>
                                                        <span className="price-details">Business Solution</span>
                                                    </div>
                                                    {}
                                                    {}
                                                    <div className="single-pricing available">
                                                        <div className="icon">
                                                            <i className="far fa-check" />
                                                        </div>
                                                        <span className="price-details">
                                                            24/7 Consultant Service
                                                        </span>
                                                    </div>
                                                    {}
                                                    {}
                                                    <div className="single-pricing available">
                                                        <div className="icon">
                                                            <i className="far fa-check" />
                                                        </div>
                                                        <span className="price-details">
                                                            Great Customer Support
                                                        </span>
                                                    </div>
                                                    {}
                                                    {}
                                                    <div className="single-pricing ">
                                                        <div className="icon">
                                                            <i className="far fa-check" />
                                                        </div>
                                                        <span className="price-details">
                                                            Market Growth Solution
                                                        </span>
                                                    </div>
                                                    {}
                                                    {}
                                                    <div className="single-pricing">
                                                        <div className="icon">
                                                            <i className="far fa-check" />
                                                        </div>
                                                        <span className="price-details">
                                                            24/7 Consultant Service
                                                        </span>
                                                    </div>
                                                    {}
                                                    <a className="rts-btn btn-primary" href="#">
                                                        Buy This
                                                    </a>
                                                </div>
                                                {}
                                            </div>
                                        </div>
                                        {}
                                        {}
                                        <div className="col-lg-4 col-md-6 col-sm-12 mt_md--80 mt_sm--80">
                                            <div className="pricing-wrapper-one">
                                                <div className="plane-process">
                                                    <span>/month</span>
                                                    <h3 className="title">$630</h3>
                                                </div>
                                                {}
                                                <div className="pricing-header-start">
                                                    <span className="pre-title">Starter Package</span>
                                                    <h4 className="title">Basic Plan</h4>
                                                </div>
                                                {}
                                                {}
                                                <div className="pricing-body">
                                                    {}
                                                    <div className="single-pricing available">
                                                        <div className="icon">
                                                            <i className="far fa-check" />
                                                        </div>
                                                        <span className="price-details">Business Solution</span>
                                                    </div>
                                                    {}
                                                    {}
                                                    <div className="single-pricing available">
                                                        <div className="icon">
                                                            <i className="far fa-check" />
                                                        </div>
                                                        <span className="price-details">
                                                            24/7 Consultant Service
                                                        </span>
                                                    </div>
                                                    {}
                                                    {}
                                                    <div className="single-pricing available">
                                                        <div className="icon">
                                                            <i className="far fa-check" />
                                                        </div>
                                                        <span className="price-details">
                                                            Great Customer Support
                                                        </span>
                                                    </div>
                                                    {}
                                                    {}
                                                    <div className="single-pricing ">
                                                        <div className="icon">
                                                            <i className="far fa-check" />
                                                        </div>
                                                        <span className="price-details">
                                                            Market Growth Solution
                                                        </span>
                                                    </div>
                                                    {}
                                                    {}
                                                    <div className="single-pricing">
                                                        <div className="icon">
                                                            <i className="far fa-check" />
                                                        </div>
                                                        <span className="price-details">
                                                            24/7 Consultant Service
                                                        </span>
                                                    </div>
                                                    {}
                                                    <a className="rts-btn btn-primary" href="#">
                                                        Buy This
                                                    </a>
                                                </div>
                                                {}
                                            </div>
                                        </div>
                                        {}
                                    </div>
                                </TabContent>
                            )}
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
