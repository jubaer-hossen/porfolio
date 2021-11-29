import React from 'react';
import './projects.css';
import img1 from '../../img/Untitled-a.jpg';
import img2 from '../../img/Untitled-s.jpg';
import img3 from '../../img/Untitled-d.jpg';

const Projects = () => {
    return (
        <div id="project" className="container">
            <div data-aos="fade-right">
                <h1 className="text-primary font4 mt-5">My Resent Projects</h1>
            </div>
            <br />
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col" data-aos="slide-right">
                    <div class="card h-100 shadow">
                        <img src={img1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Dream camera shop</h5>
                            <p class="card-text text-start p-3">
                                <span class="fw-bold">
                                    This website outline:
                                </span>{' '}
                                <br /> ● Secure Login System. <br /> ● Admin
                                Dashboard functionality to add products or
                                delete products, Cancel order, Can make a user
                                Admin. <br /> ● Also, User Dashboard features to
                                watch all order history or can cancel their
                                order
                            </p>
                        </div>
                        <div className="mb-4">
                            <a
                                className="btn btn-primary px-5 mb-2 fw-bold"
                                target="_blank"
                                rel="noreferrer"
                                href="https://dream-camera-9e773.web.app/"
                            >
                                Live site
                            </a>
                            <br />
                            <a
                                className="btn btn-primary px-3 fw-bold"
                                target="_blank"
                                rel="noreferrer"
                                href="https://github.com/jubaer-hossen/dream-camera"
                            >
                                <i class="fab fa-github"></i> GitHub Code Link
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col" data-aos="slide-up">
                    <div class="card h-100 shadow">
                        <img src={img2} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Deshi Courier</h5>
                            <p class="card-text text-start p-3">
                                <span class="fw-bold">
                                    This website outline:
                                </span>{' '}
                                <br /> ● Secure Login system. <br /> ● Users can
                                cancel His/Her order or can create blogs. <br />{' '}
                                ● Fully functional and Mobile friendly UI.
                            </p>
                        </div>
                        <div className="mb-4">
                            <a
                                className="btn btn-primary px-5 mb-2 fw-bold"
                                target="_blank"
                                rel="noreferrer"
                                href="https://brave-austin-2ac4e3.netlify.app/"
                            >
                                Live site
                            </a>
                            <br />
                            <a
                                className="btn btn-primary px-3 fw-bold"
                                target="_blank"
                                rel="noreferrer"
                                href="https://github.com/jubaer-hossen/Local-Courier"
                            >
                                <i class="fab fa-github"></i> GitHub Code Link
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col" data-aos="slide-left">
                    <div class="card h-100 shadow">
                        <img src={img3} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Local Pharmacies</h5>
                            <p class="card-text text-start p-3">
                                <span class="fw-bold">
                                    This website outline:
                                </span>{' '}
                                <br />
                                ● Firebase Authentication system.
                                <br />
                                ● Online Based Shop.
                                <br />● Fully functional and Mobile friendly UI.
                            </p>
                        </div>
                        <div className="mb-4">
                            <a
                                className="btn btn-primary px-5 fw-bold mb-2"
                                target="_blank"
                                rel="noreferrer"
                                href="https://upbeat-kare-f8305b.netlify.app/"
                            >
                                Live site
                            </a>
                            <br />
                            <a
                                className="btn btn-primary px-3 fw-bold"
                                target="_blank"
                                rel="noreferrer"
                                href="https://github.com/jubaer-hossen/local-pharmacy"
                            >
                                <i class="fab fa-github"></i> GitHub Code Link
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
