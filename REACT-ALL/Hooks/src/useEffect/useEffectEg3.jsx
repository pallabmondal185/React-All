import React,{useState,useEffect} from 'react';

function useEffectEg3() {

    const [countTime,setCountTime]=useState(0);
    const [data,setData]=useState(1);

//props or state value
    useEffect(() => {
        // console.log('rendering');
        setCountTime(countTime + 1);

    },[data]);
    //Runs on the first render and any time any dependency value change.

    const handleCountClick=()=>{
        setData(data*2);
    }

  return (
    <>
        <h1>props or state value</h1>
        <h3>count: {countTime}</h3>
        <h3>{data}</h3>
        <button onClick={handleCountClick}>count</button>
    </>
  )
}

export default useEffectEg3;
