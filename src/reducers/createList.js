import { combineReducers } from "redux";

const createList = (filter) => {
    const ids = (state = [], action) => {
        switch(action.type){
            case 'FETCH_CONTACTS_SUCCESS':
                if( action.filter !== filter )
                    return state;

                return action.response.result;
            case 'ADD_CONTACT_SUCCESS':
                if (filter === 'all')
                    return [
                        ...state,
                        action.response.result
                    ];

                return state;
            case 'TOGGLE_FAVORITE_SUCCESS':
                if(filter === 'favorites') {
                    if (action.response.entities.contacts[action.response.result].isFavorite)
                        return [
                            ...state,
                            action.response.result
                        ];    
                    else
                        return state.filter( id => id !== action.response.result)
                }

                return state;                    
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