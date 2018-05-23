const byId = (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_CONTACTS_SUCCESS':
            const nextState = { ...state };
            action.response.forEach(contact => {
                nextState[contact.id] = contact;
            });
            return nextState;
        case 'ADD_CONTACT_SUCCESS':
        case 'TOGGLE_FAVORITE_SUCCESS':
            return {
                ...state,
                [action.response.id]: action.response
            };
        default:
            return state;
    }
};

export default byId;

export const getContact = ( state, id ) => state[id];