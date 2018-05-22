const createList = (filter) => (state = [], action) => {
    if( action.filter !== filter )
        return state;

    switch(action.type){
        case 'RECEIVE_CONTACTS':
            return action.response.map( contact => contact.id );
        default:
            return state;
    }
};

export default createList;

export const getIds = (state) => state;