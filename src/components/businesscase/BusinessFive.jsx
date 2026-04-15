"use client"
import React from 'react'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Link from 'next/link';

function BusinessFive() {
    return (
        <div>


            {/* rts portfolio area start */}
            <div className="rts-portfolio-area mt-decress rts-section-gap">

                <div className="container">

                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row>
                            <Col sm={12}>
                                <div className="title-area-with-btn-home-6 portfolio-area mb--80">
                                    <div className="title-area-style-six text-start">
                                        <div className="pre-title">
                                            <img
                                                src="assets/images/banner/shape/pre-title.png"
                                                alt="pre-title"
                                            />
                                            <span className="pre">Business Progress</span>
                                            <img
                                                className="two"
                                                src="assets/images/banner/shape/pre-title.png"
                                                alt="pre-title"
                                            />
                                        </div>
                                        <h2 className="title">
                                            Together we can envision <br />
                                            your business
                                        </h2>
                                    </div>
                                    <Nav variant="pills" className="tab-buttons-portfolio">
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">All</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">Financial</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="third">Human</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </div>
                            </Col>
                            <Col sm={12}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <div className="row g-5">
                                            <div className="col-lg-4">
                                                {/* single business case */}
                                                <div className="rts-business-case-s-2 style-home-7S">
                                                    <Link href={'/project-details'} className="thumbnail">
                                                        <img
                                                            src="assets/images/business-case/04.jpg"
                                                            alt="Business_case"
                                                        />
                                                    </Link>
                                                    <div className="inner">
                                                        <Link href={'/project-details'}>
                                                            <h5 className="title">Business Growth</h5>
                                                        </Link>
                                                        <span>Business Strategy</span>
                                                    </div>
                                                    <Link href={'/project-details'} className="over_link" />
                                                </div>
                                                {/* single business case End */}
                                            </div>
                                            <div className="col-lg-4">
                                                {/* single business case */}
                                                <div className="rts-business-case-s-2 style-home-7S">
                                                    <Link href={'/project-details'} className="thumbnail">
                                                        <img
                                                            src="assets/images/business-case/05.jpg"
                                                            alt="Business_case"
                                                        />
                                                    </Link>
                                                    <div className="inner">
                                                        <Link href={'/project-details'}>
                                                            <h5 className="title">Business Growth</h5>
                                                        </Link>
                                                        <span>Business Strategy</span>
                                                    </div>
                                                    <Link href={'/project-details'} className="over_link" />
                                                </div>
                                                {/* single business case End */}
                                            </div>
                                            <div className="col-lg-4">
                                                {/* single business case */}
                                                <div className="rts-business-case-s-2 style-home-7S">
                                                    <Link href={'/project-details'} className="thumbnail">
                                                        <img
                                                            src="assets/images/business-case/06.jpg"
                                                            alt="Business_case"
                                                        />
                                                    </Link>
                                                    <div className="inner">
                                                        <Link href={'/project-details'}>
                                                            <h5 className="title">Business Growth</h5>
                                                        </Link>
                                                        <span>Business Strategy</span>
                                                    </div>
                                                    <Link href={'/project-details'} className="over_link" />
                                                </div>
                                                {/* single business case End */}
                                            </div>
                                            <div className="col-lg-4">
                                                {/* single business case */}
                                                <div className="rts-business-case-s-2 style-home-7S">
                                                    <Link href={'/project-details'} className="thumbnail">
                                                        <img
                                                            src="assets/images/business-case/07.jpg"
                                                            alt="Business_case"
                                                        />
                                                    </Link>
                                                    <div className="inner">
                                                        <Link href={'/project-details'}>
                                                            <h5 className="title">Business Growth</h5>
                                                        </Link>
                                                        <span>Business Strategy</span>
                                                    </div>
                                                    <Link href={'/project-details'} className="over_link" />
                                                </div>
                                                {/* single business case End */}
                                            </div>
                                            <div className="col-lg-4">
                                                {/* single business case */}
                                                <div className="rts-business-case-s-2 style-home-7S">
                                                    <Link href={'/project-details'} className="thumbnail">
                                                        <img
                                                            src="assets/images/business-case/04.jpg"
                                                            alt="Business_case"
                                                        />
                                                    </Link>
                                                    <div className="inner">
                                                        <Link href={'/project-details'}>
                                                            <h5 className="title">Business Growth</h5>
                                                        </Link>
                                                        <span>Business Strategy</span>
                                                    </div>
                                                    <Link href={'/project-details'} className="over_link" />
                                                </div>
                                                {/* single business case End */}
                                            </div>
                                            <div className="col-lg-4">
                                                {/* single business case */}
                                                <div className="rts-business-case-s-2 style-home-7S">
                                                    <Link href={'/project-details'} className="thumbnail">
                                                        <img
                                                            src="assets/images/business-case/07.jpg"
                                                            alt="Business_case"
                                                        />
                                                    </Link>
                                                    <div className="inner">
                                                        <Link href={'/project-details'}>
                                                            <h5 className="title">Business Growth</h5>
                                                        </Link>
                                                        <span>Business Strategy</span>
                                                    </div>
                                                    <Link href={'/project-details'} className="over_link" />
                                                </div>
                                                {/* single business case End */}
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <div className="row g-5">
                                            <div className="col-lg-4">
                                                {/* single business case */}
                                                <div className="rts-business-case-s-2 style-home-7S">
                                                    <Link href={'/project-details'} className="thumbnail">
                                                        <img
                                                            src="assets/images/business-case/04.jpg"
                                                            alt="Business_case"
                                                        />
                                                    </Link>
                                                    <div className="inner">
                                                        <Link href={'/project-details'}>
                                                            <h5 className="title">Business Growth</h5>
                                                        </Link>
                                                        <span>Business Strategy</span>
                                                    </div>
                                                    <Link href={'/project-details'} className="over_link" />
                                                </div>
                                                {/* single business case End */}
                                            </div>
                                            <div className="col-lg-4">
                                                {/* single business case */}
                                                <div className="rts-business-case-s-2 style-home-7S">
                                                    <Link href={'/project-details'} className="thumbnail">
                                                        <img
                                                            src="assets/images/business-case/05.jpg"
                                                            alt="Business_case"
                                                        />
                                                    </Link>
                                                    <div className="inner">
                                                        <Link href={'/project-details'}>
                                                            <h5 className="title">Business Growth</h5>
                                                        </Link>
                                                        <span>Business Strategy</span>
                                                    </div>
                                                    <Link href={'/project-details'} className="over_link" />
                                                </div>
                                                {/* single business case End */}
                                            </div>
                                            <div className="col-lg-4">
                                                {/* single business case */}
                                                <div className="rts-business-case-s-2 style-home-7S">
                                                    <Link href={'/project-details'} className="thumbnail">
                                                        <img
                                                            src="assets/images/business-case/06.jpg"
                                                            alt="Business_case"
                                                        />
                                                    </Link>
                                                    <div className="inner">
                                                        <Link href={'/project-details'}>
                                                            <h5 className="title">Business Growth</h5>
                                                        </Link>
                                                        <span>Business Strategy</span>
                                                    </div>
                                                    <Link href={'/project-details'} className="over_link" />
                                                </div>
                                                {/* single business case End */}
                                            </div>
                                            <div className="col-lg-4">
                                                {/* single business case */}
                                                <div className="rts-business-case-s-2 style-home-7S">
                                                    <Link href={'/project-details'} className="thumbnail">
                                                        <img
                                                            src="assets/images/business-case/07.jpg"
                                                            alt="Business_case"
                                                        />
                                                    </Link>
                                                    <div className="inner">
                                                        <Link href={'/project-details'}>
                                                            <h5 className="title">Business Growth</h5>
                                                        </Link>
                                                        <span>Business Strategy</span>
                                                    </div>
                                                    <Link href={'/project-details'} className="over_link" />
                                                </div>
                                                {/* single business case End */}
                                            </div>
                                            <div className="col-lg-4">
                                                {/* single business case */}
                                                <div className="rts-business-case-s-2 style-home-7S">
                                                    <Link href={'/project-details'} className="thumbnail">
                                                        <img
                                                            src="assets/images/business-case/04.jpg"
                                                            alt="Business_case"
                                                        />
                                                    </Link>
                                                    <div className="inner">
                                                        <Link href={'/project-details'}>
                                                            <h5 className="title">Business Growth</h5>
                                                        </Link>
                                                        <span>Business Strategy</span>
                                                    </div>
                                                    <Link href={'/project-details'} className="over_link" />
                                                </div>
                                                {/* single business case End */}
                                            </div>
                                            <div className="col-lg-4">
                                                {/* single business case */}
                                                <div className="rts-business-case-s-2 style-home-7S">
                                                    <Link href={'/project-details'} className="thumbnail">
                                                        <img
                                                            src="assets/images/business-case/07.jpg"
                                                            alt="Business_case"
                                                        />
                                                    </Link>
                                                    <div className="inner">
                                                        <Link href={'/project-details'}>
                                                            <h5 className="title">Business Growth</h5>
                                                        </Link>
                                                        <span>Business Strategy</span>
                                                    </div>
                                                    <Link href={'/project-details'} className="over_link" />
                                                </div>
                                                {/* single business case End */}
                                            </div>Link                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <div className="row g-5">
                                            <div className="col-lg-4">
                                                {/* single business case */}
                                                <div className="rts-business-case-s-2 style-home-7S">
                                                    <Link href={'/project-details'} className="thumbnail">
                                                        <img
                                                            src="assets/images/business-case/04.jpg"
                                                            alt="Business_case"
                                                        />
                                                    </Link>
                                                    <div className="inner">
                                                        <Link href={'/project-details'}>
                                                            <h5 className="title">Business Growth</h5>
                                                        </Link>
                                                        <span>Business Strategy</span>
                                                    </div>
                                                    <Link href={'/project-details'} className="over_link" />
                                                </div>
                                                {/* single business case End */}
                                            </div>
                                            <div className="col-lg-4">
                                                {/* single business case */}
                                                <div className="rts-business-case-s-2 style-home-7S">
                                                    <Link href={'/project-details'} className="thumbnail">
                                                        <img
                                                            src="assets/images/business-case/05.jpg"
                                                            alt="Business_case"
                                                        />
                                                    </Link>
                                                    <div className="inner">
                                                        <Link href={'/project-details'}>
                                                            <h5 className="title">Business Growth</h5>
                                                        </Link>
                                                        <span>Business Strategy</span>
                                                    </div>
                                                    <Link href={'/project-details'} className="over_link" />
                                                </div>
                                                {/* single business case End */}
                                            </div>
                                            <div className="col-lg-4">
                                                {/* single business case */}
                                                <div className="rts-business-case-s-2 style-home-7S">
                                                    <Link href={'/project-details'} className="thumbnail">
                                                        <img
                                                            src="assets/images/business-case/06.jpg"
                                                            alt="Business_case"
                                                        />
                                                    </Link>
                                                    <div className="inner">
                                                        <Link href={'/project-details'}>
                                                            <h5 className="title">Business Growth</h5>
                                                        </Link>
                                                        <span>Business Strategy</span>
                                                    </div>
                                                    <Link href={'/project-details'} className="over_link" />
                                                </div>
                                                {/* single business case End */}
                                            </div>
                                            <div className="col-lg-4">
                                                {/* single business case */}
                                                <div className="rts-business-case-s-2 style-home-7S">
                                                    <Link href={'/project-details'} className="thumbnail">
                                                        <img
                                                            src="assets/images/business-case/07.jpg"
                                                            alt="Business_case"
                                                        />
                                                    </Link>
                                                    <div className="inner">
                                                        <Link href={'/project-details'}>
                                                            <h5 className="title">Business Growth</h5>
                                                        </Link>
                                                        <span>Business Strategy</span>
                                                    </div>
                                                    <Link href={'/project-details'} className="over_link" />
                                                </div>
                                                {/* single business case End */}
                                            </div>
                                            <div className="col-lg-4">
                                                {/* single business case */}
                                                <div className="rts-business-case-s-2 style-home-7S">
                                                    <Link href={'/project-details'} className="thumbnail">
                                                        <img
                                                            src="assets/images/business-case/04.jpg"
                                                            alt="Business_case"
                                                        />
                                                    </Link>
                                                    <div className="inner">
                                                        <Link href={'/project-details'}>
                                                            <h5 className="title">Business Growth</h5>
                                                        </Link>
                                                        <span>Business Strategy</span>
                                                    </div>
                                                    <Link href={'/project-details'} className="over_link" />
                                                </div>
                                                {/* single business case End */}
                                            </div>
                                            <div className="col-lg-4">
                                                {/* single business case */}
                                                <div className="rts-business-case-s-2 style-home-7S">
                                                    <Link href={'/project-details'} className="thumbnail">
                                                        <img
                                                            src="assets/images/business-case/07.jpg"
                                                            alt="Business_case"
                                                        />
                                                    </Link>
                                                    <div className="inner">
                                                        <Link href={'/project-details'}>
                                                            <h5 className="title">Business Growth</h5>
                                                        </Link>
                                                        <span>Business Strategy</span>
                                                    </div>
                                                    <Link href={'/project-details'} className="over_link" />
                                                </div>
                                                {/* single business case End */}
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </div>

            </div>
            {/* rts portfolio area end */}

        </div>
    )
}

export default BusinessFive