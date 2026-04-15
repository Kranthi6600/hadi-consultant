"use client"
import React, { useState } from 'react';
import { Tabs, Tab, TabContent } from 'react-bootstrap';
function AboutTwo() {
    const [activeKey, setActiveKey] = useState('home1');
    return (
        <div>
            {/* start about our company */}
            <div className="rts-about-our-company-h2 rts-section-gap" id='about'>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 order-xl-1 order-lg-1 order-md-2 order-sm-2 order-2 mt_sm--30">
                            <div className="title-area about-company">
                                <span>About Our Company</span>
                                <h2 className="title">
                                    Professional And Dedicated <br />
                                    Consulting Services
                                </h2>
                            </div>
                            <div className="about-company-wrapper">
                                <p className="disc">
                                    We are licensed and insured with over 14 years of experience in
                                    providing <br /> United States with top-rated USA business
                                    services
                                </p>
                                <div className="rts-tab-style-one">
                                    <div className=" align-items-start contoler-company">

                                        <Tabs
                                            activeKey={activeKey}
                                            onSelect={(k) => setActiveKey(k)}
                                            id="controlled-tab-example"
                                            className="mb-3 nav button-area"
                                        >
                                            <Tab eventKey="home1" title=" 01. The Great Mission" />
                                            <Tab eventKey="profile1" title="02. Amazing Vision" />
                                            <Tab eventKey="contact1" title="03. Our Destination" />
                                        </Tabs>
                                        {activeKey === 'home1' && (
                                            <TabContent>
                                                {/* start tab content */}
                                                <div className="rts-tab-content-one">
                                                    <p className="disc">
                                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere exercitationem atque voluptatum! Massa laoreet lacinia placerat eleifend cs curae
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
                                        {activeKey === 'profile1' && (
                                            <TabContent>
                                                {/* start tab content */}
                                                <div className="rts-tab-content-one">
                                                    <p className="disc">
                                                        Business laoreet lacinia placerat eleifend cs curae
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

                                        {activeKey === 'contact1' && (
                                            <TabContent>
                                                {/* start tab content */}
                                                <div className="rts-tab-content-one">
                                                    <p className="disc">
                                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, sunt! lacinia placerat eleifend cs curae
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
                        <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 order-xl-1 order-lg-1 order-md-1 order-sm-1 order-1">
                            <div className="about-company-thumbnail">
                                <img src="assets/images/about/01.png" alt="Business_company" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* start about our company End */}

        </div>
    )
}

export default AboutTwo