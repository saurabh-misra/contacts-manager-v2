const byId = (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_CONTACTS_SUCCESS':
        case 'ADD_CONTACT_SUCCESS':
        case 'TOGGLE_FAVORITE_SUCCESS':
            return {
                ...state,
                ...action.response.entities.contacts
            };
        default:
            return state;
    }
};

export default byId;

export const getContact = ( state, id ) => state[id];