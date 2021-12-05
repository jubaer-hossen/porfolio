import React from 'react';
import Typical from 'react-typical';
import './Banner.css';

const Banner = () => {
    return (
        <div id="home" className="overflow-hidden">
            <div className="overflow-hidden">
                <div className="row bg-img d-flex text-white align-items-center justify-content-start">
                    <div className="col-7 text-start ps-md-5 ms-md-5">
                        <h1 className="font-size font4">MD Jubaer Hossen</h1>
                        <h2 className="font2">
                            I'm a{' '}
                            <span className="font1">
                                <Typical
                                    loop={Infinity}
                                    wrapper="b"
                                    steps={[
                                        'Web-developer',
                                        1000,
                                        'React developer ',
                                        1000,
                                        'JavaScript developer ',
                                        1000,
                                        'Frontend developer ',
                                        1000,
                                    ]}
                                />
                            </span>
                        </h2>

                        <a
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-primary font3"
                            aria-current="page"
                            href="https://drive.google.com/u/0/uc?id=1xOgKe7tN1m_CK9HVFhD90cNorp-IhNly&export=download"
                        >
                            <i class="fas fa-file-download"></i> Download resume
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
