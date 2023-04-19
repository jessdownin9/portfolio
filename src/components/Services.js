import React from 'react';
import './Services.css';
import ServiceTile from './ServiceTile';
import { Link } from 'react-scroll';

export const Services = () => {
    return (
        <div id='services'>
            <div className='leftcolumn'>
                <h2>What do I do?</h2>
                <p>As a full stack developer, I work on both the front-end and back-end of web applications, integrating multiple programming languages and frameworks to create a cohesive and functional product. I also have experience working with databases and RESTful APIs to store and manage data efficiently.</p>
                <p>My role is to deliver high-quality, user-friendly, and secure web applications that meet the needs of clients and stakeholders. I have excellent problem-solving and communication skills, enabling me to troubleshoot issues and work closely with clients to understand their requirements and provide effective solutions.</p>
                <Link className='button' to='contact' smooth={true} duration={500}>Contact Me!</Link>
            </div>
            <div className='rightcolumn'>
                <ServiceTile 
                    title='Front-end Development'
                    description='My work involves designing and implementing the user interface and user experience of web applications to create engaging and responsive designs that provide an excellent user experience.' 
                />
                <ServiceTile 
                    title='Back-end Development'
                    description='I design and build the server-side components of web applications, including the database, server, and application logic to create scalable and secure applications that can handle complex data management tasks.'
                />
                <ServiceTile
                    title='Data Management'
                    description=' I am responsible for designing and implementing systems and processes for collecting, storing, organizing, analyzing, and protecting data to ensure data accuracy, availability, and security.'
                />
            </div>
        </div>
    )
};

export default Services;
