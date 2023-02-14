import React, { useContext } from 'react';
import setContext from '../../notes/SetContext';

const RootAbout = () => {
  const data=useContext(setContext)
  return (
    <>
      <h1>About Page:</h1>
      <h5>name: {data.name}</h5>
      <h5>age: {data.age}</h5>

    </>
  )
}

export default RootAbout;
