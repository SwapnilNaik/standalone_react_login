import React from "react";
import {Label} from '@blueprintjs/core';
import withAuth from "../containers/withAuth";


const Home = (props) => {
    return(
        <Label>Welcome</Label>
    );
}
export default withAuth(Home)