import axios from 'axios';
import React from 'react';

function PostMethodEg() {

  const postData = {
    name: 'pritam mondal',
    age: 21,
    email: 'pritam@gmail.com',
    phone: 1245784128
  }

  
  // const sendData = async() => {
  //   const response = await fetch('http://127.0.0.1:3003/user', {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-type': 'application/json'
  //     },
  //     body: JSON.stringify(postData)
  //   });
  //   const result=await response.json();
  //   console.log(result);
  // }
  

  const handlePostClick = () => {

    // sendData();


    axios.post('http://127.0.0.1:3003/user', postData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err.message))



  //   fetch('http://127.0.0.1:3003/user', {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-type': 'application/json'
  //     },
  //     body: JSON.stringify(postData)
  //   })
  //   .then((res) => res.json())
  //   .then((result) => console.log(result));


  }

  return (
    <>
      <h1>Post Method</h1>
      <button onClick={handlePostClick}>Post Data</button>
    </>
  )
}

export default PostMethodEg;
