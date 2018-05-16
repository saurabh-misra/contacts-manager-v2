import contacts from './contacts';
import visibilityFilter from './visibilityFilter';

import { combineReducers } from 'redux';

const reducer = combineReducers({
    contacts,
    visibilityFilter
});

export default reducer;