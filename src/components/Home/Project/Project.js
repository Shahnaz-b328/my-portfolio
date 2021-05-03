import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router';
import './Project.css';
const Project = (props) => {
    const { title, image, livePreview, gitHubClient, text, icon1, icon2, icon3, icon4, icon5, icon6 } = props.project
    const history = useHistory();
    const projectDetail = (title) => {
        history.push(`/project/${title}`)
    }
    return (
        <section className="container mt-5 my-5">
            <div className="col-md-4">
                <div class="card shadow rounded" style={{ width: '18rem' }} >
                    <div className="image-design">
                        <img style={{ width: '290px', height: '200px' }} src={image} class="card-img-top" alt="..." />
                        <div class="overlay">
                            <div className="text">
                                <p>{text}</p>
                            </div>
                            <div>
                                <p className="paragraph">Technologies</p>
                                <div className="icons">
                                    <FontAwesomeIcon size="2x" color="navy" icon={icon1} />
                                    <FontAwesomeIcon size="2x" color="navy" icon={icon2} />
                                    <FontAwesomeIcon size="2x" color="navy" icon={icon3} />
                                    <FontAwesomeIcon size="2x" color="navy" icon={icon4} />
                                    <FontAwesomeIcon size="2x" color="navy" icon={icon5} />
                                    <FontAwesomeIcon size="2x" color="navy" icon={icon6} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <p onClick={() => projectDetail(title)} style={{ color: 'navy', textAlign: 'center', fontFamily: 'Arial', cursor: 'pointer' }} class="card-text">{title}</p>
                        <div >
                            <a style={{ textDecoration: 'none', color: 'indigo' }} target="_blank" rel="noopener noreferrer" href={livePreview} class="card-text">Live PreView</a>
                            <a style={{ textDecoration: 'none', color: 'indigo', float: 'right' }} target="_blank" rel="noopener noreferrer" href={gitHubClient} class="card-text">GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Project;