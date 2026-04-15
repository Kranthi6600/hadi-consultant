"use client"
import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import  Link  from 'next/link';
import SideMenu from './SideMenu';

function HeaderSeven() {
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
            <header className={`header--sticky header-one six  ${isSticky ? 'sticky' : ''}`}>
                <div className="header-top header-top-one bg-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 d-xl-block d-none">
                                <div className="left">
                                    <p className="left-text">
                                        Are you ready to grow up your business?
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6 d-xl-block d-none">
                                <div className="right">
                                    <div className="mail">
                                        <i className="fas fa-envelope" />
                                        <Link href={'#'}>info@example.com</Link>
                                    </div>
                                    <div className="call">
                                        <i className="fas fa-phone-alt" />
                                        <Link href={'#'}>Hoteline: +210-9856988</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-main-one">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-4 col-4">
                                <div className="thumbnail">
                                    <Link href={'/'}>
                                        <img src="assets/images/logo/logo-1.svg" alt="finbiz-logo" />
                                    </Link>
                                </div>
                            </div>
                            <div className=" col-xl-9 col-lg-8 col-md-8 col-sm-8 col-8">
                                <div className="main-header">
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
                                            className="rts-btn btn-primary ml--20 ml_sm--5 header-one-btn quote-btn"
                                        >
                                            Get Quote
                                        </Link>
                                        <button
                                            id="menu-btn" onClick={toggleSidebar}
                                            className="menu rts-btn btn-primary-alta ml--20 ml_sm--5"
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

export default HeaderSeven