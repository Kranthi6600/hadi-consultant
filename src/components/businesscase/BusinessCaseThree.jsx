"use client"
import React from 'react'
import ErrorBoundary from "@/components/ErrorBoundary";
function BusinessCaseThree() {
    return (
        <ErrorBoundary>
        <div>
            {/* business goal area */}
            <div className="rts-business-goal rts-business-goal5 mt--0 rts-section-gapBottom" id="goal">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-12">
                            <div className="title-area">
                                <span className="sub">OUR STRATEGY</span>
                                <h2 className="title">
                                    Grow Your Business with <br /> Finbiz Pro SEO
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center align-items-center">
                        {/* business goal left */}
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 first-child">
                            <ul className="content-box first">
                                <li className="content left">
                                    <h5 className="main-title">Financial Planning</h5>
                                    <p className="desc">
                                        Purus dui eget sollicitudin curae leo proin platea cras, morbi
                                        torquent massa
                                    </p>
                                </li>
                                <li className="content left one">
                                    <h5 className="main-title">Working Planning</h5>
                                    <p className="desc">
                                        Purus dui eget sollicitudin curae leo proin platea cras, morbi
                                        torquent massa
                                    </p>
                                </li>
                                <li className="content left">
                                    <h5 className="main-title">Project Planning</h5>
                                    <p className="desc">
                                        Purus dui eget sollicitudin curae leo proin platea cras, morbi
                                        torquent massa
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 text-center">
                            <div className="business-goal-one">
                                <img
                                    src="assets/images/business-goal/characters.png"
                                    alt="Business_Goal"
                                />
                                <div className="shape">
                                    <img src="assets/images/business-goal/icon/line.png" alt="" />
                                </div>
                            </div>
                        </div>
                        {/* business goal right */}
                        {/* right area business */}
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                            <ul className="content-box last">
                                <li className="content right">
                                    <h5 className="main-title">Marketing Planning</h5>
                                    <p className="desc">
                                        Purus dui eget sollicitudin curae leo proin platea cras, morbi
                                        torquent massa
                                    </p>
                                </li>
                                <li className="content right two">
                                    <h5 className="main-title">Service Planning</h5>
                                    <p className="desc">
                                        Purus dui eget sollicitudin curae leo proin platea cras, morbi
                                        torquent massa
                                    </p>
                                </li>
                                <li className="content right">
                                    <h5 className="main-title">Placement Planning</h5>
                                    <p className="desc">
                                        Purus dui eget sollicitudin curae leo proin platea cras, morbi
                                        torquent massa
                                    </p>
                                </li>
                            </ul>
                        </div>
                        {/* right area business ENd */}
                    </div>
                </div>
            </div>
            {/* business goal area End */}
        </div>
        </ErrorBoundary>
    )
}

export default BusinessCaseThree