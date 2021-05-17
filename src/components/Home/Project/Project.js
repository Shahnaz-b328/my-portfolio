import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Project.css';
const Project = (props) => {
    const { title, image, livePreview, gitHubClient, text } = props.project

    return (
        <section className="my-5 mx-2">
            <div className="p-3">
                <div class="project-card hovereffect" style={{ width: '18rem' }}>
                    <img style={{ width: '290px' }} src={image} class="card-img-top" alt="..." />
                    <div class="overlay">
                        <h2>{title}</h2>
                        <p class="icon-links">
                            <a target="_blank" rel="noopener noreferrer" href={gitHubClient}>
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href={livePreview}>
                                <FontAwesomeIcon icon={faHeart} />
                            </a>
                        </p>
                    </div>
                    <div class="card-body">
                        <p class="card-text">{text}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Project;