import React, { Component } from 'react';
import {connect} from 'react-redux';

class Customer extends Component {
  render() {
  return (
    <div className = "customer">
      <h2 className = "customer_fields">{this.props.customer.name}</h2>
      <h2 className = "customer_fields">{this.props.customer.contactNo}</h2>
      <h2 className = "customer_fields">{this.props.customer.email}</h2>
      <h2 className = "customer_fields">{this.props.customer.occupation}</h2>
      <div className="control-buttons">
       <button className = "edit" onClick={()=>this.props.dispatch({type:'EDIT_CUSTOMER',id:this.props.customer.id})}>Edit</button>
       <button className = "delete" onClick={()=>this.props.dispatch({type:'DELETE_CUSTOMER',id:this.props.customer.id})}>Delete</button>
      </div>
     
    </div>
  );
 }
}
export default connect()(Customer);