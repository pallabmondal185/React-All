import React, {Component} from 'react';

// state can be used in class component so it is used as stateful component
// but can't be used in functional component without the help of hooks so it is called stateless component
// lifecycle method can be used in class component.


// export default class ClassCompEg extends React.Component{
export default class ClassCompEg extends Component{
    constructor(){
        super();
    }

    render(){
        return (
            <>
                <h1>pallab</h1>
            </>
        )
    }
}