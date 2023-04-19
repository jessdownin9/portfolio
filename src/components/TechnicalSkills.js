import React, { useEffect } from 'react';
import './TechnicalSkills.css';
import SkillTile from './SkillTile';

const imageUrls = {
  JavaScript: require('../images/JavaScript.png'),
  JavaScriptHover: require('../images/JavaScriptHover.png'),
  React: require('../images/React.png'),
  ReactHover: require('../images/ReactHover.png'),
  Node: require('../images/Node.png'),
  NodeHover: require('../images/NodeHover.png'),
  SQL: require('../images/SQL.png'),
  SQLHover: require('../images/SQLHover.png'),
  HTML: require('../images/HTML.png'),
  HTMLHover: require('../images/HTMLHover.png'),
  CSS: require('../images/CSS.png'),
  CSSHover: require('../images/CSSHover.png'),
  Git: require('../images/Git.png'),
  GitHover: require('../images/GitHover.png')
};

export const TechnicalSkills = () => {
  useEffect(() => {
    // Preload images
    Object.values(imageUrls).forEach(url => {
      const img = new Image();
      img.src = url;
    });
  }, []);

  return (
    <div id='technicalSkills'>
      <div className='leftcolumn'>
        <h2>Technical Skills</h2>
        <p>As a web developer, I utilize a variety of tools and technologies to create dynamic and responsive websites. At the core of my development process are JavaScript, React, Node, SQL, HTML, CSS, and Git.</p>
        <p>By leveraging these tools and technologies, I can create high-quality websites and web applications that meet the needs of my clients and users.</p>
      </div>
      <div className='rightcolumn'>
        <div className='firstcolumn'>
          <SkillTile title='JavaScript' imageUrls={imageUrls} />
          <SkillTile title='React' imageUrls={imageUrls} />
          <SkillTile title='Node' imageUrls={imageUrls} />
        </div>
        <div className='secondcolumn'>
          <SkillTile title='SQL' imageUrls={imageUrls} />
          <SkillTile title='HTML' imageUrls={imageUrls} />
          <SkillTile title='CSS' imageUrls={imageUrls} />
          <SkillTile title='Git' imageUrls={imageUrls} />
        </div>
      </div>
    </div>
  )
};

export default TechnicalSkills;