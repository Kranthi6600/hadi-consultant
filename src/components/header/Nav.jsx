"use client"
import React from 'react'
import Link from 'next/link';
function Nav() {
    return (
        <div>
            <nav className="nav-main mainmenu-nav d-none d-xl-block">
                <ul className="mainmenu">
                    <li>
                        <Link className="nav-item" href={'/'} >
                            Home
                        </Link>
                    </li>
                    {/* <li className="has-droupdown">
                        <Link className="nav-link" href={'/our-service'}>
                            Our Services
                        </Link>
                        <ul className="submenu menu-link3">
                            <li>
                                <Link href={'/service-details'}>Service Details</Link>
                            </li>
                        </ul>
                    </li> */}
                    <li>
                        <Link className="nav-item" href={'/our-service'}>
                            Our Services
                        </Link>
                    </li>
                    {/* <li className="has-droupdown">
                        <Link className="nav-link" href={'#'}>
                            Pages
                        </Link>
                        <ul className="submenu menu-link">
                            <li className="menu-item">
                                <ul>
                                    <li>
                                        <Link href={'/appoinment'}>Appoinment</Link>
                                    </li>
                                    <li>
                                        <Link href={'/about-us'}>About Us</Link>
                                    </li>
                                    <li>
                                        <Link href={'/pricing-plane'}>Price Plans</Link>
                                    </li>
                                    <li>
                                        <Link href={'/our-service'}>Our Services</Link>
                                    </li>
                                    <li>
                                        <Link href={'/testimonial-style-1'}>Testimonial</Link>
                                    </li>
                                    
                                </ul>
                            </li>
                            <li className="menu-item">
                                <Link className="tag" href={'#'}>
                                    Portfolio
                                </Link>
                                <li>
                                    <Link href={'/project'}>Portfolio</Link>
                                </li>
                                <li>
                                    <Link href={'/project-details'}>Portfolio Details</Link>
                                </li>
                            </li>
                            <li className="menu-item">
                                <Link className="tag" href={'/team'}>
                                    Our Teams
                                </Link>
                                <ul>
                                    <li>
                                        <Link href={''}>Team</Link>
                                    </li>

                                    <li>
                                        <Link href={'/team-details'}>Team Details</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li> */}
                    {/* <li className="has-droupdown">
                        <Link className="nav-link" href={'/blog-grid'}>
                            Blog
                        </Link>
                        <ul className="submenu">
                            <li>
                                <Link href={'/blog-details-default'}>Blog Details</Link>
                            </li>
                        </ul>
                    </li> */}
                    <li>
                        <Link className="nav-item" href={'/blog-grid'}>
                            Blog
                        </Link>
                    </li>
                    <li >
                        <Link className="nav-item" href={'/pricing-plane'}>
                            Pricing Plan
                        </Link>
                    </li>
                    <li>
                        <Link className="nav-item" href={'/contactus'}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav