import React from 'react';
import About from '../../About/About/About';
import ContactUs from '../../About/ContactUs/ContactUs';
import Blog from '../../Blog/Blog';
import Footer from '../../Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Header from '../Header/Header';
import ProjectData from '../ProjectData/ProjectData';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <ProjectData></ProjectData>
            <Blog></Blog>
            <About></About>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;