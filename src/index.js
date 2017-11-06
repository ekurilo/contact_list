import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import {rootReducer} from './reducers/index';
import {Provider} from 'react-redux';
import {addContact, fetchingAll} from './actions/contacts';

let store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

store.subscribe(() => console.log(store.getState()));

store.dispatch(fetchingAll);
store.dispatch(fetchingAll);
store.dispatch(addContact);


ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
