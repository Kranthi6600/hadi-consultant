"use client"
import React, { useEffect } from 'react';
import { useState } from 'react';
import Link from 'next/link';
function SideMenu({ isSidebarOpen, toggleSidebar }) {
    return (
        <div>
            <div id="side-bar" className={`side-bar ${isSidebarOpen ? 'show' : ''}`}>
                <button className="close-icon-menu" aria-label="Close Menu" onClick={toggleSidebar}>
                    <i className="far fa-times"></i>
                </button>
                {}
                <div className="rts-sidebar-menu-desktop">
                    <a className="logo-1" href="/">
                        <img
                            className="logo"
                            src="/assets/images/cropped-cropped-HADI_CONSULTANTS_logo-removebg-preview-140x74.webp"
                            alt="HADI CONSULTANTS logo"
                            style={{ width: '80px', height: 'auto' }}
                        />
                        <h6 className="m-0" style={{ fontSize: '14px' }}>Hadi Consultant</h6>
                    </a>
                    <a className="logo-2" href="/">
                        <img
                            className="logo"
                            src="/assets/images/cropped-cropped-HADI_CONSULTANTS_logo-removebg-preview-140x74.webp"
                            alt="HADI CONSULTANTS logo"
                            style={{ width: '80px', height: 'auto' }}
                        />
                        <h6 className="m-0" style={{ fontSize: '14px' }}>Hadi Consultant</h6>
                    </a>
                    <a className="logo-3" href="/">
                        <img
                            className="logo"
                            src="/assets/images/cropped-cropped-HADI_CONSULTANTS_logo-removebg-preview-140x74.webp"
                            alt="HADI CONSULTANTS logo"
                            style={{ width: '80px', height: 'auto' }}
                        />
                        <h6 className="m-0" style={{ fontSize: '14px' }}>Hadi Consultant</h6>
                    </a>
                    <a className="logo-4" href="/">
                        <img
                            className="logo"
                            src="/assets/images/cropped-cropped-HADI_CONSULTANTS_logo-removebg-preview-140x74.webp"
                            alt="HADI CONSULTANTS logo"
                            style={{ width: '80px', height: 'auto' }}
                        />
                        <h6 className="m-0" style={{ fontSize: '14px' }}>Hadi Consultant</h6>
                    </a>
                    <div className="body d-none d-xl-block">
                        <p className="disc">
                            We must explain to you how all seds this mistakens idea denouncing
                            pleasures and praising account.
                        </p>
                        <div className="get-in-touch">
                            {}
                            <div className="h6 title">Get In Touch</div>
                            {}
                            <div className="wrapper">
                                {}
                                <div className="single">
                                    <i className="fas fa-phone-alt" />
                                    <Link href="#">(416) 998-7909</Link>
                                </div>
                                {}
                                {}
                                <div className="single">
                                    <i className="fas fa-envelope" />
                                    <Link href="#">fmcacpa@gmail.com</Link>
                                </div>
                                {}
                                {}
                                {}
                                {}
                                {}
                                <div className="single">
                                    <i className="fas fa-map-marker-alt" />
                                    <Link href="#">1290 Eglinton Ave E #8, Mississauga, ON L4W 1K8 Canada</Link>
                                </div>
                                {}
                            </div>
                                                    </div>
                    </div>
                    <div className="body-mobile d-block d-xl-none">
                        <nav className="nav-main mainmenu-nav">
                            <ul className="mainmenu metismenu" id="mobile-menu-active">
                                <li className="menu-item">
                                    <Link className="menu-link" href={'/'}>
                                        Home
                                    </Link>
                                </li>
                                <li className="menu-item">
                                    <Link className="menu-link" href={'/our-service'}>
                                        Our Services
                                    </Link>
                                </li>
                                <li className="menu-item">
                                    <Link className="menu-link" href={'/blogs'}>
                                        Blogs
                                    </Link>
                                </li>
                                <li className="menu-item">
                                    <Link className="menu-link" href={'/about-us'}>
                                        About
                                    </Link>
                                </li>
                                <li className="menu-item">
                                    <Link className="menu-link" href="/contact">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                                                <Link
                            href="/contact"
                            className="rts-btn btn-primary ml--20 ml_sm--5 header-one-btn quote-btnmenu"
                        >
                            Get Quote
                        </Link>
                    </div>
                </div>
                {}
            </div>
        </div>
    )
}
export default SideMenu