import React, { useReducer } from 'react';

function UseReducerEg2() {
    const reduce=(state,action)=>{
        switch(action.type){
            case 'INCREMENT': return state+2;
            case 'DECREMENT': return state-2;
            case 'MULTIPLICATION': return state*2;
            case 'DIVISION': return state/2;
            default:  throw new Error ();
        }
    }

    const [state,dispatch]=useReducer(reduce,2);
  return (
    <>
        <h1>count: {state}</h1>
        <button onClick={()=> dispatch({type: 'INCREMENT'})}>increment</button>
        <button onClick={()=> dispatch({type: 'DECREMENT'})}>decrement</button>
        <button onClick={()=> dispatch({type: 'MULTIPLICATION'})}>multiplication</button>
        <button onClick={()=> dispatch({type: 'DIVISION'})}>division</button>
    </>
  )
}

export default UseReducerEg2;
