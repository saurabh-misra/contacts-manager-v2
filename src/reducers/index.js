import { combineReducers } from 'redux';

import contacts, * as fromContacts from './contacts';

const reducer = combineReducers({
    contacts
});

export default reducer;

export const getVisibleContacts = (state, filter) => {
    return fromContacts.getVisibleContacts(state.contacts, filter);
};