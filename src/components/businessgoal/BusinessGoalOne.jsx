"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import ErrorBoundary from "@/components/ErrorBoundary";
function BusinessGoalOne() {
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    // Function to open the video overlay
    const openVideo = (e) => {
        e.preventDefault();
        setIsVideoOpen(true);
    };
    // Function to close the video overlay
    const closeVideo = (e) => {
        e.preventDefault();
        setIsVideoOpen(false);
    };
    // Effect to handle the escape key for closing the video overlay
    useEffect(() => {
        const handleKeyUp = (e) => {
            if (e.keyCode === 27) {
                setIsVideoOpen(false);
            }
        };
        // Add event listener for keyup
        document.addEventListener('keyup', handleKeyUp);
        // Cleanup function to remove event listener on component unmount
        return () => {
            document.removeEventListener('keyup', handleKeyUp);
        };
    }, []);
    return (
        <ErrorBoundary>
            <div>
                {}
                <div className="rts-business-goal mt--0 rts-section-gapBottom" id='goal'>
                    <div className="container">
                        <div className="row">
                            {}
                            <div className="col-lg-6">
                                <div className="business-goal-one">
                                    <img src="assets/images/business-goal/01.jpg" alt="Business_Goal" />
                                    <img
                                        className="small"
                                        src="assets/images/business-goal/sm-01.jpg"
                                        alt="Business_Goal"
                                    />
                                </div>
                            </div>
                            {}
                            {}
                            <div className="col-lg-6 mt--35 mt_md--70 mt_sm--70">
                                <div className="business-goal-right">
                                    <div className="rts-title-area business text-start pl--30">
                                        <p className="pre-title">We Are Experienced Business Solution</p>
                                        <h2 className="title">Hadi Consultant - Your Trusted Tax Expert</h2>
                                    </div>
                                    <div className="rts-business-goal pl--30">
                                        <div className="single-goal">
                                            <img
                                                src="assets/images/business-goal/icon/01.svg"
                                                alt="business_Icone"
                                                className="thumb"
                                            />
                                            <div className="goal-wrapper">
                                                <h6 className="title">Accurate Record Keeping</h6>
                                                <p className="disc">
                                        With over 15 years of experience in Canadian tax law and financial consulting, I provide personalized tax solutions tailored to your specific business needs. My expertise includes personal and corporate tax planning, cross-border taxation, and strategic business advisory.
                                    </p>
                                            </div>
                                        </div>
                                        <div className="single-goal">
                                            <img
                                                src="assets/images/business-goal/icon/02.svg"
                                                alt="business_Icone"
                                                className="thumb"
                                            />
                                            <div className="goal-wrapper">
                                                <h6 className="title">Always On Time</h6>
                                                <p className="disc">
                                        My clients have seen an average of 23% business growth and 35% tax savings through my strategic tax planning and optimization services. I help businesses navigate complex tax regulations while maximizing their financial efficiency.
                                    </p>
                                            </div>
                                        </div>
                                        <div className="single-goal">
                                            <img
                                                src="assets/images/business-goal/icon/01.svg"
                                                alt="business_Icone"
                                                className="thumb"
                                            />
                                            <div className="goal-wrapper">
                                                <h6 className="title">Hard Working</h6>
                                                <p className="disc">
                                        I work with certified public accountants and financial experts to provide comprehensive solutions. All my clients receive direct access to my expertise and personalized attention to their unique financial situations.
                                    </p>
                                            </div>
                                        </div>
                                        <div className="single-goal">
                                            <img
                                                src="assets/images/business-goal/icon/02.svg"
                                                alt="business_Icone"
                                                className="thumb"
                                            />
                                            <div className="goal-wrapper">
                                                <h6 className="title">24/7 Availability</h6>
                                                <p className="disc">
                                                    Round-the-clock support for urgent tax and financial matters, ensuring 
                                                    you have expert help whenever you need it most.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="goal-button-wrapper mt--70">
                                            <Link
                                                href={'/contact'}
                                                className="rts-btn btn-primary color-h-black"
                                            >
                                                Contact Us
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {}
                        </div>
                    </div>
                </div>
                {}
            </div>
        </ ErrorBoundary>
    )
}
export default BusinessGoalOne