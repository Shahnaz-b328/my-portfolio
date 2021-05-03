import React from 'react';
import { useState } from 'react';
import { send } from 'emailjs-com';
import { init } from 'emailjs-com';
import './Contact.css';
const ContactUs = () => {
    init("user_Pa65x2u6uStZvD1PhL7dc");
    const [toSend, setToSend] = useState({
        to_name: '',
        message: '',
        reply_to: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_xu6or0b',
            'template_shiwp9b',
            toSend,
            'user_Pa65x2u6uStZvD1PhL7dc'
        )
    };

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };
    return (
        <section className="mt-5 container contact-background" id="contact">
            <div className="container mt-5">
                <h1 className="text-uppercase mt-5" style={{ textAlign: 'center', color: 'pink', }}>Contact Me</h1>
                <div className="container mt-5">
                    <form className="d-flex mx-5" onSubmit={onSubmit}>
                        <div className="col-md-6">
                            <input
                                type='text'
                                size="40"
                                name='to_name'
                                placeholder='Your Name'
                                value={toSend.to_name}
                                onChange={handleChange}
                            /><br></br>
                            <input
                                type='text'
                                size="40"
                                name='reply_to'
                                placeholder='Your email'
                                value={toSend.reply_to}
                                onChange={handleChange}
                            /><br></br>
                        </div>
                        <div className="col-md-6">
                            <textarea
                                cols="50"
                                rows="10"
                                type='text'
                                name='message'
                                placeholder='Message'
                                value={toSend.message}
                                onChange={handleChange}
                            /><br></br>
                            <button style={{
                                color: 'white', width: '200px', height: '50px',
                                backgroundColor: 'DarkSalmon', border: 'none',
                                fontFamily: 'Arial', fontWeight: 'bold'
                            }}
                                type="submit">SEND</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;