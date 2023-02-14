import React, { useMemo, useState } from 'react'

function UseMemoEg2() {
    const [count, setCount] = useState(0);
    const [item, setItem] = useState(1);

    // const myFunc=()=>{
    //     console.log('rendering');
    //     return count*10;
    // }

    const myFunc=useMemo(()=>{
        console.log('useMemo');
        return count*10
    },[count])

    return (
        <>
            <center>
                <h1>count: {count}</h1>
                <button onClick={() => setCount(count + 1)}>update count</button>
                <h2>Item: {item}</h2>
                <button onClick={() => setItem(item * 2)}>update count</button>

                {/* <h1>{myFunc()}</h1> */}
                <h1>{myFunc}</h1>
            </center>
        </>
    )
}

export default UseMemoEg2;
