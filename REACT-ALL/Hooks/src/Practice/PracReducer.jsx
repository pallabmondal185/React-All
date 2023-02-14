import React from 'react';
import { useReducer } from 'react';

const PracReducer = () => {

    const reduce=(state,action)=>{
        
    }
    const [state,dispatch]=useReducer(reduce,0);
  return (
    <>
        <button onClick={()=>{dispatch({action:'INC'})}}>inc</button>
    </>
  )
}

export default PracReducer;
