import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Login from './containers/login'
import App from './App';
import { createStore } from 'redux';
import customerReducer from './reducers/customerReducer';
import {Provider} from 'react-redux';

const store = createStore(customerReducer);

ReactDOM.render( 
<Provider store = {store}>
  <BrowserRouter>
    <Switch>
      <Route path = "/login" component = {Login}/>
      <Route path = "/" component = {App}/>
    </Switch>
  </BrowserRouter>
  </Provider>, document.getElementById('root'));

serviceWorker.unregister();
