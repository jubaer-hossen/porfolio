import React from 'react';
// import img1 from '../../img/Untitled-2.jpg';
import img2 from '../../img/IMG_20191209_142644.jpg';

const About = () => {
    return (
        <div id="about" className="overflow-hidden h-bg container my-5">
            <h1 className="text-center">About Me</h1>
            <br />
            <div className="row d-md-flex align-items-center text-start">
                <div className="col-md-6">
                    <h1>
                        I am{' '}
                        <span className="text-primary">Md Jubaer Hossen</span>
                    </h1>
                    <p>
                        I’m a Front End Web developer who is passionate about
                        making error-free websites with 100% client
                        satisfaction. I love to solve real-world problems. I am
                        strategic, goal-oriented, and always work with an end
                        goal in mind. I pride myself on doing quality work and
                        maintaining excellent communication. Most of the time I
                        work with JavaScript ReactJS
                    </p>
                </div>
                <div className="col-md-6">
                    <img className="img-fluid" src={img2} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;
