import React from 'react';
import './Contact.css';
import Phone from '../../img/download.png';
import Email from '../../img/9-99241_email-icon-black-circle-envelope-email-icon-png.png';
import Address from '../../img/location_pin_002.jpg';
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        emailjs
            .sendForm(
                'service_36pn8xn',
                'template_9khwtx8',
                formRef.current,
                'user_SN0donlQLI9eQW9obGPsE'
            )
            .then(
                result => {
                    console.log(result.text);
                    setDone(true);
                    if (setDone) {
                        e.target.reset();
                    }
                },
                error => {
                    console.log(error.text);
                }
            );
    };
    return (
        <div id="contact" className="c my-5">
            <h1 className="font4 text-center font-color">Contact Me</h1>
            <div className="c-wrapper">
                <div className="c-left" data-aos="flip-right">
                    <h1 className="c-title">Let's discuss your project</h1>
                    <div className="c-info fw-bold font3">
                        <div className="c-info-item">
                            <img src={Phone} alt="" className="c-icon" />
                            +880-17247-51**8
                        </div>
                        <div className="c-info-item">
                            <img className="c-icon" src={Email} alt="" />
                            jubaerhossen***@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img className="c-icon" src={Address} alt="" />
                            Nachnapara, Pathorghata, Barguna, Barishal,
                            Bangladesh
                        </div>
                    </div>
                </div>
                <div className="c-right font2" data-aos="flip-left">
                    <p className="c-desc fw-bold font3">
                        <b>What’s your story?</b> Get in touch. Always available
                        for freelancing if the right project comes along. me.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input
                            type="name"
                            placeholder="Name"
                            name="user_name"
                            required
                        />
                        <br />
                        <input
                            type="text"
                            placeholder="Subject"
                            name="user_subject"
                            required
                        />
                        <br />
                        <input
                            type="email"
                            placeholder="Email"
                            name="user_email"
                            required
                        />
                        <textarea
                            rows="5"
                            placeholder="Message"
                            name="message"
                            required
                        />
                        <button className="btn btn-success font3">
                            Submit
                        </button>
                        <br />

                        {done === true && 'Thank you...'}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
