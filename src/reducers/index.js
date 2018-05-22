import { combineReducers } from 'redux';
import byId, * as fromById from './byIds';
import createList, * as fromList from './createList';

const idsByFilter = combineReducers({
    all: createList('all'),
    favorites: createList('favorites')
});

const contacts = combineReducers({
    byId,
    idsByFilter
});

export default contacts;

export const getVisibleContacts = (state, filter) => fromList.getIds(state.idsByFilter[filter]).map( id => fromById.getContact(state.byId, id) );

