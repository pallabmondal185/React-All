import React, { Component } from 'react';

export default class StateEg2 extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  handleCountClick = () => {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return (
      <>
        <h1>count: {this.state.count}</h1>
        <button onClick={this.handleCountClick}>click here</button>
      </>
    )
  }
}
