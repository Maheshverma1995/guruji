import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

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
        windowHeight > 50 ? setStickyClass('sticky-nav') : setStickyClass('');
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
                
                <div className="container-fluid mt-2 ms-5">
                    <Link className={`link-text-color nav-link ${isHomePage ? 'active' : ''}`} onClick={handleToggleMenu}>प्रतीक चिन्ह</Link>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">खोज</button>
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
                            <div className="offcanvas-header home-row">
                                <h5 className="offcanvas-title" id="offcanvasLabel">Offcanvas</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body mt-2 ms-5 ps-5 navbar-toggal">
                                <div className=" navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <Link className={`link-text-color nav-link ${isHomePage ? 'active' : ''}`} onClick={handleToggleMenu} to="/">होम</Link>
                                        </li>
                                        <li className="nav-item">
                                    <Link className={`link-text-color nav-link ${isHomePage ? 'active' : ''}`} onClick={handleToggleMenu}to="gallery">गैलरी</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`link-text-color nav-link ${isHomePage ? 'active' : ''}`} onClick={handleToggleMenu}to="acharayJi">आचार्य जी</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`link-text-color nav-link ${isHomePage ? 'active' : ''}`} onClick={handleToggleMenu}to="videos">वीडियो</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`link-text-color nav-link ${isHomePage ? 'active' : ''}`} onClick={handleToggleMenu}to="maharaj">महाराज जी</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`link-text-color nav-link ${isHomePage ? 'active' : ''}`} onClick={handleToggleMenu}to="news">समाचार</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`link-text-color nav-link ${isHomePage ? 'active' : ''}`} onClick={handleToggleMenu}to="jainDharam">जैन धर्म</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`link-text-color nav-link ${isHomePage ? 'active' : ''}`} onClick={handleToggleMenu}to="mahotsav">महोत्सव</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`link-text-color nav-link ${isHomePage ? 'active' : ''}`} onClick={handleToggleMenu}to="jivenparichay">
                                        जीवन परिचय</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`link-text-color nav-link ${isHomePage ? 'active' : ''}`} onClick={handleToggleMenu}to="videodetails">वीडियो विवरण</Link>
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
