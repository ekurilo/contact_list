import React, {Component} from 'react';
import './App.css';
import Main from './containers/Main';
import {Route, Router} from 'react-router-dom';
import AddContact from './containers/AddContact';

export default class App extends Component {

  render() {
    return (
      <div className="App">
          <Route exact path="/" component={Main}/>
          <Route path="/add" component={AddContact}/>
      </div>
    );
  }
}

