import React, { useState } from 'react';

function ChangeObject() {
  
    const [user,setUser]=useState({
        name:'pallab',
        age:'45',
        qualification: 'B.tech',
        phone: 8670456925
    });

    const handleChange=()=>{
        setUser({
            ...user,
            name: 'ram',
            phone: 10070456925
        });
    }

  return (
    <>
      <h1>name is: {user.name}</h1>
      <h1>age is: {user.age}</h1>
      <h1>qualification is: {user.qualification}</h1>
      <h1>phone no is: {user.phone}</h1>

      <button onClick={handleChange}>change</button>
    </>
  )
}

export default ChangeObject;
