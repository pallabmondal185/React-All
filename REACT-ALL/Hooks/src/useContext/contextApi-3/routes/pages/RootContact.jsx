import React, { useContext } from 'react';
import SetContext from '../../notes/SetContext';

const RootContact = () => {
  const data=useContext(SetContext);
  return (
    <>
      <h1>Contact Page:</h1>
      <h5>e-mail: {data.email}</h5>
      <h5>e-mail: {data.phone}</h5>
    </>
  )
}

export default RootContact;
