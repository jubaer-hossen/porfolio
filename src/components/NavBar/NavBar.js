import React from 'react';
import { Link } from 'react-router-dom';
import { a } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="fixed-top">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    {/* <a href="#home" className="navbar-brand">
                        Jubaer Hossen
                    </a> */}
                    <a className="navbar-brand" href="#home">
                        Jubaer Hossen
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"></li>
                        </ul>
                        <ul className="navbar-nav me-2 mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/home">
                                    <button className="btn btn-primary mb-2 fw-bold">
                                        Home
                                    </button>
                                </Link>
                                <br />
                            </li>
                            <li className="nav-item">
                                <a
                                    href="#project"
                                    className="nav-a active nav-link"
                                    aria-current="page"
                                >
                                    Projects
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    href="#skills"
                                    className="nav-a active nav-link"
                                    // aria-current="page"
                                >
                                    Skills
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    href="#about"
                                    className="nav-a active nav-link"
                                    aria-current="page"
                                >
                                    About
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    href="#contact"
                                    className="nav-a active nav-link"
                                    aria-current="page"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
