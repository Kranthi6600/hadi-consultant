"use client"
import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

function FaqOne() {
    return (
        <div>
            {/* rts faq section area */}
            <div className="rts-faq-section rts-section-gap rts-faq-bg bg_image">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="faq-two-inner">
                                <div className="title-area-faq">
                                    <span className="sub">WHY CHOOSE US</span>
                                    <h2 className="title">
                                        We Are Experienced <br />
                                        <span className="sm-title">
                                            Business <span>Solution</span>
                                        </span>
                                    </h2>
                                </div>
                                {/* faq accordion area */}
                                <div className="faq-accordion-area">
                                    <Accordion defaultActiveKey="0">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header><span>01. </span> What should i included my personal
                                                details?</Accordion.Header>
                                            <Accordion.Body>
                                                Neque partrient nascetur facilisis suscipit ridiculus agna lobortis imperdiet vivamus est aliquam euismod nector quam convallis ornare justo service lifereu visionary sources unleash online businesss solutions
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>
                                                <span>02. </span> Where i can find my business growth
                                                result?
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                Neque partrient nascetur facilisis suscipit ridiculus agna
                                                lobortis imperdiet vivamus est aliquam euismod nector quam
                                                convallis ornare justo service lifereu visionary sources
                                                unleash online businesss solutions
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>
                                                <span>03. </span> Did you get any business consultant?
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                Neque partrient nascetur facilisis suscipit ridiculus agna
                                                lobortis imperdiet vivamus est aliquam euismod nector quam
                                                convallis ornare justo service lifereu visionary sources
                                                unleash online businesss solutions
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                                {/* faq accordion area end */}
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="thumbnail-faq-four">
                                <img src="assets/images/faq/02.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts faq section area End */}
        </div>
    )
}

export default FaqOne