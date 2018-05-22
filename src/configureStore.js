import { createStore } from 'redux';

import reducer from './reducers';

const loggerMiddleware = (store) => (next) => (action) => {
    console.group(action.type);
    console.log('%c prev state', 'color: gray',store.getState());
    console.log('%c action', 'color: cyan', action);
    const returnValue = next(action);
    console.log('%c next state', 'color: green', store.getState());
    console.groupEnd(action.type);
    return returnValue;
};

const promiseMiddleware = (store) => (next) => (action) => {
    if(typeof action.then === 'function')
        return action.then(next);

    return next(action);
};

const wrapDispatchWithMiddlewares = (store, middlewares) => {
    middlewares.reverse().forEach( middleware => {
        store.dispatch = middleware(store)(store.dispatch);
    });
};

const configureStore = () => {
    const store = createStore(reducer);
    const middlewares = [promiseMiddleware];

    if(process.env.NODE_ENV !== 'production')
        middlewares.push( loggerMiddleware );

    wrapDispatchWithMiddlewares(store, middlewares);

    return store;
};

export default configureStore;