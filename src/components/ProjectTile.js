import React, { useState } from 'react';
import './ProjectTile.css';

export const ProjectTile = ({ imgUrl, technologies, title, description, gitHubLink, siteLink }) => {
    const [gitHubHover, setGitHubHover] = useState(false);
    const [openWindowHover, setOpenWindowHover] = useState(false);
    return (
        <div className='projectTile'>
            <div className='imgcontainer'>
                <img alt='Preview of web app' src={require(`../images/${imgUrl}.png`)} />
            </div>
            <div className='projectDescription'>
                <h4>{technologies}</h4>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className='buttoncontainer'>
                    <img 
                        onMouseEnter={() => setGitHubHover(true)} 
                        onMouseLeave={() => setGitHubHover(false)}
                        alt='GitHub icon' 
                        src={gitHubHover ? require('../images/gitHubHover.png') : require('../images/gitHub.png')} 
                        onClick={() => window.open(`${gitHubLink}`, '_blank')}
                    />
                    <img 
                        onMouseEnter={() => setOpenWindowHover(true)} 
                        onMouseLeave={() => setOpenWindowHover(false)}
                        alt='Open new window icon' 
                        src={openWindowHover ? require('../images/openWindowHover.png') : require('../images/openWindow.png')}
                        onClick={() => window.open(`${siteLink}`, '_blank')} 
                    />
                </div>
            </div>
        </div>
    )
};

export default ProjectTile;
