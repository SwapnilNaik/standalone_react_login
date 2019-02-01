import React, { Component } from 'react';
import './App.css';
import "@blueprintjs/core";
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import Login from './components/login';
import {StaticRouter,Route} from "react-router-dom";


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        fields: {email: "", password: ""},
        errors: {email: "", password: ""}
    }
    this.onHandleChangeEmail = this.onHandleChangeEmail.bind(this);
    this.onHandleChangePassword = this.onHandleChangePassword.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
    //this.validateForm = this.validateForm.bind(this);
 };

 onHandleChangeEmail(e){
  let fields = this.state.fields;
  fields["email"] = e.target.value;
  this.setState({
    fields
  });
 }

 onHandleChangePassword(e){
  let fields = this.state.fields;
  fields["password"] = e.target.value;
  this.setState({
    fields
  });
 }

 submituserRegistrationForm(e) {
  e.preventDefault();
  if (this.validateForm()) {
    const email = this.state.fields.email; 
    const password = this.state.fields.password;

    fetch('http://localhost:3000/authenticate',{
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({email, password})
      }).then((res)=> console.log(res.status))
      .then((data) => console.log(JSON.stringify(data)))
      .catch((err) => console.log(err))

      let fields = {};
      fields["email"] = "";
      fields["password"] = "";
      this.setState({fields:fields});
      //alert("Form submitted");
  }
}

validateForm() {

  let fields = this.state.fields;
  let errors = {};
  let formIsValid = true;
  
  //email required
  if (!fields["email"]) {
    formIsValid = false;
    errors["email"] = "*Please enter your email-ID.";
  }
  if (fields["email"]) {
    //regular expression for email validation
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    if (!pattern.test(fields["email"])) {
    formIsValid = false;
    errors["email"] = "*Please enter valid email-ID.";
    }
  }
 //password required
  if (!fields["password"]) {
    formIsValid = false;
    errors["password"] = "*Please enter your password.";
  }

  if (fields["password"]) {
    var passPattern = new RegExp(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/);
    if (!passPattern.test(fields["password"])) {
      formIsValid = false;
      errors["password"] = "*Please enter secure and strong password.";
    }
  }
  this.setState({errors});

  return formIsValid;
}
  render() {
    return (
      <Login 
        email = {this.state.fields["email"]} 
        password = {this.state.fields["password"]}
        handleSubmit = {this.submituserRegistrationForm} 
        emailHandleChange = {this.onHandleChangeEmail} 
        passwordHandleChange = {this.onHandleChangePassword}
        emailError = {this.state.errors["email"]}
        passwordError = {this.state.errors["password"]}
      />
    );
  }
}
export default App;
