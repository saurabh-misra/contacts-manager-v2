import { v4 } from 'node-uuid';

export const addContact = (name, phone) => ({
    type: 'ADD_CONTACT',
    contact: {
        name,
        id: v4(),
        phone,
        isFavorite: false
    }
});

export const setVisibilityFilter = (filter) => ({
        type: 'SET_VISIBILITY_FILTER',
        filter
});

export const toggleFavorite = (id) => ({
        type: 'TOGGLE_FAVORITE',
        id
});