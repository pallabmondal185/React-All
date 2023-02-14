import React, { useContext } from 'react';
import SetContext from '../state/SetContext';

function AboutExam2() {
    const user=useContext(SetContext);
  return (
    <>
      <h1>About Page</h1>
      <h5>name: </h5>{user.name}
    </>
  )
}

export default AboutExam2;
