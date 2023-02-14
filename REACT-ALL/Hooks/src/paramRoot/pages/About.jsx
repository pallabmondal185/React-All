import React from 'react';
import { useParams } from 'react-router-dom';

function About() {
  const {name,age}=useParams();
  return (
    <>
        <h1>About page</h1>
        <h3>name is: {name}</h3>
        <h3>age is: {age}</h3>
    </>
  )
}

export default About
