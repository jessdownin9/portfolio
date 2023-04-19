import React, { useState } from 'react';
import './About.css';
import { Link } from 'react-scroll';

export const About = () => {
    const [ hover, setHover ] = useState(false);

    return (
        <div id='about'>
            <div className='imgcontainer'></div>
            <div className='rightcolumn'>
                <h2>I am a Full Stack Developer</h2>
                <p>I'm skilled in both front-end and back-end development, and I have experience working with databases, APIs, and web servers.</p>
                <p>Whether I'm developing a new application or maintaining an existing one, I always strive to deliver code that is clean, efficient, and easy to maintain.</p>
                <div className='buttoncontainer'>
                    <Link className='button' to='projects' smooth={true} duration={500}>My Projects</Link>
                    <button 
                        className='button' 
                        onClick={() => window.open(process.env.PUBLIC_URL + '/resume.pdf', '_blank')}
                        onMouseEnter={() => setHover(true)} 
                        onMouseLeave={() => setHover(false)}
                        >
                        <img 
                            alt='Download icon' 
                            src={hover ? require('../images/downloadiconHover.png') : require('../images/downloadicon.png')}
                        />
                        Download Résumé
                    </button>
                </div>
            </div>
        </div>
    )
};

export default About;
