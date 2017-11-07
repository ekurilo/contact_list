import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {applyMiddleware, createStore} from 'redux';
import {rootReducer} from './reducers/index';
import {Provider} from 'react-redux';
import {fetchAllContacts} from './actions/contacts';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger'


let store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunkMiddleware, logger)
  );

store.dispatch(fetchAllContacts());



ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
