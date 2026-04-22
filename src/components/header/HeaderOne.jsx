"use client"
import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import SideMenu from './SideMenu';
import Link from 'next/link';
import Image from 'next/image';
function HeaderOne() {
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
    const [isSearchVisible, setSearchVisible] = useState(false);
    const handleSearchClick = () => {
        setSearchVisible(true);
    };
    const handleCloseClick = () => {
        setSearchVisible(false);
    };
    const handleBackgroundClick = () => {
        setSearchVisible(false);
    };
    return (
        <div>
            {}
            <header className={`header--sticky header-one  ${isSticky ? 'sticky' : ''}`}>
                <div className="header-main-one bg-white">
                    <div className="container">
                        <div className="row m-0">
                            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-4 col-4">
                                <div className="thumbnail m-0">
                                    <Link className="m-0 d-flex flex-column align-items-center" style={{ padding: '8px', textDecoration: 'none' }} href={'/'} >
                                        <img src="/assets/images/cropped-cropped-HADI_CONSULTANTS_logo-removebg-preview-140x74.webp" alt="HADI CONSULTANTS logo" style={{ marginBottom: '4px' }} />
                                        <h6 className="m-0 text-center d-none d-md-block" style={{ fontSize: '18px', fontWeight: '600', color: '#333' }}>Hadi Consultant</h6>
                                        <h6 className="m-0 text-center d-md-none" style={{ fontSize: '12px', fontWeight: '600', color: '#333', whiteSpace: 'nowrap' }}>Hadi Consultant</h6>
                                    </Link>
                                </div>
                            </div>
                            <div className=" col-xl-9 col-lg-8 col-md-8 col-sm-8 col-8">
                                <div className="main-header">
                                    <Nav />
                                    <div className="button-area">
                                        <button id="search" className="rts-btn btn-primary-alta" onClick={handleSearchClick}>
                                            <i className="far fa-search" />
                                        </button>
                                        <Link
                                            href={'/contact'}
                                            className="rts-btn btn-primary ml--20 ml_sm--5 header-one-btn quote-btn"
                                        >
                                            Get Quote
                                        </Link>
                                        <button
                                            id="menu-btn"
                                            className="menu rts-btn btn-primary-alta ml--20 ml_sm--5"
                                            onClick={toggleSidebar}>
                                            <img
                                                className="menu-dark"
                                                src="/assets/images/icon/menu.png"
                                                alt="Menu-icon"
                                            />
                                            <img
                                                className="menu-light"
                                                src="/assets/images/icon/menu-light.png"
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
            {}
            <div className={`search-input-area ${isSearchVisible ? 'show' : ''}`}>
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
                    </div>
                </div>
                <div id="close" className="search-close-icon" onClick={handleCloseClick}>
                    <i className="far fa-times" />
                </div>
            </div>
            <div id="anywhere-home" className={isSearchVisible ? 'bgshow' : ''} onClick={handleBackgroundClick}></div>
            <SideMenu isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </div>
    )
}
export default HeaderOne