import React, { Component } from 'react';

export default class StateEg3 extends Component {
    // using state without constructor.
    state={
        name:'pallab', 
        age: '26',
        city: this.props.city
    };

  render() {
    return(
        <>
            <h3>my name is: <i> {this.state.name} </i></h3>
            <h3>my age is: <i>{this.state.age}</i></h3>
            <h3>my city is: <i>{this.state.city}</i></h3>
            <button onClick={()=>{this.setState({name:'ram', age: '37',city: 'delhi'})}}>click</button>
        </>
    )
  }
}
