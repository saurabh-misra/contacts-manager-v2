import * as api from '../api';
import { getIsFetching } from '../reducers';
import { normalize } from 'normalizr';
import * as schema from './schema';

export const addContact = (name, phone) => (dispatch) => {
    return api.addContact(name, phone).then( 
        (response) => {
            dispatch({
                type: 'ADD_CONTACT_SUCCESS',
                response: normalize(response, schema.contactSchema)
            });
        } 
    );
};

export const toggleFavorite = (id) => (dispatch) => {
    return api.toggleFavorite(id).then( 
        (response) => {
            dispatch({
                type: 'TOGGLE_FAVORITE_SUCCESS',
                response: normalize(response, schema.contactSchema)
            });
        } 
    );
};

export const fetchContacts = (filter) => (dispatch, getState) => {
    if (getIsFetching(getState(), filter))
        return Promise.resolve();

    dispatch({
        type: 'FETCH_CONTACTS_BEGIN',
        filter 
    });

    return api.fetchContacts(filter)
        .then( 
            response => {
                dispatch({
                    type: 'FETCH_CONTACTS_SUCCESS',
                    filter,
                    response: normalize(response, schema.contactListSchema)
                })
            },
            error => dispatch({
                type: 'FETCH_CONTACTS_FAILURE',
                filter,
                message: error.message
            })
        );    
};