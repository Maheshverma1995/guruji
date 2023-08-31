import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaSearch, FaThList } from 'react-icons/fa';
import $ from 'jquery';

const NavBar = () => {
    const [stickyClass, setStickyClass] = useState('');
    const [navbarToggled, setNavbarToggled] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);
        return () => window.removeEventListener('scroll', stickNavbar);
    }, []);

    const stickNavbar = () => {
        const windowHeight = window.scrollY;
        if (windowHeight > 100) {
            setStickyClass('sticky-nav');
        } else {
            setStickyClass('');
        }
    };

    const toggleNavbar = () => {
        setNavbarToggled(!navbarToggled);
    };

    const handleToggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeOffcanvas = () => {
        $('#offcanvasExample').offcanvas('hide');
    };

    return (
        <div className={`navbar-header container-fluid ${isHomePage ? 'background-enabled' : 'navbar-header1'}`}>
            <nav className={`navbar navbar-light ${navbarToggled ? 'show' : ''}`}>
                <div className="container-fluid d-flex">
                    <Link className="nav-link text-white" onClick={handleToggleMenu}>
                        प्रतीक चिन्ह
                    </Link>
                    <form className="d-flex position-relative">
                        <input className="form-control" style={{ minWidth: '150px', width: '200px' }} type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn position-absolute end-0" type="submit"><FaSearch /></button>
                    </form>
                </div>
            </nav>
            <div className={`navbar ${stickyClass}`}>
                <nav className={`navbar-expand-lg ${navbarToggled ? 'show' : ''}`}>
                    <div className="container">
                        <button id="toggle-button" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="toggle-icon"><FaThList /></span>
                        </button>
                        <div className={`offcanvas navbar-header2 offcanvas-start ${menuOpen ? 'show' : ''}`} tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title text-white" id="offcanvasLabel">प्रतीक चिन्ह</h5>
                                <form className="d-flex position-relative">
                        <input className="form-control" style={{ minWidth: '150px', width: '200px' }} type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn position-absolute end-0" type="submit"><FaSearch /></button>
                    </form>
                                <button type="button" className="btn-close bg-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body navbar-toggle">
                                <div className="navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav text-center">
                                        <li className="nav-item">
                                            <Link className='nav-link text-white' onClick={() => { handleToggleMenu(); closeOffcanvas(); }} to="/">होम</Link>
                                        </li>

                                        {/* <li className="nav-item">
                                            <Link className=' nav-link text-white' onClick={() => { handleToggleMenu(); closeOffcanvas(); }} to="gallery">गैलरी</Link>
                                        </li> */}
                                        <li className="nav-item">
                                            <Link className=' nav-link text-white ' onClick={() => { handleToggleMenu(); closeOffcanvas(); }} to="acharayJi">आचार्य जी</Link>
                                        </li>
                                        {/* <li className="nav-item">
                                            <Link className=' nav-link text-white ' onClick={() => { handleToggleMenu(); closeOffcanvas(); }} to="videos">वीडियो</Link>
                                        </li> */}
                                        <li className="nav-item">
                                            <Link className=' nav-link text-white ' onClick={() => { handleToggleMenu(); closeOffcanvas(); }} to="maharaj">महाराज जी</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className=' nav-link text-white ' onClick={() => { handleToggleMenu(); closeOffcanvas(); }} to="news">समाचार</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className=' nav-link text-white ' onClick={() => { handleToggleMenu(); closeOffcanvas(); }} to="jainDharam">जैन धर्म</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className=' nav-link text-white ' onClick={() => { handleToggleMenu(); closeOffcanvas(); }} to="mahotsav">महोत्सव</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className=' nav-link text-white ' onClick={() => { handleToggleMenu(); closeOffcanvas(); }} to="jivenparichay">
                                                जीवन परिचय</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className=' nav-link text-white ' onClick={() => { handleToggleMenu(); closeOffcanvas(); }} to="videodetails">वीडियो विवरण</Link>
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
