import { faDownload, faFile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import TextAnimation from 'react-animate-text';
import TextTransition, { presets } from "react-text-transition";
import image from '../../../images/cv_pic.jpg';
import resume from '../../../images/Shahnaz Begum_Resume_Update30April-converted.pdf';
import './Header.css';
const TEXTS = [
    "Web Developer",
    "JS Developer",
    "React Developer",
    "Front-End Developer"
];
const Header = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() =>
            setIndex(index => index + 1),
            3000 // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <section id="home" className="header-background container">
            <div className="container mt-5 d-flex mx-5 home-design">
                <div className="col-md-6 mt-5 mx-5">
                    <h2 style={{ color: 'RebeccaPurple', fontFamily: 'Times New Roman' }}>I am Shahnaz Begum</h2>
                    <h5 style={{ color: 'Teal', fontFamily: 'Times New Roman', fontWeight: 'bold' }}>
                        <TextTransition
                            text={TEXTS[index % TEXTS.length]}
                            springConfig={presets.wobbly}
                        />
                    </h5>
                    <TextAnimation>
                        <a style={{ textDecoration: 'none', fontFamily: 'Arial', color: 'navy', fontWeight: 'bold' }} href={resume} download>
                            <FontAwesomeIcon icon={faDownload} /> Download Resume
                         </a><br></br>
                        <a target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', fontFamily: 'Arial', color: 'navy', fontWeight: 'bold' }} href="https://drive.google.com/file/d/1ruhaqbGvEj04csCOCeshkWidzZduBAoC/view" download>
                            <FontAwesomeIcon icon={faFile} />View Resume
                         </a>
                    </TextAnimation>
                </div>
                <div className="col-md-6 mt-5 col-sm-6">
                    <img style={{ width: '200px', borderRadius: '50%', marginLeft: '40px' }} src={image} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Header;