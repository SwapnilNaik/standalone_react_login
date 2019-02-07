import React, { Component } from 'react';
import { connect } from 'react-redux';


class EditComponent extends Component {
handleEdit = (e) => {
  e.preventDefault();
  const newName = this.getName.value;
  const newEmail = this.getEmail.value;
  const newContactNo = this.getContactNo.value;
  const newOccupation = this.getOccupation.value;
  const data = {
    newName,
    newEmail,
    newContactNo,
    newOccupation
  }
  this.props.dispatch({ type: 'UPDATE', id: this.props.customer.id, data: data })
}
render() {
return (
<div key={this.props.customer.id} className = "customer">
  <form className="form" onSubmit={this.handleEdit}> 
   <input required type="text" ref={(input)=>this.getName = input} 
     defaultValue={this.props.customer.name} placeholder="Enter  Name" /><br /><br />
   <input required type="number" ref={(input)=>this.getContactNo = input} 
    defaultValue={this.props.customer.contactNo} placeholder="Enter Contact No." /><br /><br />
   <input required type="email" ref={(input)=>this.getEmail = input}
    defaultValue={this.props.customer.email} placeholder="Enter email id" /><br /><br />
   <input required type="text" ref={(input)=>this.getOccupation = input} 
    defaultValue={this.props.customer.occupation} placeholder="Enter Occupation" /><br /><br />
    <button>Update</button>
  </form>
</div>
);
}
}
export default connect()(EditComponent);