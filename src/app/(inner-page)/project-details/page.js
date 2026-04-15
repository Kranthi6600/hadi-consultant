"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import HeaderOne from "@/components/header/HeaderOne";
import BackToTop from "@/components/BackToTop";
import FooterOne from "@/components/footer/FooterOne";
import Breadcrumb from "@/components/Breadcrumb";
export default function Home() {
    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'Project Details' }
    ];
    return (

        <div className="">
            <HeaderOne />

            <Breadcrumb title="Project Details" breadcrumbs={breadcrumbs} />


            {/* project details image area */}
            <div className="rts-project-details-area rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="big-bg-porduct-details">
                                <img
                                    src="assets/images/product/bg-lg-01.jpg"
                                    alt="Business_Finbiz"
                                />
                                <div className="project-info">
                                    <div className="info-head">
                                        <h5 className="title">Project Information</h5>
                                    </div>
                                    <div className="info-body">
                                        {/* single info */}
                                        <div className="single-info">
                                            <div className="info-ico">
                                                <i className="fas fa-user" />
                                            </div>
                                            <div className="info-details">
                                                <span>Clients:</span>
                                                <h6 className="name">Josefin H. Smith</h6>
                                            </div>
                                        </div>
                                        {/* end single info */}
                                        {/* single info */}
                                        <div className="single-info">
                                            <div className="info-ico">
                                                <i className="fas fa-layer-group" />
                                            </div>
                                            <div className="info-details">
                                                <span>Category:</span>
                                                <h6 className="name">Business Solution</h6>
                                            </div>
                                        </div>
                                        {/* end single info */}
                                        {/* single info */}
                                        <div className="single-info">
                                            <div className="info-ico">
                                                <i className="fas fa-calendar-alt" />
                                            </div>
                                            <div className="info-details">
                                                <span>Date:</span>
                                                <h6 className="name">25 January, 2023</h6>
                                            </div>
                                        </div>
                                        {/* end single info */}
                                        {/* single info */}
                                        <div className="single-info">
                                            <div className="info-ico">
                                                <i className="fas fa-map-marker-alt" />
                                            </div>
                                            <div className="info-details">
                                                <span>Address:</span>
                                                <h6 className="name">258 Dancing Street, USA</h6>
                                            </div>
                                        </div>
                                        {/* end single info */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--70 mb--50">
                        <div className="col-12">
                            <div className="product-details-main-inner">
                                <span>Growth Solution</span>
                                <h3 className="title">Our Business Growth</h3>
                                <p className="disc">
                                    Netus platea nec commodo tincidunt felis orci iaculis facilisi.
                                    Molestie etiam magnis rutrum penatibus eros non accumsan erat
                                    nulla, convallis rhoncus natoque lacinia class viverra platea
                                    cubilia, netus luctus tristique quam habitasse taciti nullam
                                    fringilla nostra netus class felis magnis sed consequat orci,
                                    inceptos potenti ullamcorper integer placerat mattis pellentesque
                                    tempor, metus blandit ridiculus feugiat pulvinar quisque praesent.
                                    Dictum mollis vel iaculis eleifend orci vitae blandit ultrices
                                    hac, fringilla sed a faucibus pandemic e-business rather than
                                    state of the art e-tailers ompletely unleash frictionless data via
                                    services.{" "}
                                </p>
                                <p className="italic">
                                    “Tortor nunc dictumst sapien inceptos libero natoque maecenas
                                    metus viverra commodo dignissim magna, donec odio leo varius
                                    nullam potenti porta facilisi vulputate sollicitudin montes ostra
                                    vel himenaeos sem sociosqu erat inceptos”
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5 mb--60">
                        <div className="col-lg-4">
                            <div className="thumbnail">
                                <img src="assets/images/product/d-01.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="thumbnail">
                                <img src="assets/images/product/d-02.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="thumbnail">
                                <img src="assets/images/product/d-03.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="row g-5">
                        <div className="col-12">
                            <h3 className="title mb--0">The Challenge Of Project</h3>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 pr--80">
                            <div className="single-project-details-challenge">
                                <div className="icon">
                                    <i className="far fa-check-circle" />
                                </div>
                                <p className="details">
                                    The housekeepers we hired are professionals who take pride in
                                    doing excellent work and in exceed.
                                </p>
                            </div>
                            <div className="single-project-details-challenge">
                                <div className="icon">
                                    <i className="far fa-check-circle" />
                                </div>
                                <p className="details">
                                    Facilisi odio mus quam risus vestibulum torquent eleifend integer
                                    semper ridiculus mi habitasse, imperdiet
                                </p>
                            </div>
                            <div className="single-project-details-challenge">
                                <div className="icon">
                                    <i className="far fa-check-circle" />
                                </div>
                                <p className="details">
                                    Laoreet mus quisque rhoncus himenaeos praesent enim tortor life
                                    dapibus pharetra netus duis vel habitant
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 pr--80">
                            <div className="single-project-details-challenge">
                                <div className="icon">
                                    <i className="far fa-check-circle" />
                                </div>
                                <p className="details">
                                    The housekeepers we hired are professionals who take pride in
                                    doing excellent work and in exceed.
                                </p>
                            </div>
                            <div className="single-project-details-challenge">
                                <div className="icon">
                                    <i className="far fa-check-circle" />
                                </div>
                                <p className="details">
                                    Facilisi odio mus quam risus vestibulum torquent eleifend integer
                                    semper ridiculus mi habitasse, imperdiet
                                </p>
                            </div>
                            <div className="single-project-details-challenge">
                                <div className="icon">
                                    <i className="far fa-check-circle" />
                                </div>
                                <p className="details">
                                    Laoreet mus quisque rhoncus himenaeos praesent enim tortor life
                                    dapibus pharetra netus duis vel habitant
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* project details image area end */}



            <FooterOne />
            <BackToTop />
        </div>

    );
}
