import React, { useContext } from 'react';
import setContext from '../../notes/SetContext';

const RootService = () => {
  const data=useContext(setContext);
  return (
    <>
      <h1>Service Page:</h1>
      <h5>city: {data.city}</h5>
    </>
  )
}

export default RootService
