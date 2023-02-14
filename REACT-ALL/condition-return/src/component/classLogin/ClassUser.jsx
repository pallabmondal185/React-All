import React, { Component } from 'react'
import Logout from './Logout';
import Login from './Login';

export default class ClassUser extends Component {
  render() {
    const isequal=true;
    if(isequal){
        return(
            <>
                <Login />
            </>
        )
    }
        else{
            return(
                <Logout />
            )
    }
  }
}
