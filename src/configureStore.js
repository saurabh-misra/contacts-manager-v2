import { createStore } from 'redux';

import reducer from './reducers';

const addLoggingToDispatch = (store) => {
    const rawDispatch = store.dispatch;
    return (action) => {
        console.group(action.type);
        console.log('%c prev state', 'color: gray',store.getState());
        console.log('%c action', 'color: cyan', action);
        const returnValue = rawDispatch(action);
        console.log('%c next state', 'color: green', store.getState());
        console.groupEnd(action.type);
        return returnValue;
    }
}

const configureStore = () => {
    const store = createStore(reducer);

    if(process.env.NODE_ENV !== 'production')
        store.dispatch = addLoggingToDispatch(store);

    return store;
};

export default configureStore;