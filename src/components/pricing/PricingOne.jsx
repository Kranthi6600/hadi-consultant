"use client"
import React, { useState } from 'react';
import { Tabs, Tab, TabContent } from 'react-bootstrap';
import Link from 'next/link';
import ErrorBoundary from "@/components/ErrorBoundary";
function PricingOne() {
    const [activeKey, setActiveKey] = useState('home');
    return (
        <ErrorBoundary>
        <div>
            {/* rts-pricing plane arae */}
            <div className="rts-pricing-plane rts-section-gap bg-pricing-bg-h2 margin-dec-padding-con">
                <div className="container mt-5">
                    {/* Wrapper for Tab Navigation */}
                    <div className="row">
                        <div className="tab-navigation">
                            <div className="pricing-tab-button-area title-area pricing-h2">
                                <span>Price Plans</span>
                                <h2 className="title">Pricing &amp; Plans</h2>
                                <p className="offer">
                                    <span>Save Over 25%</span> When You Select Annual Billing
                                </p>
                                <Tabs
                                    activeKey={activeKey}
                                    onSelect={(k) => setActiveKey(k)}
                                    id="controlled-tab-example"
                                    className="mb-3"
                                >
                                    <Tab eventKey="home" title="Home" />
                                    <Tab eventKey="profile" title="Profile" />
                                </Tabs>

                            </div>

                        </div>
                    </div>


                    {/* Wrapper for Tab Content */}
                    <div className="tab-content-wrapper mt--80">
                        {activeKey === 'home' && (
                            <TabContent>
                                <div className="row g-5">
                                    {/* single pricing plane */}
                                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                        <div className="pricing-wrapper-one home-two">
                                            {/* pricing header */}
                                            <div className="pricing-header-start">
                                                <h5 className="title">Basic Plan</h5>
                                                <div className="pric-area">
                                                    <h2 className="title">$250</h2>
                                                    <span>/Month</span>
                                                </div>
                                                <div className="discription">
                                                    <p className="disc">
                                                        Curabitur nullam dis nibh nisi nascetur vestibulum
                                                        proin mi morbi
                                                    </p>
                                                </div>
                                            </div>
                                            {/* pricing header End */}
                                            {/* pricing body start */}
                                            <div className="pricing-body">
                                                {/* single pricing */}
                                                <div className="single-pricing available">
                                                    <div className="icon">
                                                        <i className="far fa-check" />
                                                    </div>
                                                    <span className="price-details">Business Solution</span>
                                                </div>
                                                {/* single pricing End */}
                                                {/* single pricing */}
                                                <div className="single-pricing available">
                                                    <div className="icon">
                                                        <i className="far fa-check" />
                                                    </div>
                                                    <span className="price-details">
                                                        24/7 Consultant Service
                                                    </span>
                                                </div>
                                                {/* single pricing End */}
                                                {/* single pricing */}
                                                <div className="single-pricing available">
                                                    <div className="icon">
                                                        <i className="far fa-check" />
                                                    </div>
                                                    <span className="price-details">
                                                        Great Customer Support
                                                    </span>
                                                </div>
                                                {/* single pricing End */}
                                                {/* single pricing */}
                                                <div className="single-pricing ">
                                                    <div className="icon">
                                                        <i className="far fa-check" />
                                                    </div>
                                                    <span className="price-details">
                                                        Market Growth Solution
                                                    </span>
                                                </div>
                                                {/* single pricing End */}
                                                {/* single pricing */}
                                                <div className="single-pricing">
                                                    <div className="icon">
                                                        <i className="far fa-check" />
                                                    </div>
                                                    <span className="price-details">
                                                        24/7 Consultant Service
                                                    </span>
                                                </div>
                                                {/* single pricing End */}
                                                <Link className="rts-btn btn-primary" href={'#'}>
                                                    Buy This
                                                </Link>
                                            </div>
                                            {/* pricing body end */}
                                        </div>
                                    </div>
                                    {/* single pricing plane */}
                                    {/* single pricing plane */}
                                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                        <div className="pricing-wrapper-one home-two active">
                                            {/* pricing header */}
                                            <div className="pricing-header-start">
                                                <h5 className="title">Standard Plan</h5>
                                                <div className="pric-area">
                                                    <h2 className="title">$450</h2>
                                                    <span>/Month</span>
                                                </div>
                                                <div className="discription">
                                                    <p className="disc">
                                                        Curabitur nullam dis nibh nisi nascetur vestibulum
                                                        proin mi morbi
                                                    </p>
                                                </div>
                                            </div>
                                            {/* pricing header End */}
                                            {/* pricing body start */}
                                            <div className="pricing-body">
                                                {/* single pricing */}
                                                <div className="single-pricing available">
                                                    <div className="icon">
                                                        <i className="far fa-check" />
                                                    </div>
                                                    <span className="price-details">Business Solution</span>
                                                </div>
                                                {/* single pricing End */}
                                                {/* single pricing */}
                                                <div className="single-pricing available">
                                                    <div className="icon">
                                                        <i className="far fa-check" />
                                                    </div>
                                                    <span className="price-details">
                                                        24/7 Consultant Service
                                                    </span>
                                                </div>
                                                {/* single pricing End */}
                                                {/* single pricing */}
                                                <div className="single-pricing available">
                                                    <div className="icon">
                                                        <i className="far fa-check" />
                                                    </div>
                                                    <span className="price-details">
                                                        Great Customer Support
                                                    </span>
                                                </div>
                                                {/* single pricing End */}
                                                {/* single pricing */}
                                                <div className="single-pricing available">
                                                    <div className="icon">
                                                        <i className="far fa-check" />
                                                    </div>
                                                    <span className="price-details">
                                                        Market Growth Solution
                                                    </span>
                                                </div>
                                                {/* single pricing End */}
                                                {/* single pricing */}
                                                <div className="single-pricing available">
                                                    <div className="icon">
                                                        <i className="far fa-check" />
                                                    </div>
                                                    <span className="price-details">
                                                        24/7 Consultant Service
                                                    </span>
                                                </div>
                                                {/* single pricing End */}
                                                <Link className="rts-btn btn-primary active" href={'#'}>
                                                    Buy This
                                                </Link>
                                            </div>
                                            {/* pricing body end */}
                                        </div>
                                    </div>
                                    {/* single pricing plane */}
                                    {/* single pricing plane */}
                                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                        <div className="pricing-wrapper-one home-two">
                                            {/* pricing header */}
                                            <div className="pricing-header-start">
                                                <h5 className="title">Premium Plan</h5>
                                                <div className="pric-area">
                                                    <h2 className="title">$650</h2>
                                                    <span>/Month</span>
                                                </div>
                                                <div className="discription">
                                                    <p className="disc">
                                                        Curabitur nullam dis nibh nisi nascetur vestibulum
                                                        proin mi morbi
                                                    </p>
                                                </div>
                                            </div>
                                            {/* pricing header End */}
                                            {/* pricing body start */}
                                            <div className="pricing-body">
                                                {/* single pricing */}
                                                <div className="single-pricing available">
                                                    <div className="icon">
                                                        <i className="far fa-check" />
                                                    </div>
                                                    <span className="price-details">Business Solution</span>
                                                </div>
                                                {/* single pricing End */}
                                                {/* single pricing */}
                                                <div className="single-pricing available">
                                                    <div className="icon">
                                                        <i className="far fa-check" />
                                                    </div>
                                                    <span className="price-details">
                                                        24/7 Consultant Service
                                                    </span>
                                                </div>
                                                {/* single pricing End */}
                                                {/* single pricing */}
                                                <div className="single-pricing available">
                                                    <div className="icon">
                                                        <i className="far fa-check" />
                                                    </div>
                                                    <span className="price-details">
                                                        Great Customer Support
                                                    </span>
                                                </div>
                                                {/* single pricing End */}
                                                {/* single pricing */}
                                                <div className="single-pricing available">
                                                    <div className="icon">
                                                        <i className="far fa-check" />
                                                    </div>
                                                    <span className="price-details">
                                                        Market Growth Solution
                                                    </span>
                                                </div>
                                                {/* single pricing End */}
                                                {/* single pricing */}
                                                <div className="single-pricing available">
                                                    <div className="icon">
                                                        <i className="far fa-check" />
                                                    </div>
                                                    <span className="price-details">
                                                        24/7 Consultant Service
                                                    </span>
                                                </div>
                                                {/* single pricing End */}
                                                <Link className="rts-btn btn-primary" href={'#'}>
                                                    Buy This
                                                </Link>
                                            </div>
                                            {/* pricing body end */}
                                        </div>
                                    </div>
                                    {/* single pricing plane */}
                                </div>
                            </TabContent>
                        )}
                        {activeKey === 'profile' && (
                            <TabContent>
                                <div className="row g-5">
                                    {/* single pricing plane */}
                                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                        <div className="pricing-wrapper-one home-two">
                                            {/* pricing header */}
                                            <div className="pricing-header-start">
                                                <h5 className="title">Basic Plan</h5>
                                                <div className="pric-area">
                                                    <h2 className="title">$2500</h2>
                                                    <span>/Year</span>
                                                </div>
                                                <div className="discription">
                                                    <p className="disc">
                                                        Curabitur nullam dis nibh nisi nascetur vestibulum
                                                        proin mi morbi
                                                    </p>
                                                </div>
                                            </div>
                                            {/* pricing header End */}
                                            {/* pricing body start */}
                                            <div className="pricing-body">
                                                {/* single pricing */}
                                                <div className="single-pricing available">
                                                    <div className="icon">
                                                        <i className="far fa-check" />
                                                    </div>
                                                    <span className="price-details">Business Solution</span>
                                                </div>
                                                {/* single pricing End */}
                                                {/* single pricing */}
                                                <div className="single-pricing available">
                                                    <div className="icon">
                                                        <i className="far fa-check" />
                                                    </div>
                                                    <span className="price-details">
                                                        24/7 Consultant Service
                                                    </span>
                                                </div>
                                                {/* single pricing End */}
                                                {/* single pricing */}
                                                <div className="single-pricing available">
                                                    <div className="icon">
                                                        <i className="far fa-check" />
                                                    </div>
                                                    <span className="price-details">
                                                        Great Customer Support
                                                    </span>
                                                </div>
                                                {/* single pricing End */}
                                                {/* single pricing */}
                                                <div className="single-pricing ">
                                                    <div className="icon">
                                                        <i className="far fa-check" />
                                                    </div>
                                                    <span className="price-details">
                                                        Market Growth Solution
                                                    </span>
                                                </div>
                                                {/* single pricing End */}
                                                {/* single pricing */}
                                                <div className="single-pricing">
                                                    <div className="icon">
                                                        <i className="far fa-check" />
                                                    </div>
                                                    <span className="price-details">
                                                        24/7 Consultant Service
                                                    </span>
                                                </div>
                                                {/* single pricing End */}
                                                <Link className="rts-btn btn-primary" href={'#'}>
                                                    Buy This
                                                </Link>
                                            </div>
                                            {/* pricing body end */}
                                        </div>
                                    </div>
                                    {/* single pricing plane */}
                                    {/* single pricing plane */}
                                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                        <div className="pricing-wrapper-one home-two active">
                                            {/* pricing header */}
                                            <div className="pricing-header-start">
                                                <h5 className="title">Standard Plan</h5>
                                                <div className="pric-area">
                                                    <h2 className="title">$4500</h2>
                                                    <span>/Year</span>
                                                </div>
                                                <div className="discription">
                                                    <p className="disc">
                                                        Curabitur nullam dis nibh nisi nascetur vestibulum
                                                        proin mi morbi
                                                    </p>
                                                </div>
                                            </div>
                                            {/* pricing header End */}
                                            {/* pricing body start */}
                                            <div className="pricing-body">
                                                {/* single pricing */}
                                                <div className="single-pricing available">
                                                    <div className="icon">
                                                        <i className="far fa-check" />
                                                    </div>
                                                    <span className="price-details">Business Solution</span>
                                                </div>
                                                {/* single pricing End */}
                                                {/* single pricing */}
                                                <div className="single-pricing available">
                                                    <div className="icon">
                                                        <i className="far fa-check" />
                                                    </div>
                                                    <span className="price-details">
                                                        24/7 Consultant Service
                                                    </span>
                                                </div>
                                                {/* single pricing End */}
                                                {/* single pricing */}
                                                <div className="single-pricing available">
                                                    <div className="icon">
                                                        <i className="far fa-check" />
                                                    </div>
                                                    <span className="price-details">
                                                        Great Customer Support
                                                    </span>
                                                </div>
                                                {/* single pricing End */}
                                                {/* single pricing */}
                                                <div className="single-pricing available">
                                                    <div className="icon">
                                                        <i className="far fa-check" />
                                                    </div>
                                                    <span className="price-details">
                                                        Market Growth Solution
                                                    </span>
                                                </div>
                                                {/* single pricing End */}
                                                {/* single pricing */}
                                                <div className="single-pricing available">
                                                    <div className="icon">
                                                        <i className="far fa-check" />
                                                    </div>
                                                    <span className="price-details">
                                                        24/7 Consultant Service
                                                    </span>
                                                </div>
                                                {/* single pricing End */}
                                                <Link className="rts-btn btn-primary active" href={'#'}>
                                                    Buy This
                                                </Link>
                                            </div>
                                            {/* pricing body end */}
                                        </div>
                                    </div>
                                    {/* single pricing plane */}
                                    {/* single pricing plane */}
                                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                        <div className="pricing-wrapper-one home-two">
                                            {/* pricing header */}
                                            <div className="pricing-header-start">
                                                <h5 className="title">Premium Plan</h5>
                                                <div className="pric-area">
                                                    <h2 className="title">$6500</h2>
                                                    <span>/Year</span>
                                                </div>
                                                <div className="discription">
                                                    <p className="disc">
                                                        Curabitur nullam dis nibh nisi nascetur vestibulum
                                                        proin mi morbi
                                                    </p>
                                                </div>
                                            </div>
                                            {/* pricing header End */}
                                            {/* pricing body start */}
                                            <div className="pricing-body">
                                                {/* single pricing */}
                                                <div className="single-pricing available">
                                                    <div className="icon">
                                                        <i className="far fa-check" />
                                                    </div>
                                                    <span className="price-details">Business Solution</span>
                                                </div>
                                                {/* single pricing End */}
                                                {/* single pricing */}
                                                <div className="single-pricing available">
                                                    <div className="icon">
                                                        <i className="far fa-check" />
                                                    </div>
                                                    <span className="price-details">
                                                        24/7 Consultant Service
                                                    </span>
                                                </div>
                                                {/* single pricing End */}
                                                {/* single pricing */}
                                                <div className="single-pricing available">
                                                    <div className="icon">
                                                        <i className="far fa-check" />
                                                    </div>
                                                    <span className="price-details">
                                                        Great Customer Support
                                                    </span>
                                                </div>
                                                {/* single pricing End */}
                                                {/* single pricing */}
                                                <div className="single-pricing available">
                                                    <div className="icon">
                                                        <i className="far fa-check" />
                                                    </div>
                                                    <span className="price-details">
                                                        Market Growth Solution
                                                    </span>
                                                </div>
                                                {/* single pricing End */}
                                                {/* single pricing */}
                                                <div className="single-pricing available">
                                                    <div className="icon">
                                                        <i className="far fa-check" />
                                                    </div>
                                                    <span className="price-details">
                                                        24/7 Consultant Service
                                                    </span>
                                                </div>
                                                {/* single pricing End */}
                                                <Link className="rts-btn btn-primary" href={'#'}>
                                                    Buy This
                                                </Link>
                                            </div>
                                            {/* pricing body end */}
                                        </div>
                                    </div>
                                    {/* single pricing plane */}
                                </div>
                            </TabContent>
                        )}
                    </div>
                </div>
            </div>
            {/* rts-pricing plane arae End */}
        </div>
        </ErrorBoundary>
    )
}

export default PricingOne