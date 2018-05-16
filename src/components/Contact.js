import React from 'react';

import './Contact.css';

const Contact = ({
    name,
    phone,
    isFavorite,
    onFavoriteToggle
}) => (
    <li className='Contact'>
        <h4 className='name'>{name}</h4>
        <span className='phone'>{phone}</span>
        <span
            className={`star-icon-container ${isFavorite ? 'favorite' : 'hidden'}`}
            onClick={onFavoriteToggle}
        >
            <i className='fas fa-star'></i>
        </span>
        <span
            className={`star-icon-container ${isFavorite ? 'hidden' : ''}`}
            onClick={onFavoriteToggle}
        >
            <i className='far fa-star'></i>
        </span>
    </li>
);

export default Contact;