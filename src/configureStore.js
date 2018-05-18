import { createStore } from 'redux';
import throttle from 'lodash/throttle';

import reducer from './reducers';
import { loadState, saveState } from './helpers/localStorage';

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
    const persistedState = loadState();
    const store = createStore(reducer, persistedState);

    if(process.env.NODE_ENV !== 'production')
        store.dispatch = addLoggingToDispatch(store);
    
    store.subscribe(
        throttle(() => { 
            saveState({
                contacts: store.getState().contacts
            }); 
        }, 1000)
    );

    return store;
};

export default configureStore;