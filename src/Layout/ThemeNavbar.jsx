import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from '../assets/images/logo.jpg';

const ThemeNavbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const isHomePage = location.pathname === "/";
    const [isSticky, setIsSticky] = useState(false);

    // Handle scroll to make header sticky
    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // const handleNavigation = (section) => {
    //     if (isHomePage) {
    //         document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    //     } else {
    //         navigate(`/#${section}`);
    //         setTimeout(() => {
    //             document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    //         }, 500);
    //     }
    // };
    const handleNavigation = (section) => {
        if (isHomePage) {
            scrollToSection(section);
        } else {
            navigate(`/#${section}`);
            setTimeout(() => {
                // Wait for navigation, then scroll to the section
                scrollToSection(section);
            }, 500); // Adjust delay as needed
        }
    };

    const scrollToSection = (section) => {
        const element = document.getElementById(section);
        if (element) {
            let offset = isSticky ? 80 : 0; // Sticky header height offset

            // Add a bit more offset for the first section
            if (section === "feature") {
                offset += 30;
            }
            if (section === "how it works") {
                offset += 30;
            }
            if (section === "reviews") {
                offset += 30;
            }
            if (section === "Get Started") {
                offset += 30;
            }
            if (section === "safety") {
                offset += 30;
            }
            if (section === "community") {
                offset += 30;
            }
            if (section === "FAQs") {
                offset += 30;
            }

            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - offset;

            // Smooth scroll to the section with offset
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        } else {
            // Retry scrolling after a slight delay if element isn't found
            setTimeout(() => {
                scrollToSection(section);
            }, 300);
        }
    };


    return (
        <>
            <header className={`${isHomePage ? "home-header" : "default-header"} ${isSticky ? "sticky-header" : ""}`}>
                <div className="custom-container">
                    <nav className="navbar navbar-expand-xl p-0">
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
                            <img
                                src={logo}
                                alt="Logo"
                                className="img-fluid mobilelogo logo"
                                style={{
                                    borderRadius: "50%",
                                    height: isSticky ? "70px" : "70px",
                                    transition: "height 0.3s ease"
                                }}
                            />
                        </a>

                        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                            <ul className="navbar-nav mt-2">
                                {["download", "feature", "how it works", "reviews", "Get Started", "safety", "community", "FAQs"].map((section) => (
                                    <li className="nav-item" key={section}>
                                        <a
                                            className="nav-link"
                                            style={{ cursor: "pointer" }}
                                            onClick={() => handleNavigation(section)}
                                        >
                                            {section.charAt(0).toUpperCase() + section.slice(1)}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default ThemeNavbar;
