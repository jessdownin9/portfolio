import React from 'react';
import './Projects.css';
import ProjectTile from './ProjectTile';

export const Projects = () => {
    return (
        <div id='projects'>
            <h2>Projects</h2>
            <div className='headingcontainer'>
                <p>Welcome to my projects section, where you can explore my latest works and discover my passion for creating innovative and functional web solutions.</p>
            </div>
            <div className='projectTiles'>
                <ProjectTile 
                    imgUrl='succup'
                    technologies='JavaScript, React, Node, Express, PostgresSQL'
                    title='Suc Cup'
                    description ='E-commerce web application for start-up company, Suc Cup.'
                    gitHubLink='https://github.com/jessdownin9/succup'
                    siteLink='https://www.succup.com/'
                />
                <ProjectTile
                    imgUrl='redditClient'
                    technologies='JavaScript, React, Redux, Express'
                    title='Reddit Client'
                    description='Allows users to easily browse and search Reddit posts and comments.'
                    gitHubLink='https://github.com/jessdownin9/reddit-client'
                    siteLink='https://lilreddit.netlify.app/'
                />
                <ProjectTile
                    imgUrl='groceryCart'
                    technologies='TBD'
                    title='Grocery List'
                    description='Currently under construction' 
                    gitHubLink=''
                    siteLink=''
                />
            </div>
        </div>
    )
};

export default Projects;
