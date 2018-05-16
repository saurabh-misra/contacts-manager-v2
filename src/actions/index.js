let nextTodoId = 0;
export const addContact = (name, phone) => {
    return {
        type: 'ADD_CONTACT',
        contact: {
            name,
            id: nextTodoId++,
            phone,
            isFavorite: false
        }
    };
};

export const setVisibilityFilter = (filter) => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    };
};

export const toggleFavorite = (id) => {
    return {
        type: 'TOGGLE_FAVORITE',
        id
    };
};