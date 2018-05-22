import { v4 } from 'node-uuid';
import * as api from '../api';

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

export const fetchContacts = (filter) => 
    api.fetchContacts(filter)
        .then( response => receiveContacts(filter, response) );    