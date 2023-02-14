import React from 'react'

const UserFakeStore = () => {
    // fetch('https://fakestoreapi.com/products/categories')
    // fetch('https://fakestoreapi.com/users?sort=desc')
    fetch('https://fakestoreapi.com/users?limit=4')
        .then(res => res.json())
        .then(json => console.log(json))
    return (
        <>
            <h1>User Fakestore</h1>
        </>
    )
}

export default UserFakeStore
