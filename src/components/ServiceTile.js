import React from 'react';
import './ServiceTile.css';

export const ServiceTile = ({ title, description }) => {
    return (
        <div className='serviceTile'>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
};

export default ServiceTile;
