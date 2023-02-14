import React, { useState } from 'react'

const ChangeName = () => {
    const[name,setName]=useState('bishal');
    const changeName=()=>{
        if(name==='bishal'){
            setName('pallab');
        }
        else{
            setName('bishal');
        }
        
    }

    const [count,setCount]=useState(0);
    const countPlus=()=>{
        setCount(count+1)
    }
    const countMinus=()=>{
        setCount(count-1);
    }

  return (
    <>
      <h1>{name}</h1><br />
      <button onClick={changeName}>change name</button>

      <h1>count: {count}</h1>
      <button onClick={countPlus}>plus</button>
      <button onClick={countMinus}>minus</button>
    </>
  )
}

export default ChangeName
