import React from 'react'
import {useParams} from 'react-router-dom'

const User = () => {
  const {name,id}=useParams()
  return (
    <div>
      <h1>user page {name}/ {id}</h1>
    </div>
  )
}

export default User
