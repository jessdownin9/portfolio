import React from 'react';
import './Home.css';
import { Link } from 'react-scroll';

export const Home = () => {
    return (
        <div id='home'>
            <div className='leftcolumn'>
                <h1>Hi, I'm Jessica Downing</h1>
                <p>I'm a full stack developer with a passion for creating dynamic and intuitive web applications. I specialize in building high-quality, scalable software solutions from the ground up. If you're looking for a talented developer who can help bring your ideas to life, feel free to get in touch with me.</p>
                <Link className='button' to='contact' smooth={true} duration={500}>Say Hello!</Link>
            </div>
            <div className='imgcontainer'></div>
        </div>
    )
};

export default Home;
