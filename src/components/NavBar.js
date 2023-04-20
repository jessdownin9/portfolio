import React, { useState } from 'react';
import './NavBar.css';
import { Link } from 'react-scroll';

export const NavBar = () => {
    const [checked, setChecked] = useState(false);

    return (
        <div className='navBar'>
            <div className='spreadnavbar'>
                <Link className='link' to='home' smooth={true} duration={500}>Home</Link>
                <Link className='link' to='about' smooth={true} duration={500}>About</Link>
                <Link className='link' to='technicalSkills' smooth={true} duration={500}>Skills</Link>
                <Link className='link' to='projects' smooth={true} duration={500}>Projects</Link>
                <Link className='link' to='services' smooth={true} duration={500}>Services</Link>
                <Link className='link' to='contact' smooth={true} duration={500}>Contact</Link>
            </div>
            <div className='hamburgermenu'>
                <input id="menu-toggle" type="checkbox" onChange={() => setChecked(!checked)} checked={checked} />
                <label className='menu-button-container' htmlFor="menu-toggle">
                    <div className='menu-button'></div>
                </label>
                <ul className='menu'>
                    <Link className='link' to='home' smooth={true} duration={500}>Home</Link>
                    <Link className='link' to='about' smooth={true} duration={500}>About</Link>
                    <Link className='link' to='technicalSkills' smooth={true} duration={500}>Skills</Link>
                    <Link className='link' to='projects' smooth={true} duration={500}>Projects</Link>
                    <Link className='link' to='services' smooth={true} duration={500}>Services</Link>
                    <Link className='link' to='contact' smooth={true} duration={500}>Contact</Link>
                </ul>
            </div>
        </div>
    )
};

export default NavBar;
