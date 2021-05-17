import React from 'react';
import './BlogDetail.css';
const BlogDetail = (props) => {
    const { title, reading, link } = props.blogs
    return (
        <div className="p-3 my-5" >
            <div class="blog-card" style={{ width: "18rem" }}>
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text text-secondary">{reading}</p>
                    <a target="_blank" rel="noopener noreferrer" href={link}>
                        <button className="btn btn-primary">See More</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;