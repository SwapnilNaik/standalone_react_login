
const customerReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_CUSTOMER':
          return state.concat([action.data]);
        case 'DELETE_CUSTOMER':
          return state.filter((customer)=>customer.id !== action.id);
        case 'EDIT_CUSTOMER':
            return state.map((customer)=>customer.id === action.id ? {...customer,editing:!customer.editing}:customer);
        case 'UPDATE':
            return state.map((customer)=>{
              if(customer.id === action.id) {
                return {
                   ...customer,
                   name:action.data.newName,
                   contactNo:action.data.newContactNo,
                   email:action.data.newEmail,
                   occupation:action.data.newOccupation,
                   editing: !customer.editing
                }
              } else return customer;
            })
        default:
          return state;
      }
}
export default customerReducer;