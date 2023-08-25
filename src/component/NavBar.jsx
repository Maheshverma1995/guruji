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
        <div className='navbar-header'>

            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                    <Link class=" link-text-color navbar-brand">Navbar</Link>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
            <div className={`navbar ${stickyClass}`}>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <Link class=" link-text-color nav-link active" aria-current="page" to="">Home</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class=" link-text-color nav-link" to="gallery">Gallery</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class=" link-text-color nav-link" to="acharayJi">AcharayJi</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class=" link-text-color nav-link" to="videos">Videos</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class=" link-text-color nav-link" to="news">News</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class=" link-text-color nav-link" to="jainDharam">JainDharam</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class=" link-text-color nav-link" to="mahotsav">Mahotsav</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class=" link-text-color nav-link" to="jivenparichay">JivenParichay</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class=" link-text-color nav-link" to="videodetails">VideoDetails</Link>
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
