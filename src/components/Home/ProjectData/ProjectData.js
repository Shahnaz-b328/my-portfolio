import React from 'react';
import './ProjectData.css';
import image from '../../../images/mobile_repair.PNG';
import image2 from '../../../images/programming_book_store.PNG';
import image3 from '../../../images/sylhet_riders.PNG';
import Project from '../Project/Project';
const Data = [
    {
        title: 'Mobile Repair Services',
        image: image,
        livePreview: 'https://mobile-repair-service-5e8dd.web.app/',
        gitHubClient: 'https://github.com/Shahnaz-b328/mobile-service',
        gitHubServer: 'https://github.com/Shahnaz-b328/mobile-service-server'
    },
    {
        title: 'Programming Book Store',
        image: image2,
        livePreview: 'https://programming-book-store.web.app/',
        gitHubClient: 'https://github.com/Shahnaz-b328/book-store',
        gitHubServer: 'https://github.com/Shahnaz-b328/book-store-server'
    },
    {
        title: 'Sylhet Riders',
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
                <div className="project container mb-5">
                    {
                        Data.map(project => <Project project={project}></Project>)
                    }
                </div>
            </div>
        </section>
    );
};

export default ProjectData;