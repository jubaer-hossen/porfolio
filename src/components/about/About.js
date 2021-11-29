import React from 'react';
import './About.css';
// import img1 from '../../img/Untitled-2.jpg';
import img2 from '../../img/IMG_20191209_142644.jpg';

const About = () => {
    return (
        <div id="about" className="overflow-hidden h-bg container my-5">
            <h1 className="text-center font4" data-aos="fade-down">
                About Me
            </h1>
            <br />
            <div className="row d-md-flex align-items-center text-start">
                <div className="col-md-6" data-aos="fade-right">
                    <h1>
                        I am{' '}
                        <span className="text-primary">Md Jubaer Hossen</span>
                    </h1>
                    <p className="font3">
                        I’m a Front End Web developer who is passionate about
                        making error-free websites with 100% client
                        satisfaction. I love to solve real-world problems. I am
                        strategic, goal-oriented, and always work with an end
                        goal in mind. I pride myself on doing quality work and
                        maintaining excellent communication. Most of the time I
                        work with JavaScript ReactJS
                    </p>
                    <a
                        target="_blank"
                        href="https://www.linkedin.com/in/md-jubaer-hossen-854a84226/"
                    >
                        <button className="btn btn-success px-5 fw-bold">
                            Hire Me
                        </button>
                    </a>
                </div>
                <div
                    className="col-md-6"
                    data-aos="fade-left"
                    // data-aos-delay="200"
                >
                    <img className="img-fluid" src={img2} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;
