import React, { Component } from 'react'

export default class ComponentDidMountEg extends Component {
    constructor(props){
        super(props);
        this.state={color: 'Red', fruit: 'Mango'};
    }

    //this function is invoked right after the component is mounted on the DOM i.e. this function gets invoked once after the render() function is executed for the first time
    componentDidMount(){
        setTimeout(()=>{
            this.setState({color: 'Yellow'});
        },2000);
        this.setState({fruit: 'Apple'});
    }
    //favoriteColor is red. after 2 second it will be yellow.
    

  render() {
    return (
      <>
        <h1>componentDidMount Example:-</h1>
        <h3>My favorite color is: {this.state.color}</h3>
        <h3>My favorite fruit is: {this.state.fruit}</h3>
      </>
    )
  }
}
