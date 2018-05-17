import contact from './contact';
import { combineReducers } from 'redux';

const byId = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_CONTACT':
        case 'TOGGLE_FAVORITE':
            const actionId = action.id || action.contact.id;
            return {
                ...state,
                [actionId]: contact(state[actionId], action)
            }
        default:
            return state;
    }
};

const allIds = (state = [], action) => {
    console.log(state);
    console.log(action);
    switch(action.type){
        case 'ADD_CONTACT':
            return [
                ...state,
                action.contact.id
            ];
        default:
            return state;
    };
};

const contacts = combineReducers({
    byId,
    allIds
});

export default contacts;

const getAllContacts = (state) => state.allIds.map( id => state.byId[id] );

export const getVisibleContacts = (state, filter) => {
    const allContacts = getAllContacts(state);
    if (filter === 'favorites')
        return allContacts.filter((contact) => contact.isFavorite);

    return allContacts;
};

