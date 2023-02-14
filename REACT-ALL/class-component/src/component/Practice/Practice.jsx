import React, { Component } from 'react';

class Practice extends Component {

    constructor() {
        super();
        // this.state = { count: 0 };
    }

    state={count: 0}

    render() {
        return (
            <>
                <h1>practice session</h1>
                <h1>count: {this.state.count}</h1>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>inc</button>
                <button onClick={() => this.setState({ count: this.state.count - 1 })}>dec</button>
            </>
        )
    }
}

export default Practice;