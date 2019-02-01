import React from 'react';
import {Label,Classes,Button} from '@blueprintjs/core';


const Login = (props) => {
    return(
        <div className="App">
        <Label>
        Email
        <input className={Classes.INPUT} placeholder="Enter Email.." 
               onChange={props.emailHandleChange} value={props.email}/>
        </Label>
        <Label >{props.emailError}</Label>
        <Label>
        Password
        <input className={Classes.INPUT} placeholder="Enter Password.." 
               onChange={props.passwordHandleChange} value={props.password}/>
        </Label>
        <Label >{props.passwordError}</Label>
        <Button onClick={props.handleSubmit} className={Classes.ACTIVE} text="Submit"/>
    </div>
    );
}
export default Login