import React, { Children } from 'react';
import SetContext from './SetContext'

function SetState({ children }) {
  const data = {
    name: 'pallab',
    email: 'pallab@gmail.com',
    age: 26
  }
  return (
    <>
      <SetContext.Provider value={data}>
        {children}
      </SetContext.Provider>
    </>
  )
}

export default SetState;
