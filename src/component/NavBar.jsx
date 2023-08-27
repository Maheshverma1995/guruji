import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


const NavBar = () => {
    const [stickyClass, setStickyClass] = useState('');

    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);
        return () => window.removeEventListener('scroll', stickNavbar);
    }, []);

    const stickNavbar = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            windowHeight > 100 ? setStickyClass('sticky-nav') : setStickyClass('');
        }
    };
    return (
        <div className='navbar-header container-fluid'>

            <nav class="navbar navbar-light ">
                <div class="container-fluid">
                    <Link class=" link-text-color navbar-brand">प्रतीक चिन्ह</Link>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">खोज</button>
                    </form>
                </div>
            </nav>
            <div className={`navbar ${stickyClass}`}>
                <nav class="navbar navbar-expand-lg  " >
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <Link class=" link-text-color nav-link "  to="">होम </Link>
                                </li>
                                <li class="nav-item">
                                    <Link class=" link-text-color nav-link" to="gallery">गैलरी</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class=" link-text-color nav-link" to="acharayJi">आचार्य जी</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class=" link-text-color nav-link" to="videos">वीडियो</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class=" link-text-color nav-link" to="maharaj">महाराज जी</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class=" link-text-color nav-link" to="news">समाचार</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class=" link-text-color nav-link" to="jainDharam">जैन धर्म</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class=" link-text-color nav-link" to="mahotsav">महोत्सव</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class=" link-text-color nav-link" to="jivenparichay">
जीवन परिचय</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class=" link-text-color nav-link" to="videodetails">वीडियो विवरण</Link>
                                </li>
                                

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default NavBar
