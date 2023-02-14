import React from 'react'
import Navbar from './layouts/Navbar'
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Service from './Pages/Service'
import Student from './Pages/Student'
import User from './Pages/User'
import Notfound from './Pages/Notfound'
import Notestate from '../contexapi/Notes/Notestate'

const Paramsroute = () => {
  return (
    <div>
      <Notestate>
        <Router>
        <Navbar/>
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/about' element={<About/>}/>
            <Route exact path='/service' element={<Service/>}/>
            <Route exact path='/student' element={<Student/>}/>
            <Route exact path='/user/:name/:id' element={<User/>}/>
            <Route path='*' element={<Notfound/>}/>
        </Routes>
        </Router>
        </Notestate>
    </div>
  )
}

export default Paramsroute
