import React, { Component } from 'react'

export default class StateConstructorEg extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'ram',
            phone: 4561237890,
            user: this.props.user
        }
    }
  render() {
    return (
      <>
        <h1>name is: {this.state.name}</h1>
        <h1>phone number is: {this.state.phone}</h1>
        <h1>user is: {this.state.user}</h1>
      </>
    )
  }
}
