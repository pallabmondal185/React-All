import React, { useReducer, useState } from 'react';

//The useReducer Hook is the better alternative to the useState hook.

//useReducer Hook is generally more preferred over the useState hook when
//1. when you have complex state-building logic.
//2. when the next state value depends upon its previous value.
//3. when the components are needed to be optimized.

//the useReducer hook uses the same concept as reducers in redux.

function UseReducerEg() {
    // const [count, setCount] = useState(0);

    const initialData = 0;
    const reducer = (state, action) => {
        // console.log(state,action);
        if (action.type === 'INCREMENT') {
            return state + 1;
        }
        if (action.type === 'DECREMENT') {
            return state - 1;
        }
    }
    const [state, dispatch] = useReducer(reducer, initialData);

    return (
        <>
            <center>
                {/* <h1>count: {count}</h1>
                <button onClick={() => setCount(count + 1)}>increase</button><br />
                <button onClick={() => setCount(count - 1)}>decrese</button> */}

                <h1>count: {state}</h1>
                <button onClick={() => dispatch({ type: 'INCREMENT' })}>increase</button><br />
                <button onClick={() => dispatch({ type: 'DECREMENT' })}>decrese</button>
            </center>
        </>
    )
}

export default UseReducerEg;
