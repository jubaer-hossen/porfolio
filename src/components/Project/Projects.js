import React from 'react';
import img1 from '../../img/Untitled-a.jpg';
import img2 from '../../img/Untitled-s.jpg';
import img3 from '../../img/Untitled-d.jpg';

const Projects = () => {
    return (
        <div className="container">
            <h1 className="text-primary font4 mt-5">My Resent Projects</h1>
            <br />
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
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
                                target="_blank"
                                href="https://dream-camera-9e773.web.app/"
                            >
                                <button className="btn btn-primary px-5">
                                    Live site
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col">
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
                                target="_blank"
                                href="https://brave-austin-2ac4e3.netlify.app/"
                            >
                                <button className="btn btn-primary px-5">
                                    Live site
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col">
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
                                target="_blank"
                                href="https://upbeat-kare-f8305b.netlify.app/"
                            >
                                <button className="btn btn-primary px-5">
                                    Live site
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
