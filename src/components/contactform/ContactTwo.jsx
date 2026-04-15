"use client"
import React from 'react'
function ContactTwo() {
    return (
        <div>
            {/* start project with us section */}
            <div className="rts-project-area rts-section-gap bg-project-three margin-controlerproject mt_sm--0">
                <div className="container controler">
                    <div className="row g-0">
                        <div className="col-lg-7">
                            {/* project area left wrapper */}
                            <div className="title-area-project-w-in">
                                <span className="sub">Make An Appointment</span>
                                <h2 className="title">
                                    START PROJECT <br /> <span>WITH US!</span>
                                </h2>
                                <p className="disc">
                                    Penatibus habitant ligula dapibus rhoncus dictum viverra gravida{" "}
                                    <br /> elementum, integer potenti dui et molestie ante...
                                </p>
                                <div className="bg-email">
                                    <div className="content-wrapper">
                                        {/* single-contact info */}
                                        <div className="contact-info">
                                            <div className="icon">
                                                <img
                                                    src="assets/images/product/icon/01.jpg"
                                                    alt="Product_icon"
                                                />
                                            </div>
                                            <div className="discription">
                                                <span>Need any help?</span>
                                                <h5 className="title-sm">+254 21456.21458</h5>
                                            </div>
                                        </div>
                                        {/* single-contact info End */}
                                        {/* single-contact info */}
                                        <div className="contact-info">
                                            <div className="icon">
                                                <img
                                                    src="assets/images/product/icon/02.jpg"
                                                    alt="Product_icon"
                                                />
                                            </div>
                                            <div className="discription">
                                                <span>Email us anytime</span>
                                                <h5 className="title-sm">info@example.com</h5>
                                            </div>
                                        </div>
                                        {/* single-contact info End */}
                                    </div>
                                </div>
                            </div>
                            {/* project area left wrapper end */}
                        </div>
                        <div className="col-lg-5">
                            <div className="bg-input-project">
                                <div className="product-form">
                                    <div id="form-messages" />
                                    <form id="contact-form">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <input
                                                    type="text"
                                                    placeholder="Your Name"
                                                    name="name"
                                                    required=""
                                                />
                                            </div>
                                            <div className="col-lg-6 mt_md--20 mt_sm--20">
                                                <input
                                                    type="email"
                                                    placeholder="Your Email"
                                                    name="email"
                                                    required=""
                                                />
                                            </div>
                                            <div className="col-12 mt--20">
                                                <input
                                                    type="text"
                                                    placeholder="Your Website"
                                                    name="subject"
                                                />
                                            </div>
                                            <div className="col-12 mt--20">
                                                <textarea
                                                    placeholder="Your Comment"
                                                    name="message"
                                                    defaultValue={""}
                                                />
                                            </div>
                                            <div className="col-12 mt--35">
                                                <button
                                                    className="rts-btn btn-primary-3 color-h-black"
                                                >
                                                    Get in Touch
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* start project with us section End */}
        </div>
    )
}

export default ContactTwo