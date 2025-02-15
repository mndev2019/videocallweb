// import React from "react";
// import { Link } from "react-scroll"; 
import { useLocation, useNavigate } from "react-router-dom";
// import logo from "../assets/images/videocalllogo.png";
// import logo from '../assets/images/newjivcamlogo.png'
import logo from '../assets/images/logo.jpg'
// import { useLocation } from "react-router-dom";

const ThemeNavbar = () => {
    // const location = useLocation();
    // const isHomePage = location.pathname === '/';
    const location = useLocation();
    const navigate = useNavigate();
    const isHomePage = location.pathname === "/";

    const handleNavigation = (section) => {
        if (isHomePage) {
            document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
        } else {
            navigate(`/#${section}`);
            setTimeout(() => {
                document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
            }, 500);
        }
    };
    return (

        <>
            <header className={isHomePage ? "home-header" : "default-header"}>
                <div className="custom-container">
                    <nav className="navbar navbar-expand-xl p-0 ">
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDropdown"
                        >
                            <span className="navbar-toggler-icon">
                                <i className="ri-menu-line"></i>
                            </span>
                        </button>

                        <a href="/" >
                            <img src={logo} alt="Logo" className="img-fluid logo" style={{borderRadius:"50%"}}/>
                        </a>


                        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                            <ul className="navbar-nav mt-2">
                                <li className="nav-item">
                                    <a className="nav-link " style={{ cursor: "pointer" }}  onClick={() => handleNavigation("feature")}>
                                        Features
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" style={{ cursor: "pointer" }}  onClick={() => handleNavigation("screenshot")}>
                                        How it Works
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" style={{ cursor: "pointer" }}  onClick={() => handleNavigation("user")}>
                                        Reviews
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" style={{ cursor: "pointer" }}  onClick={() => handleNavigation("step")}>
                                        Steps
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" style={{ cursor: "pointer" }}  onClick={() => handleNavigation("community")}>
                                        Community
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" style={{ cursor: "pointer" }}  onClick={() => handleNavigation("faq")}>
                                        FAQs
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default ThemeNavbar;
