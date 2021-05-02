import React from 'react';

const BlogDetail = (props) => {
    const { title, reading } = props.blogs
    return (
        <div className="col-md-4" >
            <div class="card" style={{width: "18rem"}}>
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text text-secondary">{reading}</p>
                    <button className="btn btn-primary">See More</button>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;