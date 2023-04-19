import React from 'react';
import './Footer.css';
import { Link } from 'react-scroll';

export const Footer = () => {
    return (
        <div className='footer'>
            <Link className='link' to='home' smooth={true} duration={500}>Home</Link>
            <Link className='link' to='about' smooth={true} duration={500}>About</Link>
            <Link className='link' to='technicalSkills' smooth={true} duration={500}>Skills</Link>
            <Link className='link' to='projects' smooth={true} duration={500}>Projects</Link>
            <Link className='link' to='services' smooth={true} duration={500}>Services</Link>
            <Link className='link' to='contact' smooth={true} duration={500}>Contact</Link>
        </div>
    )
};

export default Footer;
