import React, {Component} from 'react';
import {Route,Switch} from 'react-router-dom';
import Home from '../components/home';



class PostAuthLayout extends Component {
    render(){
        return(
            <div>
                Hello This is global<br/>
            <Switch>
                <Route path ="/home" component= {Home} />
            </Switch>
            </div>
            
        );
    }
}
export default PostAuthLayout;