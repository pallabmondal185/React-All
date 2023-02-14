import React from 'react';

// props stands for properties
// Props are arguments passed into React components.
// React Props are like function arguments in JavaScript and attributes in HTML

// Props are also used to pass data from one component to another, as parameters.

export default function PropsEg(props) {
  // The component receives the argument as a props object:

    const {name, roll}=props;
  return (
    <>
      <h1>my name is: {props.name}</h1>
      <h2>my roll is: {props.roll}</h2>
      <h3>usinf destructuring:- name: {name} and roll:{roll} </h3>
    </>
  )
}
