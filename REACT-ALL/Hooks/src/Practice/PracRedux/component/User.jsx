import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { changeName, changeAge, getData } from '../Server/reducer/UserSlice';

const User = () => {
    const { name, age, city, data } = useSelector(state => state.user);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getData());
    }, [])

    console.log(data);

    return (
        <>
            <h1>{name}</h1>
            {age}
            <div>{city}</div>
            <button onClick={() => dispatch(changeName())}>change Name</button>
            <button onClick={() => dispatch(changeAge(2000))}>change age</button>
            <button onClick={() => dispatch({ type: 'CHANGE-CITY', payload: 'delhi' })}>change city</button>

            {
                data.map((item) =>
                    <div key={item.id}>
                        <h3>{item.title}</h3><hr />
                    </div>
                )
            }

        </>
    )
}

export default User
