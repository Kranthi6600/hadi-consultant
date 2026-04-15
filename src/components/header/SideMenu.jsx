"use client"
import React, { useEffect } from 'react';
import { useState } from 'react';
import Link from 'next/link';

function SideMenu({ isSidebarOpen, toggleSidebar }) {
    const [openMenu, setOpenMenu] = useState(null);

    const toggleMenu = (menuhome) => {
        setOpenMenu(openMenu === menuhome ? null : menuhome);
    };
    return (
        <div>
            <div id="side-bar" className={`side-bar ${isSidebarOpen ? 'show' : ''}`}>
                <button className="close-icon-menu" aria-label="Close Menu" onClick={toggleSidebar}>
                    <i className="far fa-times"></i>
                </button>
                {/* inner menu area desktop start */}
                <div className="rts-sidebar-menu-desktop">
                    <a className="logo-1" href="/">
                        <img
                            className="logo"
                            src="/assets/images/cropped-cropped-HADI_CONSULTANTS_logo-removebg-preview-140x74.webp"
                            alt="HADI CONSULTANTS logo"
                        />
                        <h6 className="m-0">Hadi Consultant</h6>
                    </a>
                    <a className="logo-2" href="/">
                        <img
                            className="logo"
                            src="/assets/images/cropped-cropped-HADI_CONSULTANTS_logo-removebg-preview-140x74.webp"
                            alt="HADI CONSULTANTS logo"
                        />
                        <h6 className="m-0">Hadi Consultant</h6>
                    </a>
                    <a className="logo-3" href="/">
                        <img
                            className="logo"
                            src="/assets/images/cropped-cropped-HADI_CONSULTANTS_logo-removebg-preview-140x74.webp"
                            alt="HADI CONSULTANTS logo"
                        />
                        <h6 className="m-0">Hadi Consultant</h6>
                    </a>
                    <a className="logo-4" href="/">
                        <img
                            className="logo"
                            src="/assets/images/cropped-cropped-HADI_CONSULTANTS_logo-removebg-preview-140x74.webp"
                            alt="HADI CONSULTANTS logo"
                        />
                        <h6 className="m-0">Hadi Consultant</h6>
                    </a>
                    <div className="body d-none d-xl-block">
                        <p className="disc">
                            We must explain to you how all seds this mistakens idea denouncing
                            pleasures and praising account.
                        </p>
                        <div className="get-in-touch">
                            {/* title */}
                            <div className="h6 title">Get In Touch</div>
                            {/* title End */}
                            <div className="wrapper">
                                {/* single */}
                                <div className="single">
                                    <i className="fas fa-phone-alt" />
                                    <Link href="#">(416) 998-7909</Link>
                                </div>
                                {/* single ENd */}
                                {/* single */}
                                <div className="single">
                                    <i className="fas fa-envelope" />
                                    <Link href="#">fmcacpa@gmail.com</Link>
                                </div>
                                {/* single ENd */}
                                {/* single */}
                                {/* <div className="single">
                                    <i className="fas fa-globe" />
                                    <Link href="#">www.webexample.com</Link>
                                </div> */}
                                {/* single ENd */}
                                {/* single */}
                                <div className="single">
                                    <i className="fas fa-map-marker-alt" />
                                    <Link href="#">1290 Eglinton Ave E #8, Mississauga, ON L4W 1K8 Canada</Link>
                                </div>
                                {/* single ENd */}
                            </div>
                            <div className="social-wrapper-two menu">
                                <Link href="#">
                                    <i className="fab fa-facebook-f" />
                                </Link>
                                <Link href="#">
                                    <i className="fab fa-twitter" />
                                </Link>
                                <Link href="#">
                                    <i className="fab fa-instagram" />
                                </Link>
                                <Link href="#">
                                    <i className="fab fa-whatsapp" />
                                </Link>
                                {/* <Link href="#"><i class="fab fa-linkedin"></i></Link> */}
                            </div>
                        </div>
                    </div>
                    <div className="body-mobile d-block d-xl-none">
                        <nav className="nav-main mainmenu-nav">
                            <ul className="mainmenu metismenu" id="mobile-menu-active">
                                <li className="has-droupdown menu-item">
                                    <Link className="menu-link" href="#" onClick={() => toggleMenu(1)}>
                                        Home
                                    </Link>
                                    <ul className={`submenu ${openMenu === 1 ? 'mm-collapse mm-show' : 'mm-collapse'}`} >
                                        <li>
                                            <ul>
                                                <li className="mobile-menu-link">
                                                    <Link href={'/'}>Home</Link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item">
                                    <Link className="menu-link" href={'/about-us'}>
                                        About Us
                                    </Link>
                                </li>
                                <li className="has-droupdown menu-item">
                                    <Link className="menu-link" href="#" onClick={() => toggleMenu(2)}>
                                        Services
                                    </Link>
                                    <ul className={`submenu ${openMenu === 2 ? 'mm-collapse mm-show' : 'mm-collapse'}`}>
                                        <li>
                                            <Link href={'/our-service'}>Service 1</Link>
                                        </li>
                                        <li>
                                            <Link href={'/service-2'}>Service 2</Link>
                                        </li>
                                        <li>
                                            <Link href={'/service-3'}>Service 3</Link>
                                        </li>
                                        <li className="mobile-menu-link">
                                            <Link href={'/service-details'}>Service Details</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="has-droupdown menu-item">
                                    <Link className="menu-link" href="#" onClick={() => toggleMenu(3)}>
                                        Pages
                                    </Link>
                                    <ul className={`submenu ${openMenu === 3 ? 'mm-collapse mm-show' : 'mm-collapse'}`}>
                                        <li className="mobile-menu-link">
                                            <Link href={'/project'}>Project</Link>
                                        </li>
                                        <li className="mobile-menu-link">
                                            <Link href={'/project-details'}>Project Details</Link>
                                        </li>
                                        <li className="mobile-menu-link">
                                            <Link href={'/team'}>Team</Link>
                                        </li>
                                        <li className="mobile-menu-link">
                                            <Link href={'/team-details'}>Team Details</Link>
                                        </li>
                                        <li className="mobile-menu-link">
                                            <Link href={'/appoinment'}>appoinment</Link>
                                        </li>
                                        <li className="mobile-menu-link">
                                            <Link href={'/pricing-plane'}>Price Plan</Link>
                                        </li>
                                        <li className="mobile-menu-link">
                                            <Link href={'/404'}>404 Page</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="has-droupdown menu-item">
                                    <Link className="menu-link" href="#" onClick={() => toggleMenu(4)}>
                                        Blog
                                    </Link>
                                    <ul className={`submenu ${openMenu === 4 ? 'mm-collapse mm-show' : 'mm-collapse'}`}>
                                        <li className="mobile-menu-link">
                                            <Link href={'/blog-list'}>Blog List</Link>
                                        </li>
                                        <li className="mobile-menu-link">
                                            <Link href={'/blog-grid'}>Blog Grid</Link>
                                        </li>
                                        <li className="mobile-menu-link">
                                            <Link href={'/blog-details-default'}>Blog Details</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item menu-item">
                                    <Link className="menu-link" href="/contactus">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        <div className="social-wrapper-two menu mobile-menu">
                            <Link href="#">
                                <i className="fab fa-facebook-f" />
                            </Link>
                            <Link href="#">
                                <i className="fab fa-twitter" />
                            </Link>
                            <Link href="#">
                                <i className="fab fa-instagram" />
                            </Link>
                            <Link href="#">
                                <i className="fab fa-whatsapp" />
                            </Link>
                            {/* <Link href="#"><i class="fab fa-linkedin"></i></Link> */}
                        </div>
                        <Link
                            href="#"
                            className="rts-btn btn-primary ml--20 ml_sm--5 header-one-btn quote-btnmenu"
                        >
                            Get Quote
                        </Link>
                    </div>
                </div>
                {/* inner menu area desktop End */}
            </div>
        </div>
    )
}

export default SideMenu