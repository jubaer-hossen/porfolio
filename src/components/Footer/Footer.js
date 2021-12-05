import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div className="bg-dark text-white text-center footer py-5">
            <div className="text-white social-icon">
                <h1>Me on social</h1>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com/Jubaer.Hossen.nur/"
                >
                    <i className="fab fa-facebook fs-3 me-2"></i>
                </a>

                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/md_jubaer_hossen_nur/"
                >
                    <i className="fab fa-instagram fs-3 me-2"></i>
                </a>

                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/jubaer-hossen/"
                >
                    <i className="fab fa-linkedin fs-3 me-2"></i>
                </a>

                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.youtube.com/channel/UCBcE8cdHHLGyOyyREH3M19w"
                >
                    <i className="fab fa-youtube fs-3"></i>
                </a>
            </div>
            <hr />
            <p>© Copyrighted by Jubaer Hossen.</p>
        </div>
    );
};

export default Footer;
