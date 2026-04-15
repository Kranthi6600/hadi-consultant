"use client"
import React from 'react'

function ProgressCircle() {
    return (
        <div>
            {/* rts progress areaa */}
            <div className="progress-area-h7 rts-section-gapTop">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="single-progress-bar-wrapper">
                                <div className="single-progress-inner">
                                    <div className="progress red">
                                        <span className="progress-left">
                                            <span className="progress-bar" />
                                        </span>
                                        <span className="progress-right">
                                            <span className="progress-bar" />
                                        </span>
                                        <div className="progress-value" />
                                    </div>
                                    <div className="content-inner">
                                        <h3 className="title">90%</h3>
                                        <span>Trusted Clients</span>
                                    </div>
                                </div>
                                <div className="single-progress-inner">
                                    <div className="progress red blue">
                                        <span className="progress-left">
                                            <span className="progress-bar" />
                                        </span>
                                        <span className="progress-right">
                                            <span className="progress-bar" />
                                        </span>
                                        <div className="progress-value" />
                                    </div>
                                    <div className="content-inner">
                                        <h3 className="title">86%</h3>
                                        <span>Project Completed</span>
                                    </div>
                                </div>
                                <div className="single-progress-inner before-none">
                                    <div className="progress red pink">
                                        <span className="progress-left">
                                            <span className="progress-bar" />
                                        </span>
                                        <span className="progress-right">
                                            <span className="progress-bar" />
                                        </span>
                                        <div className="progress-value" />
                                    </div>
                                    <div className="content-inner">
                                        <h3 className="title">85%</h3>
                                        <span>Business Awards</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts progress areaa ENd */}

        </div>
    )
}

export default ProgressCircle