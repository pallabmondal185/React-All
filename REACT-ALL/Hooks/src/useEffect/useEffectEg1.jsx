import React, { useEffect } from 'react'

//1. No Dependency Passed.
function useEffectEg1() {
    useEffect(()=>{
        //runs on every render.
    });

//2. An Empty Array.
    useEffect(()=>{
        //runs only on the first render.
    },[]);

//3. props or state value.
    useEffect(()=>{
        //Runs on the first render and any time any dependency value change.
    },[props,state]);

  return (
    <>
      
    </>
  )
}

export default useEffectEg1
