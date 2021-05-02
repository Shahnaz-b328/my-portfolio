import React from 'react';
import SkillBar from 'react-skillbars';
const skills = [
    { type: "Java", level: 70 },
    { type: "Javascript", level: 85 },
    { type: "Node Js", level: 85 },
    { type: "React", level: 95 },
    { type: "c", level: 80 },
    { type: "PHP", level: 50 },
    { type: "DataStructure", level: 40 },
    { type: "Algorithm", level: 30 },
];
const About = () => {
    return (
        <section id="about">
            <div className="container mt-5 bg-light">
                <h1 className="text-uppercase" style={{ textAlign: 'center', color: 'pink', }}>About Me</h1>
                <div className="col-md-6 my-5 container">
                    <p style={{ textAlign: 'justify', color: '#6495ED' }}>I hard working person.seeking a position in the field of computer science where I can utilize my skills to further work towards personal and professional development and contribute towards prosperity of the organization.</p>
                </div>
                <div className="col-md-6 my-5 container">
                    <h5 style={{ textAlign: 'center', color: 'mediumslateblue', fontWeight: 'bold' }}>Skills</h5>
                    <SkillBar skills={skills} height={30} />
                </div>
            </div>
        </section>
    );
};

export default About;