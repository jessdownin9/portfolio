import React, { useState } from 'react';
import './AddressTag.css';

const icons = {
    gmail: require('../images/gmail.png'),
    gmailHover: require('../images/gmailHoverPurple.png'),
    location: require('../images/location.png'),
    locationHover: require('../images/locationHover.png'),
    phone: require('../images/phone.png'),
    phoneHover: require('../images/phoneHover.png')
  };

export const AddressTag = ({ imgUrl, description, info}) => {
    const [hover, setHover] = useState(false);

    return (
        <div className='addressTag' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <div className='imgcontainer'>
                <img 
                    alt={`${imgUrl} icon`} 
                    src={hover ? icons[`${imgUrl}Hover`] : icons[imgUrl]} 
                />
            </div>
            <div>
                <h4>{description}</h4>
                <h5>{info}</h5>
            </div>
        </div>
    )
};

export default AddressTag;
