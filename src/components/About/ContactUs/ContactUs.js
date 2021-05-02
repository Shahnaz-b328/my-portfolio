import React from 'react';
import { useState } from 'react';
import { send } from 'emailjs-com';
import { init } from 'emailjs-com';
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
        <section className="mt-5 container bg-secondary" id="contact">
            <div className="container mt-5">
                <h1 className="text-uppercase" style={{ textAlign: 'center', color: 'pink', }}>Contact Me</h1>
                <div className="col-md-6 container">
                    <form onSubmit={onSubmit}>
                        <input
                            type='text'
                            size="30"
                            name='to_name'
                            placeholder='Your Name'
                            value={toSend.to_name}
                            onChange={handleChange}
                        /><br></br>
                        <input
                            type='text'
                            size="30"
                            name='reply_to'
                            placeholder='Your email'
                            value={toSend.reply_to}
                            onChange={handleChange}
                        /><br></br>
                        <textarea
                            cols="30"
                            rows="10"
                            type='text'
                            name='message'
                            placeholder='Your message'
                            value={toSend.message}
                            onChange={handleChange}
                        /><br></br>
                        <button style={{ color: 'white', width: '100px', backgroundColor: 'DarkSalmon', border:'none' }} type="submit">Send</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;