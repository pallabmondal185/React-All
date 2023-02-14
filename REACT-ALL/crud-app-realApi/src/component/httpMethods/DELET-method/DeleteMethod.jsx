import axios from 'axios';
import React, { useState } from 'react';

function DeleteMethod() {
    const [id,setId]=useState(0);

    const handleIdChange=(e)=>{
        setId(e.target.value);
    }

const handleDeleteClick=()=>{

    axios.delete(`http://127.0.0.1:3003/user/${id}`)
    .then((res)=>console.log(res))
    .catch((err)=> console.log(err.message))


//     fetch(`http://127.0.0.1:3003/user/${id}`,{
//     method: 'DELETE'
//     })
//     .then((response)=> response.json)
//     .then((result)=>console.log(result))


}

  return (
    <>
      <h1>Delete Method</h1>
      <label htmlFor="id">Ender the id to delete:</label>
      <input type="number" onChange={handleIdChange} name="" id="" /><br />
      <button onClick={handleDeleteClick}>Delete Data</button>
    </>
  )
}

export default DeleteMethod;
