import React from 'react';
import BlogDetail from '../BlogDetail/BlogDetail';
import './Blog.css';
const blogData = [
    {
        title: 'JavaScript',
        reading: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque doloribus delectus repellendus minus eum iste corrupti enim, nostrum autem maiores! Sapiente, nisi aut cumque odio laudantium ducimus sint deleniti nam!',
        link: 'https://shahnazb722.medium.com/javascript-d225cd0b5edf'

    },
    {
        title: 'React.Component',
        reading: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque doloribus delectus repellendus minus eum iste corrupti enim, nostrum autem maiores! Sapiente, nisi aut cumque odio laudantium ducimus sint deleniti nam!',
        link: 'https://shahnazb722.medium.com/react-component-6ff95d1dc7ae'
    },
    {
        title: 'JavaScript Block Binding',
        reading: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque doloribus delectus repellendus minus eum iste corrupti enim, nostrum autem maiores! Sapiente, nisi aut cumque odio laudantium ducimus sint deleniti nam!',
        link: 'https://shahnazb722.medium.com/javascript-block-binding-fb5357cf70c3'
    },
]

const Blog = () => {
    return (
        <section id="blog">
            <div className="container mt-5 bg-color">
                <h1 className="text-uppercase" style={{ textAlign: 'center', color: 'pink', }}>Blogs</h1>
                <div className="container mx-5">
                    <div className="row">
                        {
                            blogData.map(blogs => <BlogDetail blogs={blogs}></BlogDetail>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;