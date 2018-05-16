import { Provider } from 'react-redux';
import { createStore } from 'redux';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reducer from './reducers';

import './index.css';

import registerServiceWorker from './registerServiceWorker';

const persistedState = {
    contacts: [
        {
            id: 0,
            name: 'Arpita Misra',
            phone: '9042160421',
            isFavorite: true
        }
    ]
}

ReactDOM.render(
    <Provider store={createStore(reducer, persistedState)}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
