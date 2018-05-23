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

const receiveContacts = (filter, response) => ({
    type: 'RECEIVE_CONTACTS',
    filter,
    response
});

export const fetchContacts = (filter) => (dispatch, getState) => {
    if (getIsFetching(getState(), filter))
        return Promise.resolve();

    dispatch(requestContacts(filter));

    return api.fetchContacts(filter)
        .then( response => dispatch(receiveContacts(filter, response)) );    
};

const requestContacts = (filter) => ({
    type: 'REQUEST_CONTACTS',
    filter 
});