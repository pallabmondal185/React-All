import React from 'react'
import{useContext} from 'react'
import NoteContex from '../../contexapi/Notes/Notecontex'


const Home = () => {
  const result=useContext(NoteContex)
  return (
    <div>
      <h1>home page</h1>
      <h1> {result.name}</h1>
      <h1> {result.email}</h1>
    </div>
  )
}

export default Home
