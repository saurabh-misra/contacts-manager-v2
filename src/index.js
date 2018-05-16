import { Provider } from 'react-redux';
import { createStore } from 'redux';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reducer from './reducers';

import './index.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={createStore(reducer)}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
