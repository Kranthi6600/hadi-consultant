"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import HeaderOne from "@/components/header/HeaderOne";
import BackToTop from "@/components/BackToTop";
import FooterOne from "@/components/footer/FooterOne";
export default function Home() {
    return (
        <div className="">
            <HeaderOne />
            {}
            <div className="rts-404-area rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="404wrapper text-center">
                                <div className="thumbnail">
                                    <img src="assets/images/contact/shape/404.png" alt="" />
                                </div>
                                <h2 className="title mt--40">Oops! Nothing Was Found</h2>
                                <p className="disc">
                                    Sorry, we couldn’t find the page you where looking for. We suggest{" "}
                                    <br /> that you return to homepage.
                                </p>
                                <Link className="rts-btn btn-primary" href={'/'}>
                                    Back To Homepage
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {}
<FooterOne />
            <BackToTop />
        </div>
    );
}
