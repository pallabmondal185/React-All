import React, { Component } from 'react';

export default class GetDerivedStateFromPropsEgu extends Component {
  constructor(){
    super();
    this.state={color:'Red', fruit:'Mango'};
  }

  static getDerivedStateFromProps(){
    return {color:'Blue'}
  }

  render() {
    return (
      <>
        <h1>getDerivedStateFromProps in updating example</h1>
        <h3>my favorite color is: {this.state.color}</h3>
        <h3>my favorite fruit is: {this.state.fruit}</h3>
        <button onClick={()=>this.setState({color: 'Yellow', fruit: 'Apple'})}>change</button>

      </>
    )
  }
}
