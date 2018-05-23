import { v4 } from 'node-uuid';

import * as api from '../api';
import { getIsFetching } from '../reducers';

export const addContact = (name, phone) => ({
    type: 'ADD_CONTACT',
    contact: {
        name,
        id: v4(),
        phone,
        isFavorite: false
    }
});

export const toggleFavorite = (id) => ({
    type: 'TOGGLE_FAVORITE',
    id
});

export const fetchContacts = (filter) => (dispatch, getState) => {
    if (getIsFetching(getState(), filter))
        return Promise.resolve();

    dispatch({
        type: 'FETCH_CONTACTS_BEGIN',
        filter 
    });

    return api.fetchContacts(filter)
        .then( 
            response => dispatch({
                type: 'FETCH_CONTACTS_SUCCESS',
                filter,
                response
            }),
            error => dispatch({
                type: 'FETCH_CONTACTS_FAILURE',
                filter,
                message: error.message
            })
        );    
};