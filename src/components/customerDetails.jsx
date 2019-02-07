import React, { Component } from 'react';
import { connect } from 'react-redux';
import Customer from '../customer';
import EditComponent from '../editComponent';


class CustomerDetails extends Component {
  render() {
    return (
    <div>
      <h1 className = "customer_heading">All Customers</h1>

        {this.props.customers.map((customer) => (
                    <div key={customer.id}>
                        {customer.editing ? <EditComponent customer={customer} key={customer.id} /> :
                            <Customer key={customer.id} customer={customer} />}
                    </div>
        ))}
    </div>
    );
   }
}


const mapStateToProps = (state) => {
    return {
        customers: state
    }
}
export default connect(mapStateToProps)(CustomerDetails);