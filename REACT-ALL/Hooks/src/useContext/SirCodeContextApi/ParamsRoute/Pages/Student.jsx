import React,{useContext} from 'react'
import NoteContex from '../../contexapi/Notes/Notecontex'


const Student = () => {
  const a=useContext(NoteContex)
  return (
    <div>
      <h1>student page</h1>
      <h1>{a.name}</h1>
    </div>
  )
}

export default Student
