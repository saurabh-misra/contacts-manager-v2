const contact = (state, action) => {
    switch (action.type) {
        case 'ADD_CONTACT':
            return action.contact;
        case 'TOGGLE_FAVORITE':
            if (state.id !== action.id)
                return state;

            return {
                ...state,
                isFavorite: !state.isFavorite
            }
        default:
            return state;
    }
};

export default contact;