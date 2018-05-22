const byId = (state = {}, action) => {
    switch (action.type) {
        case 'RECEIVE_CONTACTS':
            const nextState = { ...state };
            action.response.forEach(contact => {
                nextState[contact.id] = contact;
            });
            return nextState;
        default:
            return state;
    }
};

export default byId;

export const getContact = ( state, id ) => state[id];