import { faDownload, faFile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import TextAnimation from 'react-animate-text';
import TextTransition, { presets } from "react-text-transition";
import resume from '../../../images/Shahnaz Begum_Resume.pdf';
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
            <div className="container mt-5">
                <div className="mx-5 my-5 container">
                    <h2 style={{ color: 'white', fontFamily: 'Times New Roman', fontSize: '40px', marginTop:'40px', marginLeft:'100px'}}>I am Shahnaz Begum</h2>
                    <h5 style={{ color: 'white', fontFamily: 'Times New Roman', fontWeight: 'bold', fontSize: '40px', marginLeft:'100px'}}>
                        <TextTransition
                            text={TEXTS[index % TEXTS.length]}
                            springConfig={presets.wobbly}
                        />
                    </h5>
                    <TextAnimation>
                        <a href={resume} download>
                            <button className="my-2" style={{ backgroundColor: '#de5d83', textDecoration: 'none', fontFamily: 'Arial', color: 'white', fontWeight: 'bold', marginLeft:'100px' }}><FontAwesomeIcon className="mx-2" icon={faDownload} /> Download Resume</button>
                        </a><br></br>
                        <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1Z6NBkx4RiLkI_WaE9szESWU0E-WtaU_a/view" download>
                            <button className="my-2" style={{ backgroundColor: '#de5d83', textDecoration: 'none', fontFamily: 'Arial', color: 'white', fontWeight: 'bold', marginLeft:'100px' }}><FontAwesomeIcon className="mx-2" icon={faFile} />View Resume</button>
                        </a>
                    </TextAnimation>
                </div>
            </div>
        </section>
    );
};

export default Header;