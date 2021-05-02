import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import TextAnimation from 'react-animate-text';
import image from '../../../images/cv_pic.jpg';
import resume from '../../../images/Shahnaz Begum_Resume_Update30April-converted.pdf';
const Header = () => {
    return (
        <section className="bg-light container">
            <div className="container mt-5 d-flex mx-5">
                <div className="col-md-6">
                    <h2 style={{ color: 'RebeccaPurple', fontFamily: 'Times New Roman' }}>I am Shahnaz Begum</h2>
                    <TextAnimation>
                        <h5 style={{ color: 'Teal', fontFamily: 'Times New Roman', fontWeight: 'bold' }}>Web Developer</h5>
                    </TextAnimation>;
                <a style={{ textDecoration: 'none', fontFamily: 'Arial', color: 'DarkSalmon', fontWeight: 'bold' }} href={resume} download>
                <FontAwesomeIcon icon={faDownload} /> Download Resume
                </a>
                </div>
                <div className="col-md-6">
                    <img style={{ width: '200px', borderRadius: '50%', marginLeft: '40px' }} src={image} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Header;