import React from 'react';

import FilterLink from './FilterLink';

import './Footer.css';

const Footer = ({ store }) => (
        <p id='Footer'>
            Show:
            {' '}
            <FilterLink
                filter='SHOW_ALL'
            >
                All
            </FilterLink>
            {' | '}
            <FilterLink
                filter='SHOW_FAVORITES'
            >
                Favorites
            </FilterLink>
        </p>
);

export default Footer;