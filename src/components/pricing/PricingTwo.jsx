"use client"
import React, { useState } from 'react';
import { Tabs, Tab, TabContent } from 'react-bootstrap';
import Link from 'next/link';


function PricingTwo() {
    const [activeKey, setActiveKey] = useState('home');
    return (
        <div>
            {/* rts pricing area start */}
            <div className="rts-pricing-area rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="pricing-three-title-area">
                                <div className="title-area">
                                    <span className="sub">Price Table</span>
                                    <h2 className="title">Pricing &amp; Plans</h2>
                                </div>
                                <div className="pricing-tab-button-area">
                                    <Tabs
                                        activeKey={activeKey}
                                        onSelect={(k) => setActiveKey(k)}
                                        id="controlled-tab-example"
                                        className="mb-3"
                                    >
                                        <Tab eventKey="home" title="Monthly PLan" />
                                        <Tab eventKey="profile" title="Yearly PLan" />
                                    </Tabs>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--100">
                        <div className="col-12">
                            {activeKey === 'home' && (
                                <TabContent>
                                    <div className="row g-5">
                                        {/* single pricing plane */}
                                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                            <div className="pricing-wrapper-one">
                                                <div className="plane-process">
                                                    <span>/month</span>
                                                    <h3 className="title">$160</h3>
                                                </div>
                                                {/* pricing header */}
                                                <div className="pricing-header-start">
                                                    <span className="pre-title">Starter Package</span>
                                                    <h4 className="title">Basic Plan</h4>
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
                                                    <Link className="rts-btn btn-primary-3" href={'#'}>
                                                        Buy This
                                                    </Link>
                                                </div>
                                                {/* pricing body end */}
                                            </div>
                                        </div>
                                        {/* single pricing plane */}
                                        {/* single pricing plane */}
                                        <div className="col-lg-4 col-md-6 col-sm-12 col-12 mt_sm--80">
                                            <div className="pricing-wrapper-one">
                                                <div className="plane-process">
                                                    <span>/month</span>
                                                    <h3 className="title">$180</h3>
                                                </div>
                                                {/* pricing header */}
                                                <div className="pricing-header-start">
                                                    <span className="pre-title">Starter Package</span>
                                                    <h4 className="title">Standard Plan</h4>
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
                                                    <Link className="rts-btn btn-primary-3" href={'#'}>
                                                        Buy This
                                                    </Link>
                                                </div>
                                                {/* pricing body end */}
                                            </div>
                                        </div>
                                        {/* single pricing plane */}
                                        {/* single pricing plane */}
                                        <div className="col-lg-4 col-md-6 col-sm-12 col-12 mt_md--80 mt_sm--80">
                                            <div className="pricing-wrapper-one">
                                                <div className="plane-process">
                                                    <span>/month</span>
                                                    <h3 className="title">$260</h3>
                                                </div>
                                                {/* pricing header */}
                                                <div className="pricing-header-start">
                                                    <span className="pre-title">Starter Package</span>
                                                    <h4 className="title">Premium Plan</h4>
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
                                                    <Link className="rts-btn btn-primary-3" href={'#'}>
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
                                        <div className="col-lg-4">
                                            <div className="pricing-wrapper-one">
                                                <div className="plane-process">
                                                    <span>/year</span>
                                                    <h3 className="title">$1800</h3>
                                                </div>
                                                {/* pricing header */}
                                                <div className="pricing-header-start">
                                                    <span className="pre-title">Starter Package</span>
                                                    <h4 className="title">Basic Plan</h4>
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
                                                    <Link className="rts-btn btn-primary-3" href={'#'}>
                                                        Buy This
                                                    </Link>
                                                </div>
                                                {/* pricing body end */}
                                            </div>
                                        </div>
                                        {/* single pricing plane */}
                                        {/* single pricing plane */}
                                        <div className="col-lg-4">
                                            <div className="pricing-wrapper-one">
                                                <div className="plane-process">
                                                    <span>/year</span>
                                                    <h3 className="title">$2000</h3>
                                                </div>
                                                {/* pricing header */}
                                                <div className="pricing-header-start">
                                                    <span className="pre-title">Standard Plan</span>
                                                    <h4 className="title">Standard Plan</h4>
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
                                                    <Link className="rts-btn btn-primary-3" href={'#'}>
                                                        Buy This
                                                    </Link>
                                                </div>
                                                {/* pricing body end */}
                                            </div>
                                        </div>
                                        {/* single pricing plane */}
                                        {/* single pricing plane */}
                                        <div className="col-lg-4">
                                            <div className="pricing-wrapper-one">
                                                <div className="plane-process">
                                                    <span>/year</span>
                                                    <h3 className="title">$2300</h3>
                                                </div>
                                                {/* pricing header */}
                                                <div className="pricing-header-start">
                                                    <span className="pre-title">Premium Plan</span>
                                                    <h4 className="title">Premium Plan</h4>
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
                                                    <Link className="rts-btn btn-primary-3" href={'#'}>
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
            </div>
            {/* rts pricing area end */}
        </div>
    )
}

export default PricingTwo