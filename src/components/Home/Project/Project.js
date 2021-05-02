import React from 'react';
import { useHistory } from 'react-router';
import './Project.css';
const Project = (props) => {
    const { title, image, livePreview, gitHubClient } = props.project
    const history = useHistory();
    const projectDetail = (title) => {
        history.push(`/project/${title}`)
    }
    return (
        <section className="container mt-5">
            <div className="col-md-4">
                <div class="card" style={{ width: '18rem' }} >
                    <img className="image" style={{ width: '290px', height: '200px' }} src={image} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <p onClick={() => projectDetail(title)} style={{ color: 'navy', textAlign: 'center', fontFamily: 'Arial', cursor:'pointer'}} class="card-text">{title}</p>
                        <div >
                            <a style={{ textDecoration: 'none', color: 'indigo' }} target="_blank" href={livePreview} class="card-text">Live PreView</a>
                            <a style={{ textDecoration: 'none', color: 'indigo', float: 'right' }} target="_blank" href={gitHubClient} class="card-text">GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Project;