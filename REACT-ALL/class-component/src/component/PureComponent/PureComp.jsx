import React from 'react';

// React components can be defined by subclassing React.Component or React.PureComponent.
// React.PureComponent is similar to React.Component. The difference between them is that React.Component doesn’t implement shouldComponentUpdate(), but React.PureComponent implements it with a shallow prop and state comparison.

// Use shouldComponentUpdate() to let React know if a component’s output is not affected by the current change in state or props.

// if the previous value of states or props and the new value of states or props is the same then the component will not rerender itself in purecomponent.

// export default class PureComp extends React.Component{
export default class PureComp extends React.PureComponent{
    constructor(){
        super();
        this.state={ count: 0 };
    }

//shouldComponentUpdate() method returns a boolean value that specifies whether react shoule continue with the rendering or not
// the default value is true
//if it return false then it stop the component from rendering any update
       
    // shouldComponentUpdate(){
    //     return true;
    //     // return false;
    // }

    countPureClick=()=>{
        // this.setState( {count: this.state.count + 1} )
        this.setState( {count: 1} )
    }

    render(){
        console.log('rerendering');
        console.warn('warning')
        return(
            <>
                <h1>pure component count: {this.state.count} </h1>
                <button onClick={this.countPureClick}>click here</button>
            </>
        )
    }
}