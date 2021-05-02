import React from 'react';
import { Link } from "react-scroll";
import './Navbar.css';
const Navbar = () => {
    return (
        <nav className="navbar sticky-top bg-light">
            <ul>
                <li>
                    <Link
                        className="link"
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={750}
                    >
                        HOME
                  </Link>
                </li>
                <li>
                    {" "}
                    <Link
                        className="link"
                        activeClass="active"
                        to="project"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={750}
                    >
                        PROJECT
                     </Link>
                </li>
                <li>
                    <Link
                        className="link"
                        activeClass="active"
                        to="blog"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={750}
                    >
                        BLOG
                     </Link>
                </li>
                <li>
                    <Link
                        className="link"
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={750}
                    >
                        ABOUT
                     </Link>
                </li>
                <li>
                    <Link
                        className="link"
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={750}
                    >
                        CONTACT US
                  </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;