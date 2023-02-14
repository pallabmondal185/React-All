import React, { Component } from 'react'

export default class ComponentWillMount extends Component {
    constructor(){
        super();
        this.state = {color: 'Red', fruit: 'Mango'};
      }

    //his function is invoked right before the component is mounted on the DOM i.e. this function gets invoked once before the render() function is executed for the first time.
    componentWillMount(){
      setTimeout(()=>{
        this.setState({color: 'Yellow'})
      },2000);
      this.setState({fruit: 'Apple'})
    }
  render() {
    return (
      <>
      <h1>componentWillMount example:-</h1>
        <h3>My favorite color is: {this.state.color}</h3>
        <h3>My favorite fruit is: {this.state.fruit}</h3>
      </>
    )
  }
}
