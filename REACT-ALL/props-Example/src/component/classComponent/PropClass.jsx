import React, {Component} from 'react';

export default class PropClass extends Component{
    constructor(){
        super()
    }
    render(){
        const {name}= this.props;
        return(
            <>
                <h1>my name is: {this.props.name}</h1>
                <h1>my name  using destructuring: {this.props.name}</h1>
            </>
        )
    }
}