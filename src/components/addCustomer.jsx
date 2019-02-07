import React, { Component } from 'react';
import {connect} from 'react-redux';


class AddCustomer extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const name = this.getName.value;
        const contactNo =  this.getContactNo.value;
        const email = this.getEmail.value;
        const occupation = this.getOccupation.value;

        const data = {
          id: new Date(),
          name,
          contactNo,
          email,
          occupation,
          editing: false,
        }
        this.props.dispatch({
            type:'ADD_CUSTOMER',
            data});
          this.getName.value = '';
          this.getContactNo.value = '';
          this.getEmail.value = '';
          this.getOccupation.value = '';

      }
render() {
return (
<div className = "customer-container">
    <h1 className="customer_heading">Create Customer</h1>
    <form className = "form" onSubmit={this.handleSubmit}>
      <input required type="text" ref={(input)=>this.getName = input} placeholder="Enter  Name" /><br /><br />
      <input required type="tel" pattern="[0-9]{10}" ref={(input)=>this.getContactNo = input} placeholder="Enter Contact No" /><br /><br />
      <input required type="email" ref={(input)=>this.getEmail = input} placeholder="Enter email id" /><br /><br />
      <input required type="text" ref={(input)=>this.getOccupation = input} placeholder="Enter Occupation" /><br /><br />
    <button>Save</button>
    </form>
</div>
);
}
}
export default connect()(AddCustomer);