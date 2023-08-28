import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [stickyClass, setStickyClass] = useState('');
    const [navbarToggled, setNavbarToggled] = useState(false);

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

    const toggleNavbar = () => {
        setNavbarToggled(!navbarToggled);
    };

    return (
        <div className='navbar-header container-fluid'>
            <nav className={`navbar navbar-light ${navbarToggled ? 'show' : ''}`}>
                <div className="container-fluid">
                    <Link className="link-text-color navbar-brand">प्रतीक चिन्ह</Link>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">खोज</button>
                    </form>
                </div>
            </nav>
            <div className={`navbar ${stickyClass}`}>
                <nav className={`navbar-expand-lg ${navbarToggled ? 'show' : ''}`}>
                    <div className="container">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className=" link-text-color nav-link " to="">होम </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className=" link-text-color nav-link" to="gallery">गैलरी</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className=" link-text-color nav-link" to="acharayJi">आचार्य जी</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className=" link-text-color nav-link" to="videos">वीडियो</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className=" link-text-color nav-link" to="maharaj">महाराज जी</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className=" link-text-color nav-link" to="news">समाचार</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className=" link-text-color nav-link" to="jainDharam">जैन धर्म</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className=" link-text-color nav-link" to="mahotsav">महोत्सव</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className=" link-text-color nav-link" to="jivenparichay">
                                        जीवन परिचय</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className=" link-text-color nav-link" to="videodetails">वीडियो विवरण</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <button className="navbar-toggler" onClick={toggleNavbar}>
                <span className="navbar-toggler-icon"></span>
            </button>
        </div>
    );
};

export default NavBar;
