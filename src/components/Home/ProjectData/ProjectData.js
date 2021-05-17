import React from 'react';
import './ProjectData.css';
import image from '../../../images/mobile.png';
import image2 from '../../../images/programming_book_store.PNG';
import image3 from '../../../images/riders.PNG';
import Project from '../Project/Project';
const Data = [
    {
        title: 'Mobile Repair Services',
        image: image,
        text: ' It’s mobile repair services website .Three types feature services rapair details and testimonial.online payment system',
        livePreview: 'https://mobile-repair-service-5e8dd.web.app/',
        gitHubClient: 'https://github.com/Shahnaz-b328/mobile-service',
        gitHubServer: 'https://github.com/Shahnaz-b328/mobile-service-server'
    },
    {
        title: 'Programming Book Store',
        text: 'online programming bookstore.online order and checkout system',
        image: image2,
        livePreview: 'https://programming-book-store.web.app/',
        gitHubClient: 'https://github.com/Shahnaz-b328/book-store',
        gitHubServer: 'https://github.com/Shahnaz-b328/book-store-server'
    },
    {
        title: 'Sylhet Riders',
        text: 'riders website.user can used google map',
        image: image3,
        livePreview: 'https://sylhet-riders.web.app/',
        gitHubClient: 'https://github.com/Shahnaz-b328/sylhet-riders',
    },

]
const ProjectData = () => {
    return (
        <section id="project" className="background-color container">
            <div className="mt-5">
                <h1 className="text-uppercase" style={{ textAlign: 'center', color: 'pink', }}>Project</h1>
            </div>
            <div className="container">
                <div className="row">
                    {
                        Data.map(project => <Project project={project}></Project>)
                    }
                </div>
            </div>
        </section>
    );
};

export default ProjectData;