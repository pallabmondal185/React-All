import React, { useEffect, useState } from 'react'

// useEffect Hook allows you to perform side effects of functional components like fetching data, directly updating the DOM and timers.

//useEffect Hook works as combined of componentDidMount, componentDidUpdate and componentWillUnmount of lifecycle method of class component.

//useEffect(<function>,<dependency>)
//dependency accept an array which accepts the side effect run.

function CountTime() {
    const [countTime,setCountTime]=useState(0);

   useEffect(()=>{
    // console.log('inside useEffect');
    setTimeout(()=>{
        setCountTime(countTime+1);
        changeTitle();
    },1000)
   });
  //  console.log('outside useEffect');

//useEffect runs on every render.
//when the count changes, a render happens which then trigers another effect

   const changeTitle=()=>{
    document.title = countTime<0?'whatsapp':`whatsapp(${countTime+1})`;
   }

  return (
    <>
      <h1>count: {countTime}</h1>
    </>
  )
} 

export default CountTime;
