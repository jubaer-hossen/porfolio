import React from 'react';
import './Skills.css';
import html from '../../img/Icon/html.ec102b63.png';
import css from '../../img/Icon/css.29013fe6.png';
import bootstrap from '../../img/Icon/bootstrap.bab10aaa.png';
import tailwind from '../../img/Icon/tailwaind.4025b9f6.png';
import javascript from '../../img/Icon/download.png';
import mui from '../../img/Icon/metarial ui.4ee24f56.png';
import nodejs from '../../img/Icon/node js.8030f6dd.png';
import reactjs from '../../img/Icon/react.35639ed9.png';
import mongodb from '../../img/Icon/mongodb.70c82e5a.png';
import github from '../../img/Icon/github.caeb9ff8.png';
import expressjs from '../../img/Icon/express.483b10d6.png';
import firebase from '../../img/Icon/firebase.bff5748e.png';

const Skills = () => {
    return (
        <div id="skills" class="container px-4 overflow-hidden">
            <h1 className="text-primary text-center mt-5 mb-3 font4">
                My Skills
            </h1>
            <div
                class="row row-cols-2 g-5 text-white text-center"
                // data-aos="zoom-in-up"
            >
                <div class="col-md-3" data-aos="zoom-out-down">
                    <div class="py-4  img-tn rounded  border bg-dark">
                        <img className="img-wd w-50" src={html} alt="" />
                        <br />
                        <br />
                        <h4>HTML</h4>
                    </div>
                </div>
                <div class="col-md-3" data-aos="zoom-out-down">
                    <div class="py-4  img-tn rounded  border bg-dark">
                        <img className="img-wd w-50" src={css} alt="" />
                        <br />
                        <br />
                        <h4>CSS</h4>
                    </div>
                </div>
                <div class="col-md-3" data-aos="zoom-out-down">
                    <div class="py-4  img-tn rounded  border bg-dark">
                        <img className="img-wd w-50" src={bootstrap} alt="" />
                        <br />
                        <br />
                        <h4>Bootstrap</h4>
                    </div>
                </div>
                <div class="col-md-3" data-aos="zoom-out-down">
                    <div class="py-4  img-tn rounded  border bg-dark">
                        <img className="img-wd w-50" src={tailwind} alt="" />
                        <br />
                        <br />
                        <h4>Tailwind CSS</h4>
                    </div>
                </div>
                <div class="col-md-3" data-aos="zoom-out-down">
                    <div class="py-4  img-tn rounded  border bg-dark">
                        <img className="img-wd w-50" src={javascript} alt="" />
                        <br />
                        <br />
                        <h4>JavaScript</h4>
                    </div>
                </div>
                <div class="col-md-3" data-aos="zoom-out-down">
                    <div class="py-4  img-tn rounded  border bg-dark">
                        <img className="img-wd w-50" src={reactjs} alt="" />
                        <br />
                        <br />
                        <h4>React JS</h4>
                    </div>
                </div>
                <div class="col-md-3" data-aos="zoom-out-down">
                    <div class="py-4  img-tn rounded  border bg-dark">
                        <img className="img-wd w-50" src={mui} alt="" />
                        <br />
                        <br />
                        <h4>Materia UI</h4>
                    </div>
                </div>
                <div class="col-md-3" data-aos="zoom-out-down">
                    <div class="py-4  img-tn rounded  border bg-dark">
                        <img className="img-wd w-50" src={firebase} alt="" />
                        <br />
                        <br />
                        <h4>Firebase</h4>
                    </div>
                </div>
                <div class="col-md-3" data-aos="zoom-out-down">
                    <div class="py-4  img-tn rounded  border bg-dark">
                        <img className="img-wd w-50" src={github} alt="" />
                        <br />
                        <br />
                        <h4>gitHub</h4>
                    </div>
                </div>
                <div class="col-md-3" data-aos="zoom-out-down">
                    <div class="py-4  img-tn rounded  border bg-dark">
                        <img className="img-wd w-50" src={nodejs} alt="" />
                        <br />
                        <br />
                        <h4>Node Js</h4>
                    </div>
                </div>
                <div class="col-md-3" data-aos="zoom-out-down">
                    <div class="py-4  img-tn rounded  border bg-dark">
                        <img className="img-wd w-50" src={expressjs} alt="" />
                        <br />
                        <br />
                        <h4>Express JS</h4>
                    </div>
                </div>
                <div class="col-md-3" data-aos="zoom-out-down">
                    <div class="py-4  img-tn rounded  border bg-dark">
                        <img className="img-wd w-50" src={mongodb} alt="" />
                        <br />
                        <br />
                        <h4>MongoDB</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
