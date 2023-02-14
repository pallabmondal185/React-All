import React from 'react'

export default function Name() {

    const handleClick=()=>{
        alert('pallab');
    }

  return (
    <div>
      <label htmlFor="">enter name:</label>
      <input type="text" id='demno' />
      <button onClick={handleClick}>click here</button>
    </div>
  )
}
