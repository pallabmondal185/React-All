import React, { Component } from 'react'

export default class StateEg extends Component {
    state={
        name:'pallab',
        phone: 8670858747,
        email:'pallab@gmail.com',
        city: this.props.city
    }
  render() {
    return (
      <>
        <h1>name is: {this.state.name}</h1>
        <h1>phone no is: {this.state.phone}</h1>
        <h1>the city is: {this.state.city}</h1>
      </>
    )
  }
}
