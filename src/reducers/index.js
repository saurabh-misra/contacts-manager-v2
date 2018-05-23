import { combineReducers } from 'redux';
import byId, * as fromById from './byIds';
import createList, * as fromList from './createList';

const listByFilter = combineReducers({
    all: createList('all'),
    favorites: createList('favorites')
});

const contacts = combineReducers({
    byId,
    listByFilter
});

export default contacts;

export const getVisibleContacts = (state, filter) => {
    const ids = fromList.getIds(state.listByFilter[filter]);
    return ids.map( id => fromById.getContact(state.byId, id) );
}

export const getIsFetching = (state, filter) => fromList.getIsFetching(state.listByFilter[filter]);

export const getErrorMessage = (state, filter) => fromList.getErrorMessage(state.listByFilter[filter]);

