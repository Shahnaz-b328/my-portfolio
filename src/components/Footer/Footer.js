import { faAddressBook, faEnvelopeSquare, faMobile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (
        <section className="container mt-5 bg-light">
            <div className="row  d-flex my-5 mx-5">
            <div className="col-md-4 my-5">
            <FontAwesomeIcon style={{color:'blue'}} size="4x" icon={faMobile} />
                <p>Mobile</p>
                <p>000000121873</p>
            </div>
            <div className="col-md-4 my-5">
                <FontAwesomeIcon style={{color:'blue'}}  size="4x" icon={faAddressBook} />
                <p>Address</p>
                <p>Sylhet</p>
            </div>
            <div className="col-md-4 my-5">
            <FontAwesomeIcon style={{color:'blue'}}  size="4x" icon={faEnvelopeSquare} />
            <p>Email</p>
            <p>shahnazb722@gmail.com</p>
            </div>
            </div>
        </section>
    );
};

export default Footer;