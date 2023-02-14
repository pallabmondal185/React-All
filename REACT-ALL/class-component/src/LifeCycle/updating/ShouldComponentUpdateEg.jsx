import React, { Component } from 'react'

export default class ShouldComponentUpdateEg extends Component {
    constructor(){
        super();
        this.state={color: 'red'}
    }

    //In the shouldComponentUpdate() method you can return a Boolean value that specifies whether React should continue with the rendering or not.
    shouldComponentUpdate(){
        return false;     //false: Stop the component from rendering at any update:
        // return true;   //true: don't Stop the component from rendering at any update:
    }
  render() {
    return (
      <>
        <h1>ShouldComponentUpdate Example</h1>
        <h3>my favorite color is: {this.state.color}</h3>
        <button onClick={()=>{this.setState({color: 'yellow'})}}>change</button>
      </>
    )
  }
}
