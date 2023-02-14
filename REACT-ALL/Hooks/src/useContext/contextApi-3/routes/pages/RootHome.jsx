import React, { useContext } from 'react';
import setContext from '../../notes/SetContext';

const RootHome = () => {
  const data=useContext(setContext);
  return (
    <>
      <h1>Home Page:</h1>
      <pre>{JSON.stringify(data,undefined,2)}</pre>
    </>
  )
}

export default RootHome
