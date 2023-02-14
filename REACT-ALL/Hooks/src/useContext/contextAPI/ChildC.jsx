import React from 'react';
import ChildD from './ChildD';
import { FirstName, LastName } from './ContextApiEg'


function ChildC() {
    return (
        <>
            <h1>Child-C</h1>
            <FirstName.Consumer>{(fname) => {
                return (
                    <LastName.Consumer>{(lname) => {
                        return (
                            <h4>My First Name is: {fname} {lname}</h4>
                        );
                    }}
                    </LastName.Consumer>
                );
            }}
            </FirstName.Consumer>

            <ChildD/>
        </>
    )
}

export default ChildC
