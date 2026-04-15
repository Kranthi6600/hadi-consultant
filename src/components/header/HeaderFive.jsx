"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Nav from './Nav';
import SideMenu from './SideMenu';

function HeaderFive() {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    const [isSticky, setIsSticky] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div>
            {/* start header area */}
            <header className={`header--sticky header-one header-four header-five  ${isSticky ? 'sticky' : ''}`}>
                <div className="header-top header-top-one header-top-four header-top-five">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <p className="top-left">
                                    Are you ready to grow up your business?{" "}
                                    <Link href={'/contact'}>
                                        Contact Us <i className="far fa-arrow-right" />
                                    </Link>
                                </p>
                            </div>
                            <div className="col-lg-6 right-h-three">
                                <div className="header-top-right">
                                    <div className="single-right email">
                                        <i className="fas fa-envelope" />
                                        <Link href={'#'}>info@example.com</Link>
                                    </div>
                                    <div className="single-right call">
                                        <i className="far fa-phone-volume" />
                                        <span>Hotline:</span>
                                        <Link href={'#'}>+210-9856988</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-main-one bg-white header-main-five">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-4 col-6">
                                <div className="thumbnail">
                                    <Link href={'/'}>
                                        <img src="assets/images/logo/logo-4.svg" alt="finbiz-logo" />
                                    </Link>
                                </div>
                            </div>
                            <div className=" col-xl-9 col-lg-8 col-md-8 col-sm-8 col-6">
                                <div className="main-header main-header-four main-header-five">
                                    <Nav />
                                    <div className="button-area">
                                        <div className="search-input-area">
                                            <div className="container">
                                                <div className="search-input-inner">
                                                    <div className="input-div">
                                                        <input
                                                            id="searchInput1"
                                                            className="search-input"
                                                            type="text"
                                                            placeholder="Search by keyword or #"
                                                        />
                                                        <button>
                                                            <i className="far fa-search" />
                                                        </button>
                                                    </div>
                                                    <div id="close" className="search-close-icon">
                                                        <i className="far fa-times" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <Link
                                            href={'#'}
                                            className="rts-btn btn-primary btn-primary-4 ml--20 ml_sm--5 header-one-btn quote-btn"
                                        >
                                            Get Quote
                                        </Link>
                                        <button
                                            id="menu-btn" onClick={toggleSidebar}
                                            className="menu rts-btn btn-primary-alta btn-primary-alta-four ml--20 ml_sm--5"
                                        >
                                            <img
                                                className="menu-dark"
                                                src="assets/images/icon/menu.png"
                                                alt="Menu-icon"
                                            />
                                            <img
                                                className="menu-light"
                                                src="assets/images/icon/menu-light.png"
                                                alt="Menu-icon"
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* End header area */}
            <SideMenu isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </div>
    )
}

export default HeaderFive