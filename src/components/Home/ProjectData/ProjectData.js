import React from 'react';
import { faJs, faReact, faHtml5, faBootstrap, faNodeJs, faStripe} from '@fortawesome/free-brands-svg-icons';
import './ProjectData.css';
import image from '../../../images/mobile_repair.PNG';
import image2 from '../../../images/programming_book_store.PNG';
import image3 from '../../../images/sylhet_riders.PNG';
import Project from '../Project/Project';
const Data = [
    {
        title: 'Mobile Repair Services',
        image: image,
        text:' It’s mobile repair services website .Three types feature services rapair details and testimonial.online payment system',
        icon1:faReact,
        icon2:faJs,
        icon3:faHtml5,
        icon4:faBootstrap, 
        icon5:faNodeJs,
        icon6:faStripe,
        livePreview: 'https://mobile-repair-service-5e8dd.web.app/',
        gitHubClient: 'https://github.com/Shahnaz-b328/mobile-service',
        gitHubServer: 'https://github.com/Shahnaz-b328/mobile-service-server'
    },
    {
        title: 'Programming Book Store',
        text:'online programming bookstore.online order and checkout system',
        icon1:faReact,
        icon2:faJs,
        icon3:faHtml5,
        icon4:faBootstrap, 
        icon5:faNodeJs,
        image: image2,
        livePreview: 'https://programming-book-store.web.app/',
        gitHubClient: 'https://github.com/Shahnaz-b328/book-store',
        gitHubServer: 'https://github.com/Shahnaz-b328/book-store-server'
    },
    {
        title: 'Sylhet Riders',
        text:'riders website.user can used google map',
        icon1:faReact,
        icon2:faJs,
        icon3:faHtml5,
        icon4:faBootstrap,
        image: image3,
        livePreview: 'https://sylhet-riders.web.app/',
        gitHubClient: 'https://github.com/Shahnaz-b328/sylhet-riders',
    },

]
const ProjectData = () => {
    return (
        <section id="project">
            <div className="container mt-5 back-color">
                <h1 className="text-uppercase" style={{ textAlign: 'center', color: 'pink', }}>Project</h1>
                <div className="project row mx-5">
                    {
                        Data.map(project => <Project project={project}></Project>)
                    }
                </div>
            </div>
        </section>
    );
};

export default ProjectData;