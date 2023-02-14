import React, { useState } from 'react';

function PostDataEg1() {
    const [userId, setUserId] = useState();
    const [title, setTitle] = useState();
    const [body, setBody] = useState();


    const saveUser = () => {
    console.log({userId,title,body});
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({userId,title,body})
        }).then((res) => res.json())
        .then((result) => console.log(result));
    }
    return (
        <>
            <h1>Post API Example</h1>

            <label htmlFor="">Enter UserId:</label>
            <input type="text" onChange={(e)=> setUserId(e.target.value)} /><br /><br />

            <label htmlFor="">Enter Title: </label>
            <textarea type="text"  onChange={(e)=> setTitle(e.target.value)}/><br /><br />

            <label htmlFor="">Enter Body:</label>
            <textarea type="text"  onChange={(e)=> setBody(e.target.value)}/><br /><br />

            <button onClick={saveUser}>Post</button>

        </>
    )
}

export default PostDataEg1;
