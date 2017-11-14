import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {applyMiddleware, createStore} from 'redux';
import {rootReducer} from './reducers/index';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import {BrowserRouter} from 'react-router-dom';
import {MuiThemeProvider} from 'material-ui';


let store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunkMiddleware, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
