import { combineReducers } from "redux";

const createList = (filter) => {
    const ids = (state = [], action) => {
        if( action.filter !== filter )
            return state;

        switch(action.type){
            case 'FETCH_CONTACTS_SUCCESS':
                return action.response.map( contact => contact.id );
            default:
                return state;
        }
    };

    const isFetching = (state = false, action) => {
        if( action.filter !== filter )
            return state;

        switch(action.type){
            case 'FETCH_CONTACTS_BEGIN':
                return true;
            case 'FETCH_CONTACTS_SUCCESS':
            case 'FETCH_CONTACTS_FAILURE':
                return false;
            default:
                return state;
        }
    };

    const errorMessage = (state = null, action) => {
        if( action.filter !== filter )
            return state;

        switch(action.type){
            case 'FETCH_CONTACTS_FAILURE':
                return action.message;
            default:
                return state;
        }
    };

    return combineReducers({
        ids,
        isFetching,
        errorMessage
    });
};

export default createList;

export const getIds = (state) => state.ids;

export const getIsFetching = (state) => state.isFetching;

export const getErrorMessage = (state) => state.errorMessage;