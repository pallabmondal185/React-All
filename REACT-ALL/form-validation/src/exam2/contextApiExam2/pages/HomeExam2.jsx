import React, { useContext } from 'react';
import SetContext from '../state/SetContext';

function HomeExam2() {
    const user=useContext(SetContext)
  return (
    <>
     <h1>Home Page</h1> 
     <h5>email: </h5>{user.email}
    </>
  )
}

export default HomeExam2
