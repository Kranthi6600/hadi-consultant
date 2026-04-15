"use client"
import React from 'react'
import Accordion from 'react-bootstrap/Accordion';


function FaqTwo() {
    return (
        <div>
            {/* service accordion area */}
            <div className="rts-accordion-area service rts-section-gap">
                <div className="accordion-service-bg bg_image ptb--120 ptb_md--80 ptb_sm--60">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="accordion-service-inner">
                                    <div className="title-area-start">
                                        <span className="sub color-primary">JUST A CONSULTANCY</span>
                                        <h2 className="title">
                                            We know how to manage business globally
                                        </h2>
                                    </div>
                                    <div className="accordion-area">

                                        <Accordion defaultActiveKey="0">
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>Making Easy Business Growth</Accordion.Header>
                                                <Accordion.Body>
                                                    Neque parturient sed nascetur facilisis suscipit ridiculus magna lobortis imperdiet vivamus est aliquam euismod nec quam convallis ornare justo
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="1">
                                                <Accordion.Header>Business Solution Model</Accordion.Header>
                                                <Accordion.Body>
                                                    Neque parturient sed nascetur facilisis suscipit ridiculus magna lobortis imperdiet vivamus est aliquam euismod nec quam convallis ornare justo
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="2">
                                                <Accordion.Header>Finbiz Company Solution</Accordion.Header>
                                                <Accordion.Body>
                                                    Neque parturient sed nascetur facilisis suscipit ridiculus magna lobortis imperdiet vivamus est aliquam euismod nec quam convallis ornare justo
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="3">
                                                <Accordion.Header>Management Process</Accordion.Header>
                                                <Accordion.Body>
                                                    Neque parturient sed nascetur facilisis suscipit ridiculus magna lobortis imperdiet vivamus est aliquam euismod nec quam convallis ornare justo
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="4">
                                                <Accordion.Header>Managing Invesment</Accordion.Header>
                                                <Accordion.Body>
                                                    Neque parturient sed nascetur facilisis suscipit ridiculus magna lobortis imperdiet vivamus est aliquam euismod nec quam convallis ornare justo
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* service accordion area End */}

        </div>
    )
}

export default FaqTwo