import React from 'react';
import BlogDetail from '../BlogDetail/BlogDetail';
import './Blog.css';
const blogData = [
    {
        title: 'Early snow',
        reading: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque doloribus delectus repellendus minus eum iste corrupti enim, nostrum autem maiores! Sapiente, nisi aut cumque odio laudantium ducimus sint deleniti nam!'

    },
    {
        title: 'Dancing days',
        reading: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque doloribus delectus repellendus minus eum iste corrupti enim, nostrum autem maiores! Sapiente, nisi aut cumque odio laudantium ducimus sint deleniti nam!'
    },
    {
        title: 'Take me out',
        reading: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque doloribus delectus repellendus minus eum iste corrupti enim, nostrum autem maiores! Sapiente, nisi aut cumque odio laudantium ducimus sint deleniti nam!'
    },
]

const Blog = () => {
    return (
        <section id="blog">
            <div className="container mt-5 bg-color">
                <h1 className="text-uppercase" style={{ textAlign: 'center', color: 'pink', }}>Blogs</h1>
                <div className="blog row mt-5 mx-5">
                    {
                        blogData.map(blogs => <BlogDetail blogs={blogs}></BlogDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Blog;