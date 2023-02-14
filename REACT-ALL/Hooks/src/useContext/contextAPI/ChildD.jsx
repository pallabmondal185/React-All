import React, { useContext } from 'react';
import { FirstName, LastName } from './ContextApiEg';

function ChildD() {
    const fname = useContext(FirstName);
    const lname = useContext(LastName);
    return (
        <>
            <h1>Child-D</h1>
            <h3>welcome : {fname} {lname}</h3>
        </>
    )
}

export default ChildD
