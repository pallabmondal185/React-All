import React, { useContext } from 'react';
import SetContext from '../state/SetContext';

function ServiceExam2() {
    const user=useContext(SetContext)
  return (
    <>
      <h1>Service Page</h1>
      <h5>age: </h5>{user.age}
    </>
  )
}

export default ServiceExam2
