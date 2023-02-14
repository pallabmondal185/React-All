import React, { Component } from 'react'
import Login from './Login';
import Logout from './Logout';

export default class ClassTernaryUser extends Component {
  render() {
    let istrue=true;
    return (
      <>
        {istrue ? <Login /> : <Logout />}
      </>
    )
  }
}
