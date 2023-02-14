import React, { useEffect, useMemo, useState } from 'react';

//The useMemo is a hook used in the functional component of react that returns a memoized value.
//A memoized function remembers the results of output for a given set of inputs.
//The useMemo Hook only runs when one of its dependencies update.
//The useMemo hook is used to improve performance in our React application.

//The useMemo and useCallback Hooks are similar. 
// The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.

function useMemoEg1() {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(0);

    function squre(num) {
        console.log('squre');
        return Math.pow(num, 2);
    }

    const sqNumber=useMemo(() => {
        console.log('useMemo');
        return (squre(number));
     },[number]);

    // const sqNumber=squre(number);

    // useEffect(() => {
    //     setSqNumber(squre(number));
    // },[number]);

    const handleChange = (e) => {
        setNumber(e.target.value);
    }

    const handleClick = () => {
        console.log('count');
        setCount(count + 1);
    }
    return (
        <>
            <center>
                <h1> useMemo Example:-</h1>
                <label htmlFor="nomber"> Enter The Number: </label>
                <input onChange={handleChange} type="number" name="" id="" /><br />
                <button onClick={handleClick}>count</button>
                <h3>count: {count}</h3>
                <h3>the squre is: {sqNumber}</h3>
            </center>
        </>
    )
}



export default useMemoEg1;
