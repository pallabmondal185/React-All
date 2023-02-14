import React, {Component} from "react";

export default class PropsClassEg extends Component{
    constructor(){
        super();
    }
    
    render(){
        return(
            <>
                <h1>my name is from props: {this.props.name}</h1>
            </>
        )
    }
}