import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faAddressBook, faEnvelopeSquare, faMobile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (
        <section className="container mt-5 bg-light">
            <div className="row  d-flex my-5 mx-5">
                <div className="col-md-4 my-5">
                    <FontAwesomeIcon style={{ color: 'blue' }} size="4x" icon={faMobile} />
                    <p>Mobile</p>
                    <p>000000121873</p>
                </div>
                <div className="col-md-4 my-5">
                    <FontAwesomeIcon style={{ color: 'blue' }} size="4x" icon={faAddressBook} />
                    <p>Address</p>
                    <p>Sylhet,Bangladesh</p>
                </div>
                <div className="col-md-4 my-5">
                    <FontAwesomeIcon style={{ color: 'blue' }} size="4x" icon={faEnvelopeSquare} />
                    <p>Email</p>
                    <p>shahnazb722@gmail.com</p>
                </div>
                <div className="my-5 mx-5">
                    <a target="_blank" rel="noopener noreferrer" href="https://web.facebook.com/profile.php?id=100012634053329"><FontAwesomeIcon size="4x" color="blue" icon={faFacebook} /></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/Shahnaz-b328?tab=repositories"><FontAwesomeIcon size="4x" color="blue" icon={faGithub} /></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/shahnaz-begum-9b0b151b8/"> <FontAwesomeIcon size="4x" color="blue" icon={faLinkedin} /></a>
                </div>
            </div>
        </section>
    );
};

export default Footer;