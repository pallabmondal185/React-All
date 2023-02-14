import React, { Component } from 'react'

export default class ComponentWillUnmountEg extends Component {
  constructor(){
    super();
    this.state={show: true};
  }
  render() {

    let myHeader;
    if(this.state.show){
      myHeader=<Child/>
    }

    return (
      <>
        <h1>component will unmount</h1>
        {/* {this.state.show?<Child/>:null} */}
        {myHeader}
        <button onClick={()=>this.setState({show: !this.state.show})}>delete toggle</button>
      </>
    )
  }
}

class Child extends Component{

  //The componentWillUnmount method is called when the component is about to be removed from the DOM.
  componentWillUnmount(){
    alert('Child component will be Deleted');
    // console.log('Child component will be Deleted');
  }

  render(){
    return(
      <>
        <h3>child component</h3>
      </>
    )
  }
}
