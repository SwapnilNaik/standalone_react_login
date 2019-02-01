import React, { Component } from 'react';
import Login from './containers/login';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from './components/home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path = "/" exact component ={Login}/>
          <Route path = "/login" component = {Login}/>
          <Route path = "/home" component = {Home}/>
        </Switch>
      </BrowserRouter>
      );
  }
}
export default App;