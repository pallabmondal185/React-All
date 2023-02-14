import React, { useEffect, useState } from 'react'

const ArrayOfObjectEg = () => {
    const today = new Date();
    const [clock, setClock] = useState({
        hour: today.getHours(),
        minute: today.getMinutes(),
        second: today.getSeconds()
    });

    useEffect(() => {
        setTimeout(() => {
            setClock({
                hour: today.getHours(),
                minute: today.getMinutes(),
                second: today.getSeconds()
            })
        }, 1000);
    })
    return (
        <>
            <h1>CLOCK</h1>
            <h3>Time: {clock.hour} : {clock.minute} : {clock.second}</h3>

        </>
    )
}

export default ArrayOfObjectEg
