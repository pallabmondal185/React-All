import React, {useState} from 'react';
import MemoProps from './MemoProps';

function MemoEg(){
    const [count,setCount]=useState(0);
    let data='pallab';

    function handleCountClick(){
        setCount(count+1);
    }
    return(
        <>
            <h1>the count is: {count}</h1>
            <MemoProps data={data} />
            <button onClick={handleCountClick}>click here</button>
        </>
    )
}

export default MemoEg;