import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import reducer from './reducers';

const thunk = (store) => (next) => (action) => {
    typeof action === 'function'
        ? action(next)
        : next(action); 
};

const configureStore = () => {
    const middlewares = [thunk];

    if(process.env.NODE_ENV !== 'production')
        middlewares.push( createLogger() );

    const store = createStore(reducer, applyMiddleware(...middlewares));

    return store;
};

export default configureStore;