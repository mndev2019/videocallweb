// import React from "react";
// import { Link } from "react-scroll"; 
import { useLocation, useNavigate } from "react-router-dom";
// import logo from "../assets/images/videocalllogo.png";
import logo from '../assets/images/newjivcamlogo.png'
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
        // <header className={isHomePage ? "home-header" : "default-header"}>
        //     <div className="custom-container">
        //         <nav className="navbar navbar-expand-xl p-0 ">
        //             {/* Toggle Button for Mobile */}
        //             <button
        //                 className="navbar-toggler"
        //                 type="button"
        //                 data-bs-toggle="collapse"
        //                 data-bs-target="#navbarNavDropdown"
        //             >
        //                 <span className="navbar-toggler-icon">
        //                     <i className="ri-menu-line"></i>
        //                 </span>
        //             </button>

        //             {/* Logo */}
        //             <a href="/" style={{ backgroundColor: "white", borderRadius: "5px" }}>
        //                 <img src={logo} alt="Logo" className="img-fluid logo" />
        //             </a>

        //             {/* Navbar Links */}
        //             <div
        //                 className="collapse order-xl-1 navbar-collapse justify-content-end"
        //                 id="navbarNavDropdown"
        //             >
        //                 <ul className="navbar-nav mt-2">
        //                     <li className="nav-item">
        //                         <Link className="nav-link" to="feature" smooth={true} duration={200}>
        //                             Features
        //                         </Link>
        //                     </li>
        //                     <li className="nav-item">
        //                         <Link className="nav-link" to="screenshot" smooth={true} duration={100}>
        //                             Screenshots
        //                         </Link>
        //                     </li>
        //                     <li className="nav-item">
        //                         <Link className="nav-link" to="user" smooth={true} duration={100}>
        //                             Reviews
        //                         </Link>
        //                     </li>
        //                     <li className="nav-item">
        //                         <Link className="nav-link" to="step" smooth={true} duration={100}>
        //                             Steps
        //                         </Link>
        //                     </li>
        //                     <li className="nav-item">
        //                         <Link className="nav-link" to="community" smooth={true} duration={100}>
        //                             Community
        //                         </Link>
        //                     </li>
        //                     <li className="nav-item">
        //                         <Link className="nav-link" to="faq" smooth={true} duration={100}>
        //                             FAQs
        //                         </Link>
        //                     </li>
        //                 </ul>
        //             </div>
        //         </nav>
        //     </div>
        // </header>
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
                            <img src={logo} alt="Logo" className="img-fluid logo" />
                        </a>


                        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                            <ul className="navbar-nav mt-2">
                                <li className="nav-item">
                                    <a className="nav-link" onClick={() => handleNavigation("feature")}>
                                        Features
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={() => handleNavigation("screenshot")}>
                                        Screenshots
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={() => handleNavigation("user")}>
                                        Reviews
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={() => handleNavigation("step")}>
                                        Steps
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={() => handleNavigation("community")}>
                                        Community
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={() => handleNavigation("faq")}>
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
