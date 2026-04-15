"use client"
import React from 'react'

function ContactFormThree() {
    return (
        <div>
            {/* contact area start */}
            <div className="rts-contact-area contact-one contact-four" id="f-contact">
                <div className="container">
                    <div className="row align-items-center g-0">
                        <div className="col-lg-5 col-md-12 col-sm-12 col-12">
                            <div className="contact-image-one">
                                <img src="assets/images/contact/02.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12 col-sm-12 col-12">
                            <div className="contact-form-area-one">
                                <div className="rts-title-area contact text-start">
                                    <p className="pre-title">Make An Appointment</p>
                                    <h2 className="title">Request a free quote</h2>
                                </div>
                                <div id="form-messages" />
                                <form id="contact-form" action="mailer.php" method="post">
                                    <div className="name-email">
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            name="name"
                                            required=""
                                        />
                                        <input
                                            type="email"
                                            placeholder="Email Address"
                                            name="email"
                                            required=""
                                        />
                                    </div>
                                    <input type="text" placeholder="Business Topic" />
                                    <textarea
                                        placeholder="Type Your Message"
                                        name="message"
                                        defaultValue={""}
                                    />
                                    <button type="submit" className="rts-btn btn-primary">
                                        Submit Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* contact area end */}
        </div>
    )
}

export default ContactFormThree