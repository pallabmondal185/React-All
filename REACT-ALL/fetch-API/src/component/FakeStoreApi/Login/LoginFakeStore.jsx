import React from 'react'

const LoginFakeStore = () => {
    fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            username: "mor_2314",
            password: "83r5^_"
        })
    })
        .then(res => res.json())
        .then(json => console.log(json.token))
    return (
        <>
            <h1>Login Page</h1>
        </>
    )
}

export default LoginFakeStore
