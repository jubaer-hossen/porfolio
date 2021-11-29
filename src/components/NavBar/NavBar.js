import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <Link to="#home" class="navbar-brand">
                        Jubaer Hossen
                    </Link>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div
                        class="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item"></li>
                        </ul>
                        <ul class="navbar-nav me-2 mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link
                                    to="#home"
                                    class="nav-link active"
                                    aria-current="page"
                                >
                                    Home
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link
                                    to="#projects"
                                    class="nav-link active"
                                    aria-current="page"
                                >
                                    Projects
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link
                                    to="#skills"
                                    class="nav-link active"
                                    aria-current="page"
                                >
                                    Skills
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link
                                    to="#about"
                                    class="nav-link active"
                                    aria-current="page"
                                >
                                    About
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link
                                    to="#contact"
                                    class="nav-link active"
                                    aria-current="page"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
