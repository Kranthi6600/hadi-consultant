"use client"
import React from 'react'

function MarketingSolution() {
    return (
        <div>
            {/* leading business solution area */}
            <div className="rts-business-solution rts-business-solution5" id="about">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 col-md-12 first-child">
                            <div className="rts-business-solution-right">
                                <div className="title-area">
                                    <span className="sub">More About Us</span>
                                    <h2 className="title">Here is your perfect Marketing Solution</h2>
                                </div>
                                <div className="content-area">
                                    <p className="disc">
                                        Platea vehicula rutrum curae magna taciti acut quis malesuada
                                        inceptos phasellus massa, eget ultrices tempor lacinia dictumst
                                        tincidunt leo mollis luctus varius gravida eleifend cursus
                                        litora consequat class fames netus lacus id ligula.
                                    </p>
                                    {/* single business solution */}
                                    <div className="single-business-solution-2">
                                        <div className="content">
                                            <h6 className="title">
                                                Best Marketing Solutions <br /> since 2002
                                            </h6>
                                        </div>
                                    </div>
                                    {/* single business solution end */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            {/* business solution left */}
                            <div className="rts-business-solution-left">
                                <div className="thumbnail">
                                    <img src="assets/images/business-goal/03.jpg" alt="" />
                                    <div className="shape1">
                                        <img
                                            src="assets/images/business-goal/icon/setting.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="shape2">
                                        <img
                                            src="assets/images/business-goal/icon/setting.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="shape3">
                                        <img src="assets/images/business-goal/icon/bag.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            {/* business solution left End */}
                        </div>
                    </div>
                </div>
            </div>
            {/* leading business solution area End */}
        </div>
    )
}

export default MarketingSolution