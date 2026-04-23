"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import HeaderOne from "@/components/header/HeaderOne";
import BackToTop from "@/components/BackToTop";
import Breadcrumb from "@/components/Breadcrumb";
import FooterOne from "@/components/footer/FooterOne";
import Accordion from 'react-bootstrap/Accordion';
export default function Home() {
        const breadcrumbs = [
            { label: 'Home', link: '/' },
            { label: 'About Us' }
        ];
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
        <div className="">
            <HeaderOne />
            <Breadcrumb title="About Us" breadcrumbs={breadcrumbs} />
            {}
            <div className="rts-about-area rts-section-gap">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="about-image-v-inner">
                                <div className="image-area">
                                    <img
                                        className="mt--110 img-1"
                                        src="assets/images/about/main/about-03.jpg"
                                        alt="BUsiness_image"
                                    />
                                    <img
                                        className="img-over"
                                        src="assets/images/about/main/about-04.jpg"
                                        alt="BUsiness_image"
                                    />
                                    <div className="goal-button-wrapper">
                                        <Link href={'#'} className="vedio-icone">
                                            <span id="play-video" className="video-play-button" onClick={openVideo}>
                                                {}
                                                <span />
                                            </span>
                                            {isVideoOpen && (
                                                <div id="video-overlay" className="video-overlay open">
                                                    {}
                                                    <Link className="video-overlay-close" href={'#'} onClick={closeVideo}>
                                                        ×
                                                    </Link>
                                                    {}
                                                    <iframe
                                                        width="560"
                                                        height="315"
                                                        src="https://www.youtube.com/embed/6stlCkUDG_s"
                                                        title="YouTube video player"
                                                        frameBorder="0"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                        allowFullScreen
                                                    ></iframe>
                                                </div>
                                            )}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-progress-inner">
                                <div className="title-area">
                                    <span>HADI CONSULTANTS</span>
                                    <h2 className="title">
                                        We Are Experienced&nbsp;Business Solution
                                    </h2>
                                </div>
                                {}
                                <div className="inner">
                                    <p className="disc">
                                        Hadi Consultant is a premier financial consulting firm specializing in tax planning, corporate tax services, and comprehensive business solutions. With over 15 years of experience in Canadian tax law and financial management, our team of certified professionals provides personalized strategies to help businesses minimize tax liabilities, ensure regulatory compliance, and achieve sustainable growth. We combine deep industry expertise with innovative approaches to deliver tailored solutions that drive financial success for our clients across various sectors.
                                    </p>
                                    <div className="rts-progress-one-wrapper">
                                        <div className="single-progress">
                                            <div className="progress-top">
                                                <p className="progress-title">Business Strategy</p>
                                                <span className="persectage">70%</span>
                                            </div>
                                            <div className="meter cadetblue">
                                                <span data-progress={70} style={{ width: 300 }} />
                                            </div>
                                        </div>
                                        <div className="single-progress">
                                            <div className="progress-top">
                                                <p className="progress-title">Company Strength</p>
                                                <span className="persectage">93%</span>
                                            </div>
                                            <div className="meter">
                                                <span data-progress={93} style={{ width: 400 }} />
                                            </div>
                                        </div>
                                    </div>
                                    <Link href={'#'} className="rts-btn btn-primary">
                                        Make an Appointment
                                    </Link>
                                </div>
                                {}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {}
            {}
            <div className="rts-service-area rts-section-gapBottom">
                <div className="container-fluid service-main about-service-width-controler">
                    <div className="background-service service-three row">
                        <div className="row g-5">
                            <div className="rts-title-area service-four text-center pt--40 pt_md--0 mt_sm--0 mt_md--0">
                                <p className="pre-title">Our Services</p>
                                <h2 className="title">What We Provide</h2>
                            </div>
                            {}
                            <div className="col-xl-4 col-md-6 col-sm-12 col-12 pt--15 mb--80 mb_md--40 mb_sm--30">
                                <div className="service-one-inner-four">
                                    <div className="big-thumbnail-area">
                                        <div className="thumbnail">
                                            <img
                                                src="assets/images/service/07.jpg"
                                                alt="Business-service"
                                            />
                                        </div>
                                        <div className="content">
                                            <img
                                                src="assets/images/service/icon/13.svg"
                                                alt="Business-icon"
                                            />
                                            <h5 className="title">Corporate Tax Services</h5>
                                            <p className="disc">
                                                Our corporate tax services help businesses minimize tax liabilities while ensuring full compliance with Canadian tax laws. We handle everything from corporate tax returns to complex tax strategies.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {}
                            <div className="col-xl-4 col-md-6 col-sm-12 col-12 pt--15 mb--80 mb_md--40 mb_sm--30">
                                <div className="service-one-inner-four">
                                    <div className="big-thumbnail-area">
                                        <div className="thumbnail">
                                            <img
                                                src="assets/images/service/08.jpg"
                                                alt="Business-service"
                                            />
                                        </div>
                                        <div className="content">
                                            <img
                                                src="assets/images/service/icon/14.svg"
                                                alt="Business-icon"
                                            />
                                            <h5 className="title">T4 Filing Services</h5>
                                            <p className="disc">
                                                Professional T4 filing services for businesses of all sizes. We ensure accurate and timely T4 slip preparation and filing for your employees, keeping you compliant with CRA requirements.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {}
                            <div className="col-xl-4 col-md-6 col-sm-12 col-12 pt--15 mb--80">
                                <div className="service-one-inner-four">
                                    <div className="big-thumbnail-area">
                                        <div className="thumbnail">
                                            <img
                                                src="assets/images/service/09.jpg"
                                                alt="Business-service"
                                            />
                                        </div>
                                        <div className="content">
                                            <img
                                                src="assets/images/service/icon/15.svg"
                                                alt="Business-icon"
                                            />
                                            <h5 className="title">Accurate Record Keeping</h5>
                                            <p className="disc">
                                                Maintain accurate financial records with our professional record keeping services. We handle financial statements, document management, and comprehensive record solutions for businesses of all sizes.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="cta-one-bg col-12">
                            <div className="cta-one-inner">
                                <div className="cta-left">
                                    <h3 className="title animated fadeIn">
                                        Let’s discuss about how we can help make your business better
                                    </h3>
                                </div>
                                <div className="cta-right">
                                    <Link className="rts-btn btn-white" href={'#'}>
                                        Lets Work Togather
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {}
            {}
            <div className="rts-faq-section rts-section-gap rts-faq-bg bg_image">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="faq-two-inner">
                                <div className="title-area-faq">
                                    <span className="sub">WHY CHOOSE US</span>
                                    <h2 className="title">
                                        We Are Experienced
                                        <span className="sm-title">
                                            Business <span>Solution</span>
                                        </span>
                                    </h2>
                                </div>
                                {}
                                <div className="faq-accordion-area">
                                    <Accordion defaultActiveKey="0">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header><span>01. </span> What should i included my personal
                                                details?</Accordion.Header>
                                            <Accordion.Body>
                                                We provide comprehensive personal details including your financial information, tax records, and business documentation to ensure complete transparency and accuracy in all our consulting services.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header><span>02. </span> Where i can find my business growth
                                                result?</Accordion.Header>
                                            <Accordion.Body>
                                                Your business growth results can be tracked through our detailed monthly reports, quarterly performance reviews, and annual financial statements that we provide to all our clients.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header><span>03. </span> Did you get any business consultant?</Accordion.Header>
                                            <Accordion.Body>
                                                Yes, we have experienced business consultants who specialize in tax planning, financial strategy, and business development to help you achieve your goals.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                                {}
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="thumbnail-faq-four">
                                <img src="assets/images/faq/02.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {}
            {}
            <div className="rts-customer-feedback-area rts-section-gap bg-customer-feedback">
                <div className="container">
                    <div className="row">
                        <div className="rts-title-area feedback team text-center">
                            <p className="pre-title">Feedbacks</p>
                            <h2 className="title">Customer Feedbacks</h2>
                        </div>
                    </div>
                    <div className="row g-5 mt--20">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="testimopnial-wrapper-two">
                                <div className="test-header">
                                    <div className="thumbnail">
                                        <img src="assets/images/testimonials/02.png" alt="" />
                                    </div>
                                    <div className="name-desig">
                                        <h5 className="title">David Smith</h5>
                                    </div>
                                </div>
                                <div className="test-body">
                                    <p className="disc">
                                        "Hadi Consultants transformed our business finances. Their tax planning expertise saved us thousands and their financial advisory services helped us make better investment decisions. Highly recommended!"
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="testimopnial-wrapper-two">
                                <div className="test-header">
                                    <div className="thumbnail">
                                        <img src="assets/images/testimonials/03.png" alt="" />
                                    </div>
                                    <div className="name-desig">
                                        <h5 className="title">Sarah Johnson</h5>
                                        <span className="designation"></span>
                                    </div>
                                </div>
                                <div className="test-body">
                                    <p className="disc">
                                        "Professional, reliable, and knowledgeable team. They handled our corporate tax filing perfectly and provided valuable insights for business growth. The best financial consultants in Mississauga!"
                                    </p>
                                </div>
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
