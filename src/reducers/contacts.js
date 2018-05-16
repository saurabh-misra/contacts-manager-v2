import contact from './contact';

const contacts = (state = [], action) => {
    switch (action.type) {
        case 'ADD_CONTACT':
            return [
                ...state,
                contact(null, action)
            ];
        case 'TOGGLE_FAVORITE':
            return state.map((c) => contact(c, action));
        default:
            return state;
    }
};

export default contacts;