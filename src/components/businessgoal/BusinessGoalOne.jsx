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
                                        <p className="pre-title">We Are Experienced&nbsp;Business Solution</p>
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
                                                <h6 className="title">What should i included my personal details?</h6>
                                                <p className="disc">
                                                    We provide comprehensive personal details including your financial information, tax records, and business documentation to ensure complete transparency and accuracy in all our consulting services.
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
                                                <h6 className="title">Where i can find my business growth result?</h6>
                                                <p className="disc">
                                                    Your business growth results can be tracked through our detailed monthly reports, quarterly performance reviews, and annual financial statements that we provide to all our clients.
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
                                                <h6 className="title">Did you get any business consultant?</h6>
                                                <p className="disc">
                                                    Yes, we have experienced business consultants who specialize in tax planning, financial strategy, and business development to help you achieve your goals.
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
                                                <h6 className="title">Corporate Tax Services</h6>
                                                <p className="disc">
                                                    Our corporate tax services help businesses minimize tax liabilities while ensuring full compliance with Canadian tax laws. We handle everything from corporate tax returns to complex tax strategies.
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
                                                <h6 className="title">T4 Filing Services</h6>
                                                <p className="disc">
                                                    Professional T4 filing services for businesses of all sizes. We ensure accurate and timely T4 slip preparation and filing for your employees, keeping you compliant with CRA requirements.
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
                                                <h6 className="title">Accurate Record Keeping</h6>
                                                <p className="disc">
                                                    Maintain accurate financial records with our professional record keeping services. We handle financial statements, document management, and comprehensive record solutions for businesses of all sizes.
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