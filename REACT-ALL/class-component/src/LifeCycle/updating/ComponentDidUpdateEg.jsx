import React, { Component } from 'react';

export default class ComponentDidUpdateEg extends Component {
    constructor(){
        super();
        this.state={
            color: 'red',
            data:'state not updated'
        }
    }

//The componentDidMount() method is called after the component is rendered.
    componentDidMount(){
        setTimeout(() => {
            this.setState({color: 'Yellow'});
        }, 2000);
    }

//The componentDidUpdate method is called after the component is updated in the DOM.
    componentDidUpdate(){
        setTimeout(() => {
            this.setState({data: 'State has been Updated'});
        }, 1000);
    }

  render() {
    return (
      <>
        <h1>componentDidUpdate Example:-</h1>
        <h3>My favorite color is: {this.state.color}</h3>
        <h4>{this.state.data}</h4>
      </>
    )
  }
}
