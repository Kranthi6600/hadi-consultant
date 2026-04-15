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
        { label: 'Team Details' }
    ];
    return (

        <div className="">
            <HeaderOne />

            <Breadcrumb title="Team Details" breadcrumbs={breadcrumbs} />


           {/* rts-team details area Start*/}
                       <div className="rts-team-details rts-section-gap">
                           <div className="container">
                               <div className="row g-5">
                                   <div className="col-xl-6 col-lg-12 col-md-12">
                                       <div className="details-thumb">
                                           <img src="assets/images/team/tm/team-lg.jpg" alt="" />
                                       </div>
                                   </div>
                                   <div className="col-xl-6 col-lg-12 col-md-12 pl--35 pl_sm--15">
                                       <div className="details-right-inner">
                                           <div className="title-area">
                                               <span className="pre-title">Business Expert</span>
                                               <h3 className="title">David X. Smith</h3>
                                           </div>
                                           <p className="disc">
                                               Vehicula duis tempus vel porttitor lacus morbi pharetra neque,
                                               pretium ad enim urna ridiculus nibh, mus class arcu magna ornare
                                               orci mollis. Posuere quam eget non mollis platea habitasse cras
                                               feugiat.
                                           </p>
                                           <div className="team-details-support-wrapper">
                                               <i className="far fa-envelope" />
                                               <div className="support-innner">
                                                   <span>Email Address</span>
                                                   <Link href={'#'}>
                                                       <h5 className="title">support@david.com</h5>
                                                   </Link>
                                               </div>
                                           </div>
                                           <div className="team-details-support-wrapper">
                                               <i className="fal fa-phone-volume" />
                                               <div className="support-innner">
                                                   <span>Phone Number</span>
                                                   <Link href={'#'}>
                                                       <h5 className="title">+259 2154.21568</h5>
                                                   </Link>
                                               </div>
                                           </div>
                                           <div className="team-details-support-wrapper">
                                               <i className="far fa-map-marker-alt" />
                                               <div className="support-innner">
                                                   <span>Office Location</span>
                                                   <Link href={'#'}>
                                                       <h5 className="title">24/DA, Hilton Street, United State</h5>
                                                   </Link>
                                               </div>
                                           </div>
                                           <Link href={'#'} className="rts-btn btn-primary">
                                               {" "}
                                               Get in Touch
                                           </Link>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                       {/* rts-team details area ENd */}
           
                       {/* rts skills area start */}
                       <div className="rts-team-skill-area rts-section-gapBottom">
                           <div className="container">
                               <div className="row g-5">
                                   <div className="col-lg-6">
                                       {/* single skill area */}
                                       <div className="single-about-skill-inner">
                                           <h5 className="title">Professional Skills</h5>
                                           <p className="disc">
                                               Completely evisculate stand alone expertise through revolutionary
                                               strategic are theme areas fashion impactful paradigms for process
                                               centric relationships with whiteboard seamless intellectual
                                               capital with methods.
                                           </p>
                                           <div className="rts-progress-one-wrapper">
                                               <div className="single-progress">
                                                   <div className="progress-top">
                                                       <p className="progress-title">Product Design</p>
                                                       <span className="persectage">70%</span>
                                                   </div>
                                                   <div className="meter cadetblue">
                                                       <span data-progress={70} style={{ width: '90%' }} />
                                                   </div>
                                               </div>
                                               <div className="single-progress">
                                                   <div className="progress-top">
                                                       <p className="progress-title">Growth Analysis</p>
                                                       <span className="persectage">93%</span>
                                                   </div>
                                                   <div className="meter">
                                                       <span data-progress={93} style={{ width: '80%' }} />
                                                   </div>
                                               </div>
                                               <div className="single-progress">
                                                   <div className="progress-top">
                                                       <p className="progress-title">Brand Managment</p>
                                                       <span className="persectage">85%</span>
                                                   </div>
                                                   <div className="meter orange">
                                                       <span data-progress={85} style={{ width: '65%' }} />
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                       {/* single skill area end*/}
                                   </div>
                                   <div className="col-lg-6">
                                       {/* single skill area */}
                                       <div className="single-about-skill-inner pl--30 pl_md--0 pl_sm--0">
                                           <h5 className="title">Educational Experience</h5>
                                           <p className="disc">
                                               Completely evisculate stand alone expertise through revolutionary
                                               strategic are theme areas fashion impactful paradigms for process
                                               centric relationships with whiteboard seamless intellectual
                                               capital with methods.
                                           </p>
                                           <div className="education-skill-wrapper">
                                               <div className="single-skill">
                                                   <div className="number-area">
                                                       <p>
                                                           1 <span>st</span>
                                                       </p>
                                                   </div>
                                                   <h6 className="experience">Business Expert</h6>
                                                   <div className="date">
                                                       2016 - Present <span>(Finbiz)</span>
                                                   </div>
                                               </div>
                                               <div className="single-skill">
                                                   <div className="number-area">
                                                       <p>
                                                           2 <span>nd</span>
                                                       </p>
                                                   </div>
                                                   <h6 className="experience">Finance Manager</h6>
                                                   <div className="date">
                                                       2016 - Present <span>(Finbiz)</span>
                                                   </div>
                                               </div>
                                               <div className="single-skill">
                                                   <div className="number-area">
                                                       <p>
                                                           3 <span>rd</span>
                                                       </p>
                                                   </div>
                                                   <h6 className="experience">Junior Technician</h6>
                                                   <div className="date">
                                                       2016 - Present <span>(Finbiz)</span>
                                                   </div>
                                               </div>
                                               <div className="single-skill">
                                                   <div className="number-area">
                                                       <p>
                                                           4 <span>th</span>
                                                       </p>
                                                   </div>
                                                   <h6 className="experience">Junior Architect</h6>
                                                   <div className="date">
                                                       2016 - Present <span>(Finbiz)</span>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                       {/* single skill area end*/}
                                   </div>
                               </div>
                           </div>
                       </div>


            <FooterOne />
            <BackToTop />
        </div>

    );
}
