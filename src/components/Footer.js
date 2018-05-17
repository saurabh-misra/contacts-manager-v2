import React from 'react';

import FilterLink from './FilterLink';

import './Footer.css';

const Footer = ({ store }) => (
        <p id='Footer'>
            Show:
            {' '}
            <FilterLink
                filter='all'
            >
                All
            </FilterLink>
            {' | '}
            <FilterLink
                filter='favorites'
            >
                Favorites
            </FilterLink>
        </p>
);

export default Footer;