import React from 'react';
import setContext from './SetContext';


const SetState = ({children}) => {
    const state = {
        name: 'pallab mondal',
        age: 26,
        email: 'pallab@gmail.com',
        phone: 8670858747,
        city: 'kolkata',
    }
    return (
        <>
            <setContext.Provider value={state} >
                {children}
            </setContext.Provider>
        </>
    )
}

export default SetState;
