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
                    {}
                    <li>
                        <Link className="nav-item" href={'/our-service'}>
                            Our Services
                        </Link>
                    </li>
                    <li>
                        <Link className="nav-item" href={'/blogs'}>
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
                </ul>
            </nav>
        </div>
    )
}
export default Nav