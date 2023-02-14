import React from 'react'
import NoteContex from './Notecontex'

const Notestate = ({children}) => {
    const state={
        name:"Ritam saha",
        email:"ritam@gmail.com",
        phone:"9969656895"
    }
  return (
    <NoteContex.Provider value={state}>
        {children}
    </NoteContex.Provider>
  )
}

export default Notestate
