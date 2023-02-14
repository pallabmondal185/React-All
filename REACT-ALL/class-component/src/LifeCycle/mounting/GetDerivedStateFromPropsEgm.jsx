import React, { Component } from 'react'

//The getDerivedStateFromProps() method is called right before rendering the element(s) in the DOM.
//It takes state as an argument, and returns an object with changes to the state.
export default class GetDerivedStateFromPropsEgm extends Component {
  constructor(props){
    super(props);
    this.state={color: 'red', fruit: 'mango'};
  }

  //getDerivedStateFromProps() must be static.
  static getDerivedStateFromProps(props,state){
    return {color: 'yellow', fruit: props.favfruit}
  }

  render() {
    return (
      <>
        <h1>getDerivedStateFromProps in mounting example</h1>
        <h3>my favorite color is: {this.state.color}</h3>
        <h3>my favorite fruit is: {this.state.fruit}</h3>
      </>
    )
  }
}
