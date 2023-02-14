import React from 'react';
// HOC is a function that takes a component and returns a new component. 

import CounterEg from './CounterEg';

export default function Hoc1() {
    return (
        <>
            
            <h1 style={{ backgroundColor: 'red', width: '25%' }}><CounterEg /></h1>
            <h1 style={{ backgroundColor: 'green', width: '25%' }}><CounterEg /></h1>

            <h1 style={{ backgroundColor: 'blue', width: '25%' }}> <CounterEg >pallab</CounterEg> </h1>
        </>
    )
}
