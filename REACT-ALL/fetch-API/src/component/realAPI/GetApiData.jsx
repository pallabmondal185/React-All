import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const GetApiData = () => {
    const [data,setData]=useState();

    useEffect(()=>{
        axios.get('https://backendapinodejsraju.herokuapp.com/api/allstudent')
        .then((res)=> setData(res.data));
    },[])
  return (
    <>
      {JSON.stringify(data,undefined,2)}
    </>
  )
}

export default GetApiData;
