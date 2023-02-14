import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Navbers from './Nav/Navbers'
import About from './Pages/About'
import Home from './Pages/Home'

const Routers = () => {
  return (
    <div>
      <Router>
       <Navbers/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about/:id' element={<About/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default Routers
