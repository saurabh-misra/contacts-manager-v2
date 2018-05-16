import { Provider } from 'react-redux';
import { createStore } from 'redux';
import throttle from 'lodash/throttle';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reducer from './reducers';
import { loadState, saveState } from './helpers/localStorage';

import './index.css';

import registerServiceWorker from './registerServiceWorker';

const persistedState = loadState();
const store = createStore(reducer, persistedState);

store.subscribe(
    throttle(() => { 
        saveState({
            contacts: store.getState().contacts
        }); 
    }, 1000)
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
