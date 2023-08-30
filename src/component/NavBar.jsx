import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";

const NavBar = () => {
    const [stickyClass, setStickyClass] = useState('');
    const [navbarToggled, setNavbarToggled] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === '/'; // Change to your homepage path
    const [menuOpen, setMenuOpen] = useState(false); // State for off-canvas menu

    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);
        return () => window.removeEventListener('scroll', stickNavbar);
    }, []);

    const stickNavbar = () => {
        const windowHeight = window.scrollY;
        windowHeight > 100 ? setStickyClass('sticky-nav') : setStickyClass('');
    };

    const toggleNavbar = () => {
        setNavbarToggled(!navbarToggled);
    };

    const handleToggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className={`navbar-header container-fluid ${isHomePage ? 'background-enabled' : 'navbar-header1'}`}>
            <nav className={`navbar navbar-light ${navbarToggled ? 'show' : ''}`}>
                
                <div className="container-fluid">
                    <Link className=' nav-link text-white position-relative  ps-5' onClick={handleToggleMenu}>प्रतीक चिन्ह</Link>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn position-absolute end-0" style={{paddingRight:'25px'}} type="submit"><FaSearch/></button>
                    </form>
                </div>
                
            </nav>
            <div className={`navbar  ${stickyClass}`}>
                <nav className={`navbar-expand-lg ${navbarToggled ? 'show' : ''}`}>
                    <div className="container">
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={`offcanvas offcanvas-start ${menuOpen ? 'show' : ''}`} tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasLabel">Offcanvas</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body  navbar-toggal">
                                <div className=" navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav text-center">
                                        <li className="nav-item">
                                            <Link className=' nav-link text-white ' onClick={handleToggleMenu} to="/">होम</Link>
                                        </li>
                                        <li className="nav-item">
                                    <Link className=' nav-link text-white ' onClick={handleToggleMenu}to="gallery">गैलरी</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className=' nav-link text-white ' onClick={handleToggleMenu}to="acharayJi">आचार्य जी</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className=' nav-link text-white ' onClick={handleToggleMenu}to="videos">वीडियो</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className=' nav-link text-white ' onClick={handleToggleMenu}to="maharaj">महाराज जी</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className=' nav-link text-white ' onClick={handleToggleMenu}to="news">समाचार</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className=' nav-link text-white ' onClick={handleToggleMenu}to="jainDharam">जैन धर्म</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className=' nav-link text-white ' onClick={handleToggleMenu}to="mahotsav">महोत्सव</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className=' nav-link text-white ' onClick={handleToggleMenu}to="jivenparichay">
                                        जीवन परिचय</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className=' nav-link text-white ' onClick={handleToggleMenu}to="videodetails">वीडियो विवरण</Link>
                                </li>
                                    </ul>
                                </div>
                            </div>
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
