import React, {useState, useEffect } from 'react';

function useEffectEg2() {
    const [countTime,setCountTime]=useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCountTime(countTime + 1);
        }, 1000)
    },[]);
    //runs only on the first render.

    return (
        <>
            <h1> An Empty Array.</h1>
            <h1>count: {countTime}</h1>
        </>
    )
}

export default useEffectEg2
