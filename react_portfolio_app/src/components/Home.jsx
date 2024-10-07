import React from 'react';
import AboutMe from "./AboutMe";
import ProjectList from "./ProjectList";
import Skills from "./Skills"

const Home = () => {
    return (
        <div style={{backgroundColor: '#4abdac', color: 'white',
            margin: '0', paddingTop: '30px', paddingBottom: '30px', minHeight: '100vh'}}>
            <AboutMe></AboutMe>
            <ProjectList></ProjectList>
            <Skills></Skills>
        </div>
    );
};

export default Home;

