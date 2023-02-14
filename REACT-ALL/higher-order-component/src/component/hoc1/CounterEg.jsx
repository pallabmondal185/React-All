import React,{useState} from 'react';

export default function CounterEg() {
const [count,setCount]=useState(0);

  return (
    <>
      <>count: {count}</>
      <button onClick={()=> setCount(count+1)}>click here</button>
    </>
  )
}

  