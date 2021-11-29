import React from 'react';
import About from '../about/About';
import Banner from '../Banner/Banner';
import Contact from '../contact/Contact';
import NavBar from '../NavBar/NavBar';
import Projects from '../Project/Projects';
import Skills from '../skills/Skills';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;
