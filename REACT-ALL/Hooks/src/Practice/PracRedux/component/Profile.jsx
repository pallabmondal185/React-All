import React, { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

const Profile = () => {
  const {id}=useParams();
  const [count,setCount]=useState(0);

  const memoEg=useMemo(()=>{
    return count*count;
    console.log('memo--1');
  },[count])

  return (
    <>
      <h1>profile: {id}</h1>
      
      <h3>{memoEg}</h3>
      <button onClick={()=>setCount(count+1)}>click</button>
    </>
  )
}

export default Profile
