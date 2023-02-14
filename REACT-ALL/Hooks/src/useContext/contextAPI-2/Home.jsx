import React, { useContext } from 'react';
import setContext from './SetContext';

function Home() {
  const user=useContext(setContext)
  return (
    <>
    <h1>home</h1>
      {user.name}
    </>
  )
}

export default Home
