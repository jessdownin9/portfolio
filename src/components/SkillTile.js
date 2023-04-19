import React, { useState } from 'react';
import './SkillTile.css';

export const SkillTile = ({ title, imageUrls }) => {
  const [hover, setHover] = useState(false);

  return (
    <div className='skilltile' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div className='iconandtitle'>
        <img alt={`${title} icon`} src={hover ? imageUrls[`${title}Hover`] : imageUrls[title]} />
        <h3>{title}</h3>
      </div>
    </div>
  )
};

export default SkillTile;
