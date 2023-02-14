import React, { createContext } from 'react'
import ChildA from './ChildA';

const FirstName = createContext();
const LastName = createContext();

function ContextApiEg() {
    return (
        <>
            <h1>Parent Component</h1>
            <FirstName.Provider value={'Pallab'}>
                <LastName.Provider value={'mondal'}>
                    <ChildA />
                </LastName.Provider>
            </FirstName.Provider>
        </>
    )
}

export default ContextApiEg;
export { FirstName,LastName };
