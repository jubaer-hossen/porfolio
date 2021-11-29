import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div id="banner" className="">
            <div className="overflow-hidden">
                <div className="row bg-img d-flex text-white align-items-center justify-content-start">
                    <div className="col-7 text-start ps-5">
                        <h1 className="font-size">MD Jubaer Hossen</h1>
                        <h3>Web-developer</h3>
                        <a
                            target="_blank"
                            class="nav-link active"
                            aria-current="page"
                            href="https://drive.google.com/u/0/uc?id=1xOgKe7tN1m_CK9HVFhD90cNorp-IhNly&export=download"
                        >
                            <button className="btn btn-primary">
                                Download resume
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
