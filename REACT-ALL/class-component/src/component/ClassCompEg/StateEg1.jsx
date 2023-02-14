import React from 'react';

export default class StateEg1 extends React.Component{
    // state can be used within a constructor and without constructor.
    constructor(){
        super();
        this.state={ name:'pallab '};
        this.roll=45;
    }

    handleNameClick=()=>{
        this.setState( {name:'puskar'} );  
        alert('name is changed')
    }

    render(){
        return(
            <>
                <h1>my name is: {this.state.name} </h1>     
                <h1>my roll is: {this.roll}</h1>           
                <button onClick={this.handleNameClick}>click here</button>
            </>
        )
    }
}