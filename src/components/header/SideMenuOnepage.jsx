'use client';

import React, { useState } from 'react';
import { Link } from 'react-scroll';

function SideMenu({ isSidebarOpen, toggleSidebar }) {
    const [openMenu, setOpenMenu] = useState(null);

    const toggleMenu = (menuhome) => {
        setOpenMenu(openMenu === menuhome ? null : menuhome);
    };

    // Helper to close sidebar
    const handleMenuClick = () => {
        toggleSidebar(false); // explicitly close
    };

    return (
        <div>
            <div id="side-bar" className={`side-bar ${isSidebarOpen ? 'show' : ''}`}>
                <button
                    className="close-icon-menu"
                    aria-label="Close Menu"
                    onClick={() => toggleSidebar(false)}
                >
                    <i className="far fa-times"></i>
                </button>

                {/* inner menu area desktop start */}
                <div className="rts-sidebar-menu-desktop">
                    <a className="logo-1" href="/">
                        <img className="logo" src="/assets/images/logo/logo-1.svg" alt="finbiz_logo" />
                    </a>
                    <a className="logo-2" href="/">
                        <img className="logo" src="/assets/images/logo/logo-4.svg" alt="finbiz_logo" />
                    </a>
                    <a className="logo-3" href="/">
                        <img className="logo" src="/assets/images/logo/logo-3.svg" alt="finbiz_logo" />
                    </a>
                    <a className="logo-4" href="/">
                        <img className="logo" src="/assets/images/logo/logo-5.svg" alt="finbiz_logo" />
                    </a>

                    <div className="body d-none d-xl-block">
                        <p className="disc">
                            We must explain to you how all seds this mistakens idea denouncing pleasures and
                            praising account.
                        </p>
                        <div className="get-in-touch">
                            <div className="h6 title">Get In Touch</div>
                            <div className="wrapper">
                                <div className="single">
                                    <i className="fas fa-phone-alt" />
                                    <Link href="#">+8801234566789</Link>
                                </div>
                                <div className="single">
                                    <i className="fas fa-envelope" />
                                    <Link href="#">example@gmail.com</Link>
                                </div>
                                <div className="single">
                                    <i className="fas fa-globe" />
                                    <Link href="#">www.webexample.com</Link>
                                </div>
                                <div className="single">
                                    <i className="fas fa-map-marker-alt" />
                                    <Link href="#">13/A, New Pro State, NYC</Link>
                                </div>
                            </div>
                            <div className="social-wrapper-two menu">
                                <Link href="#"><i className="fab fa-facebook-f" /></Link>
                                <Link href="#"><i className="fab fa-twitter" /></Link>
                                <Link href="#"><i className="fab fa-instagram" /></Link>
                                <Link href="#"><i className="fab fa-whatsapp" /></Link>
                            </div>
                        </div>
                    </div>

                    {/* Mobile view */}
                    <div className="body-mobile d-block d-xl-none">
                        <nav className="nav-main mainmenu-nav">
                            <ul className="mainmenu">
                                <li className="has-droupdown menu-item" onClick={handleMenuClick}>
                                    <Link onClick={() => toggleSidebar(false)} className="nav-item" to="banner" spy={true} smooth={true} offset={-160} duration={1000}>
                                        Home
                                    </Link>
                                </li>
                                <li className="menu-item" onClick={handleMenuClick}>
                                    <Link onClick={() => toggleSidebar(false)} className="nav-item" to="service" spy={true} smooth={true} offset={-160} duration={1000}>
                                        Services
                                    </Link>
                                </li>
                                <li className="has-droupdown menu-item" onClick={handleMenuClick}>
                                    <Link onClick={() => toggleSidebar(false)} className="nav-item" to="blog-section" spy={true} smooth={true} offset={-160} duration={1000}>
                                        Blog
                                    </Link>
                                </li>
                                <li className="has-droupdown menu-item" onClick={handleMenuClick}>
                                    <Link onClick={() => toggleSidebar(false)} className="nav-item" to="address" spy={true} smooth={true} offset={-160} duration={1000}>
                                        Address
                                    </Link>
                                </li>
                                <li className="menu-item" onClick={handleMenuClick}>
                                    <Link onClick={() => toggleSidebar(false)} className="nav-item" to="f-contact" spy={true} smooth={true} offset={-160} duration={1000}>
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </nav>

                        <div className="social-wrapper-two menu mobile-menu">
                            <Link href="#"><i className="fab fa-facebook-f" /></Link>
                            <Link href="#"><i className="fab fa-twitter" /></Link>
                            <Link href="#"><i className="fab fa-instagram" /></Link>
                            <Link href="#"><i className="fab fa-whatsapp" /></Link>
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
    );
}

export default SideMenu;
