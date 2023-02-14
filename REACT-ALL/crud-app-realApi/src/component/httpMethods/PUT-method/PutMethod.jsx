import axios from 'axios';
import React, { useState } from 'react'

//PUT is a method of modifying resource where the client sends data that updates the entire resource . PATCH is a method of modifying resources where the client sends partial data that is to be updated without modifying the entire data.

function PutMethod() {
    const [id,setId]=useState();

    const postData = {
        name: 'Ram Roy',
        // age: 50,
        // email: 'Ram@gmail.com',
        // phone: 5554578412
      }

      const handleIdChange=(e)=>{
        setId(e.target.value);
      }

const handlePutClick=()=>{

    axios.put(`http://127.0.0.1:3003/user/${id}`,postData)
    .then((res)=> console.log(res.data))
    .catch((err)=> console.log(err.message))


    // fetch(`http://127.0.0.1:3003/user/${id}`,{
    //     method: 'PUT',
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(postData)
    // })


}

  return (
    <>
      <h1>Put Method</h1>
      <label htmlFor="id">Enter the id to be updated</label>
      <input type="number" onChange={handleIdChange} name="" id="" /><br />
      <button onClick={handlePutClick}>Update</button>
    </>
  )
}

export default PutMethod
