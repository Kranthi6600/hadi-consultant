"use cient"
import React from 'react'
import Link from 'next/link';
function CaseSix() {
    return (
        <div>
            {/* business progress area start */}
            <div className="business-progress-area rts-section-gapBottom" id="goal">
                <div className="box">
                    <img src="assets/images/business-goal/icon/box.png" alt="box" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="thumbnail-progress-7">
                                <img src="assets/images/business-goal/05.png" alt="progress" />
                            </div>
                        </div>
                        <div className="col-lg-6">
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
                                    We’re Solve Revolutionary for your Company
                                </h2>
                            </div>
                            <div className="inner-goal-progress-7">
                                <p className="disc">
                                    Vehicula euismod ante dis ullamcorper quam orci facilisis,
                                    condimentum cursus mattis tincidunt vitae porta litora, dui
                                    ridiculus enim lacinia blandit curabitur. Dui dapibus praesent
                                    magna tempor metus facilisis proin imperdiet
                                </p>
                                <div className="row mb--50 g-5">
                                    <div className="col-lg-6">
                                        <div className="left-business-goal">
                                            <div className="left">
                                                <h4 className="title">98%</h4>
                                                <p className="dsic">Company Growth</p>
                                            </div>
                                            <div className="right">
                                                <img
                                                    src="assets/images/business-goal/icon/05.svg"
                                                    alt="logo"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="left-business-goal">
                                            <div className="left">
                                                <h4 className="title">98%</h4>
                                                <p className="dsic">Company Growth</p>
                                            </div>
                                            <div className="right">
                                                <img
                                                    src="assets/images/business-goal/icon/05.svg"
                                                    alt="logo"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Link href={'#'} className="rts-btn btn-primary-5">
                                    Let’s Work Together
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* business progress area end */}

        </div>
    )
}

export default CaseSix