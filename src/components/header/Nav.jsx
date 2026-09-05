"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link';

function Nav() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("/api/proxy-services")
            .then((res) => res.json())
            .then((data) => setServices(data.data || []))
            .catch(() => setServices([]));
    }, []);

    return (
        <div>
            <nav className="nav-main mainmenu-nav d-none d-xl-block">
                <ul className="mainmenu">
                    <li>
                        <Link className="nav-item" href={'/'} >
                            Home
                        </Link>
                    </li>
                    <li className="has-droupdown">
                        <Link className="nav-item" href={'/services'}>
                            Our Services
                        </Link>
                        {services.length > 0 && (
                            <ul className="submenu">
                                {services.map((svc) => (
                                    <li key={svc.id}>
                                        <Link href={`/services/${svc.slug}`}>
                                            {svc.wehoware_service_categories?.name || svc.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                    <li>
                        <Link className="nav-item" href={'/blog'}>
                            Blogs
                        </Link>
                    </li>
                    <li>
                        <Link className="nav-item" href={'/about-us'}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link className="nav-item" href={'/contact'}>
                            Contact
                        </Link>
                    </li>
                    <li className="has-droupdown">
                        <Link className="nav-item" href={'/book-appointment'}>
                            Appointments
                        </Link>
                        <ul className="submenu">
                            <li>
                                <Link href={'/book-appointment'}>
                                    Book Appointment
                                </Link>
                            </li>
                            <li>
                                <Link href={'/my-bookings'}>
                                    My Bookings
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Nav
