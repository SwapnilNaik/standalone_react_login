import React, { Component } from 'react';
import CustomerDetails from './components/customerDetails';
import AddCustomer from './components/addCustomer'


class App extends Component {
  render() {
    return (
        <div className = "App">
          <div className = "navbar">
            <h2 className = "center">Customer CRUD App</h2>
          </div>
          <AddCustomer/>
          <CustomerDetails/>
        </div>
      );
  }
}
export default App;