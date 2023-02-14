import React from 'react';
import setContext from './SetContext';

function StateContext({children}) {
    const data={
        name:'pallab',
        age: 26
    }
  return (
    <>
      <setContext.Provider value={data}>
        {children}
      </setContext.Provider>
    </>
  )
}

export default StateContext
