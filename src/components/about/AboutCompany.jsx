"use client"
import React, { useState } from 'react';
import { Tabs, Tab, TabContent } from 'react-bootstrap';

function AboutCompany() {
    const [activeKey, setActiveKey] = useState('home');
    return (
        <div>
            {/* start about our company */}
            <div className="rts-about-our-company-h2 eight rts-section-gap" id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-12 mt_sm--30">
                            <div className="title-area about-company">
                                <span>Our Services Area</span>
                                <h2 className="title">
                                    Industries Hiring &amp; Services area <br />
                                    with different companies
                                </h2>
                            </div>
                            <div className="about-company-wrapper">
                                <p className="disc">
                                    We are licensed and insured with over 14 years of experience in
                                    providing <br /> United States with top-rated USA business
                                    services
                                </p>
                                <div className="rts-tab-style-one">
                                    <div className="d-flex align-items-start contoler-company">
                                        <div className="nav flex-column nav-pills me-3 button-area" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                            <Tabs
                                                activeKey={activeKey}
                                                onSelect={(k) => setActiveKey(k)}
                                                id="controlled-tab-example"
                                                className="mb-3">
                                                <Tab eventKey="home" title="01. Information Technology" />
                                                <Tab eventKey="two" title="02. Hospitality" />
                                                <Tab eventKey="three" title="03. Hospitality Busi" />
                                                <Tab eventKey="four" title="04. Business Man Busi" />
                                                <Tab eventKey="five" title="05. Business Man Busi" />
                                                <Tab eventKey="six" title="06. Bor Man Busi" />
                                            </Tabs>
                                        </div>
                                        <div className="tab-content-wrapper">
                                            {activeKey === 'home' && (
                                                <TabContent>
                                                    {/* start tab content */}
                                                    <div className="rts-tab-content-one">
                                                        <p>
                                                            <img src="assets/images/faq/info.webp" alt="image" />
                                                        </p>
                                                        <p className="disc">
                                                            Massa laoreet lacinia placerat eleifend cs curae
                                                            imperdiet mattis taciti, scelerisque elementum velit
                                                            ullamcorper praesent enim temp
                                                        </p>
                                                        <div className="check-area">
                                                            <i className="fas fa-check-circle" />
                                                            <p className="disc">
                                                                Ultricies tellus cubilia at rutrum lobortis dui quis
                                                                aliquam
                                                            </p>
                                                        </div>
                                                        <div className="check-area">
                                                            <i className="fas fa-check-circle" />
                                                            <p className="disc">
                                                                Eu nisi quam senectus odio commodo quam pellente
                                                            </p>
                                                        </div>
                                                        <a
                                                            className="rts-btn btn-primary-2 color-h-black"
                                                            href="#"
                                                        >
                                                            Contact Us
                                                        </a>
                                                    </div>
                                                    {/* start tab content End */}
                                                </TabContent>
                                            )}
                                            {activeKey === 'two' && (
                                                <TabContent>
                                                    {/* start tab content */}
                                                    <div className="rts-tab-content-one">
                                                        <p>
                                                            <img
                                                                src="assets/images/faq/hospitality-1.webp"
                                                                alt="image"
                                                            />
                                                        </p>
                                                        <p className="disc">
                                                            Massa laoreet lacinia placerat eleifend cs curae
                                                            imperdiet mattis taciti, scelerisque elementum velit
                                                            ullamcorper praesent enim temp
                                                        </p>
                                                        <div className="check-area">
                                                            <i className="fas fa-check-circle" />
                                                            <p className="disc">
                                                                Ultricies tellus cubilia at rutrum lobortis dui quis
                                                                aliquam
                                                            </p>
                                                        </div>
                                                        <div className="check-area">
                                                            <i className="fas fa-check-circle" />
                                                            <p className="disc">
                                                                Eu nisi quam senectus odio commodo quam pellente
                                                            </p>
                                                        </div>
                                                        <a
                                                            className="rts-btn btn-primary-2 color-h-black"
                                                            href="#"
                                                        >
                                                            Contact Us
                                                        </a>
                                                    </div>
                                                    {/* start tab content End */}
                                                </TabContent>
                                            )}
                                            {activeKey === 'three' && (
                                                <TabContent>
                                                    {/* start tab content */}
                                                    <div className="rts-tab-content-one">
                                                        <p>
                                                            <img
                                                                src="assets/images/faq/logistics.webp"
                                                                alt="image"
                                                            />
                                                        </p>
                                                        <p className="disc">
                                                            Massa laoreet lacinia placerat eleifend cs curae
                                                            imperdiet mattis taciti, scelerisque elementum velit
                                                            ullamcorper praesent enim temp
                                                        </p>
                                                        <div className="check-area">
                                                            <i className="fas fa-check-circle" />
                                                            <p className="disc">
                                                                Ultricies tellus cubilia at rutrum lobortis dui quis
                                                                aliquam
                                                            </p>
                                                        </div>
                                                        <div className="check-area">
                                                            <i className="fas fa-check-circle" />
                                                            <p className="disc">
                                                                Eu nisi quam senectus odio commodo quam pellente
                                                            </p>
                                                        </div>
                                                        <a
                                                            className="rts-btn btn-primary-2 color-h-black"
                                                            href="#"
                                                        >
                                                            Contact Us
                                                        </a>
                                                    </div>
                                                    {/* start tab content End */}
                                                </TabContent>
                                            )}
                                            {activeKey === 'four' && (
                                                <TabContent>
                                                    {/* start tab content */}
                                                    <div className="rts-tab-content-one">
                                                        <p>
                                                            <img
                                                                src="assets/images/faq/steel-factory.webp"
                                                                alt="image"
                                                            />
                                                        </p>
                                                        <p className="disc">
                                                            Massa laoreet lacinia placerat eleifend cs curae
                                                            imperdiet mattis taciti, scelerisque elementum velit
                                                            ullamcorper praesent enim temp
                                                        </p>
                                                        <div className="check-area">
                                                            <i className="fas fa-check-circle" />
                                                            <p className="disc">
                                                                Ultricies tellus cubilia at rutrum lobortis dui quis
                                                                aliquam
                                                            </p>
                                                        </div>
                                                        <div className="check-area">
                                                            <i className="fas fa-check-circle" />
                                                            <p className="disc">
                                                                Eu nisi quam senectus odio commodo quam pellente
                                                            </p>
                                                        </div>
                                                        <a
                                                            className="rts-btn btn-primary-2 color-h-black"
                                                            href="#"
                                                        >
                                                            Contact Us
                                                        </a>
                                                    </div>
                                                    {/* start tab content End */}
                                                </TabContent>
                                            )}
                                            {activeKey === 'five' && (
                                                <TabContent>
                                                    {/* start tab content */}
                                                    <div className="rts-tab-content-one">
                                                        <p>
                                                            <img
                                                                src="assets/images/faq/education.webp"
                                                                alt="image"
                                                            />
                                                        </p>
                                                        <p className="disc">
                                                            Massa laoreet lacinia placerat eleifend cs curae
                                                            imperdiet mattis taciti, scelerisque elementum velit
                                                            ullamcorper praesent enim temp
                                                        </p>
                                                        <div className="check-area">
                                                            <i className="fas fa-check-circle" />
                                                            <p className="disc">
                                                                Ultricies tellus cubilia at rutrum lobortis dui quis
                                                                aliquam
                                                            </p>
                                                        </div>
                                                        <div className="check-area">
                                                            <i className="fas fa-check-circle" />
                                                            <p className="disc">
                                                                Eu nisi quam senectus odio commodo quam pellente
                                                            </p>
                                                        </div>
                                                        <a
                                                            className="rts-btn btn-primary-2 color-h-black"
                                                            href="#"
                                                        >
                                                            Contact Us
                                                        </a>
                                                    </div>
                                                    {/* start tab content End */}
                                                </TabContent>
                                            )}
                                            {activeKey === 'six' && (
                                                <TabContent>
                                                    {/* start tab content */}
                                                    <div className="rts-tab-content-one">
                                                        <p>
                                                            <img
                                                                src="assets/images/faq/customer.webp"
                                                                alt="image"
                                                            />
                                                        </p>
                                                        <p className="disc">
                                                            Massa laoreet lacinia placerat eleifend cs curae
                                                            imperdiet mattis taciti, scelerisque elementum velit
                                                            ullamcorper praesent enim temp
                                                        </p>
                                                        <div className="check-area">
                                                            <i className="fas fa-check-circle" />
                                                            <p className="disc">
                                                                Ultricies tellus cubilia at rutrum lobortis dui quis
                                                                aliquam
                                                            </p>
                                                        </div>
                                                        <div className="check-area">
                                                            <i className="fas fa-check-circle" />
                                                            <p className="disc">
                                                                Eu nisi quam senectus odio commodo quam pellente
                                                            </p>
                                                        </div>
                                                        <a
                                                            className="rts-btn btn-primary-2 color-h-black"
                                                            href="#"
                                                        >
                                                            Contact Us
                                                        </a>
                                                    </div>
                                                    {/* start tab content End */}
                                                </TabContent>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* start about our company End */}
        </div>
    )
}

export default AboutCompany