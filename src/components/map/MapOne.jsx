"use client"
import React from 'react'
import Link from 'next/link';
function MapOne() {
    return (
        <div>
            {/* map area start */}
            <div className="rts-map-area bg-light-white" id='address'>
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            {/* map area left */}
                            <div className="mapdetails-inner-one">
                                <div className="left-area single-wized">
                                    <h5 className="title">Get in touch</h5>
                                    <div className="details">
                                        <p>Work and general inquiries</p>
                                        <Link className="number" href={'#'}>
                                            +3509.120-8605
                                        </Link>
                                        <p className="time-header">Assistance hours:</p>
                                        <p className="time">
                                            Monday – Friday <br /> 6 am to 8 pm EST
                                        </p>
                                    </div>
                                </div>
                                <div className="right-area single-wized">
                                    <h5 className="title">Post Address</h5>
                                    <div className="details">
                                        <p>Service Office</p>
                                        <Link href={'#'}>
                                            786 Dortans Ave, Otam Sites, <br />
                                            CA 36108, United States
                                        </Link>
                                        <p className="headoffice">Head Office</p>
                                        <p className="office">142 Drive Lane. USA</p>
                                    </div>
                                </div>
                            </div>
                            {/* map area right */}
                        </div>
                        <div className="col-lg-6">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14602.288851207937!2d90.47855065!3d23.798243149999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1663151706353!5m2!1sen!2sbd"
                                width={600}
                                height={450}
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* map area end */}
        </div>
    )
}

export default MapOne