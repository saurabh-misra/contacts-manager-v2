import { combineReducers } from "redux";

const createList = (filter) => {
    const ids = (state = [], action) => {
        if( action.filter !== filter )
            return state;

        switch(action.type){
            case 'RECEIVE_CONTACTS':
                return action.response.map( contact => contact.id );
            default:
                return state;
        }
    };

    const isFetching = (state = false, action) => {
        if( action.filter !== filter )
            return state;

        switch(action.type){
            case 'REQUEST_CONTACTS':
                return true;
            case 'RECEIVE_CONTACTS':
                return false;
            default:
                return state;
        }
    };

    return combineReducers({
        ids,
        isFetching
    });
};

export default createList;

export const getIds = (state) => state.ids;

export const getIsFetching = (state) => state.isFetching;