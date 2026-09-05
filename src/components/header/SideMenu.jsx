"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

function SideMenu({ isSidebarOpen, toggleSidebar }) {
    const [services, setServices] = useState([]);
    const [servicesExpanded, setServicesExpanded] = useState(false);
    const [apptsExpanded, setApptsExpanded] = useState(false);

    useEffect(() => {
        fetch("/api/proxy-services")
            .then((res) => res.json())
            .then((data) => setServices(data.data || []))
            .catch(() => setServices([]));
    }, []);

    return (
        <div>
            <div id="side-bar" className={`side-bar ${isSidebarOpen ? 'show' : ''}`}>
                <button className="close-icon-menu" aria-label="Close Menu" onClick={toggleSidebar}>
                    <i className="far fa-times"></i>
                </button>
                <div className="rts-sidebar-menu-desktop">
                    <a className="logo-1" href="/">
                        <img className="logo" src="/assets/images/cropped-cropped-HADI_CONSULTANTS_logo-removebg-preview-140x74.webp" alt="HADI CONSULTANTS logo" style={{ width: '80px', height: 'auto' }} />
                        <h6 className="m-0" style={{ fontSize: '14px' }}>Hadi Consultant</h6>
                    </a>
                    <a className="logo-2" href="/">
                        <img className="logo" src="/assets/images/cropped-cropped-HADI_CONSULTANTS_logo-removebg-preview-140x74.webp" alt="HADI CONSULTANTS logo" style={{ width: '80px', height: 'auto' }} />
                        <h6 className="m-0" style={{ fontSize: '14px' }}>Hadi Consultant</h6>
                    </a>
                    <a className="logo-3" href="/">
                        <img className="logo" src="/assets/images/cropped-cropped-HADI_CONSULTANTS_logo-removebg-preview-140x74.webp" alt="HADI CONSULTANTS logo" style={{ width: '80px', height: 'auto' }} />
                        <h6 className="m-0" style={{ fontSize: '14px' }}>Hadi Consultant</h6>
                    </a>
                    <a className="logo-4" href="/">
                        <img className="logo" src="/assets/images/cropped-cropped-HADI_CONSULTANTS_logo-removebg-preview-140x74.webp" alt="HADI CONSULTANTS logo" style={{ width: '80px', height: 'auto' }} />
                        <h6 className="m-0" style={{ fontSize: '14px' }}>Hadi Consultant</h6>
                    </a>
                    <div className="body d-none d-xl-block">
                        <p className="disc">We must explain to you how all seds this mistakens idea denouncing pleasures and praising account.</p>
                        <div className="get-in-touch">
                            <div className="h6 title">Get In Touch</div>
                            <div className="wrapper">
                                <div className="single"><i className="fas fa-phone-alt" /><Link href="tel:+14169987909">+1 (416) 998-7909</Link></div>
                                <div className="single"><i className="fas fa-envelope" /><Link href="mailto:faisal25us@yahoo.com">faisal25us@yahoo.com</Link></div>
                                <div className="single"><i className="fas fa-map-marker-alt" /><Link href="#">1290 Eglinton Ave E #8, Mississauga, ON L4W 1K8 Canada</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="body-mobile d-block d-xl-none">
                        <nav className="nav-main mainmenu-nav">
                            <ul className="mainmenu metismenu" id="mobile-menu-active">
                                <li className="menu-item">
                                    <Link className="menu-link" href={'/'}>Home</Link>
                                </li>
                                <li className="menu-item">
                                    <Link className="menu-link" href={'/services'}>Our Services</Link>
                                    {services.length > 0 && (
                                        <button onClick={() => setServicesExpanded(!servicesExpanded)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px 8px', fontSize: '14px', color: '#333' }} aria-label="Toggle services">
                                            <i className={`far fa-chevron-${servicesExpanded ? 'up' : 'down'}`} />
                                        </button>
                                    )}
                                    {services.length > 0 && servicesExpanded && (
                                        <ul style={{ listStyle: 'none', padding: '0 0 0 20px', margin: '0' }}>
                                            {services.map((svc) => (
                                                <li key={svc.id} style={{ listStyle: 'none' }}>
                                                    <Link href={`/services/${svc.slug}`} onClick={toggleSidebar} style={{ display: 'block', padding: '8px 12px', fontSize: '14px', color: '#555', textDecoration: 'none' }}>
                                                        {svc.wehoware_service_categories?.name || svc.title}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                                <li className="menu-item">
                                    <Link className="menu-link" href={'/blog'}>Blogs</Link>
                                </li>
                                <li className="menu-item">
                                    <Link className="menu-link" href={'/about-us'}>About</Link>
                                </li>
                                <li className="menu-item">
                                    <Link className="menu-link" href="/contact">Contact</Link>
                                </li>
                                <li className="menu-item">
                                    <Link className="menu-link" href="/book-appointment">Appointments</Link>
                                    <button onClick={() => setApptsExpanded(!apptsExpanded)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px 8px', fontSize: '14px', color: '#333' }} aria-label="Toggle appointments">
                                        <i className={`far fa-chevron-${apptsExpanded ? 'up' : 'down'}`} />
                                    </button>
                                    {apptsExpanded && (
                                        <ul style={{ listStyle: 'none', padding: '0 0 0 20px', margin: '0' }}>
                                            <li style={{ listStyle: 'none' }}>
                                                <Link href="/book-appointment" onClick={toggleSidebar} style={{ display: 'block', padding: '8px 12px', fontSize: '14px', color: '#555', textDecoration: 'none' }}>
                                                    Book Appointment
                                                </Link>
                                            </li>
                                            <li style={{ listStyle: 'none' }}>
                                                <Link href="/my-bookings" onClick={toggleSidebar} style={{ display: 'block', padding: '8px 12px', fontSize: '14px', color: '#555', textDecoration: 'none' }}>
                                                    My Bookings
                                                </Link>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                            </ul>
                        </nav>
                        <Link href="/contact" className="rts-btn btn-primary ml--20 ml_sm--5 header-one-btn quote-btnmenu">Get Quote</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SideMenu
