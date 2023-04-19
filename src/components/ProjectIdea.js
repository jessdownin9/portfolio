import React, { useState } from 'react';
import './ProjectIdea.css';
import { Link } from 'react-scroll';

export const ProjectIdea = () => {
    const [ hover, setHover ] = useState(false);
    return (
        <div className='projectIdea'>
            <h2>Have a project idea?<br></br>Let's discuss it!</h2>
            <p>Let's bring your ideas to life! Get in touch with me to discuss <br></br>your project vision and let's work together to make it a reality.</p>
            <Link 
                className='button' 
                to='contact' 
                smooth={true} 
                duration={500}
                onMouseEnter={() => setHover(true)} 
                onMouseLeave={() => setHover(false)}>
                Let's work together!
                <img 
                    alt='Right arrow' 
                    src={hover ? require('../images/whiteArrow.png') : require('../images/purpleArrow.png')} 
                />
            </Link>
        </div>
    )
};

export default ProjectIdea;
