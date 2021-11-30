import React from 'react';
import { Link } from 'react-router-dom';

const DetailsNavbar = () => {
    return (
        <div className="fixed-top">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    {/* <a href="#home" className="navbar-brand">
                        Jubaer Hossen
                    </a> */}
                    <Link className="navbar-brand" to="#home">
                        Jubaer Hossen
                    </Link>
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
                                <Link
                                    to="/home"
                                    className="nav-a active nav-link"
                                    aria-current="page"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/vlog"
                                    className="nav-a active nav-link"
                                    aria-current="page"
                                >
                                    Vlogs
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default DetailsNavbar;
