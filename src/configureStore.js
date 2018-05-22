import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import promise from 'redux-promise'

import reducer from './reducers';

const configureStore = () => {
    const middlewares = [promise];

    if(process.env.NODE_ENV !== 'production')
        middlewares.push( createLogger() );

    const store = createStore(reducer, applyMiddleware(...middlewares));

    return store;
};

export default configureStore;