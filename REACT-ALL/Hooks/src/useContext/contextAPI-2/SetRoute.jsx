import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StateContext from './StateContext';
import Home from './Home';
import About from './About'
function SetRoute() {
  return (
    <>
      <StateContext>
        <Router>
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About/>}/>
          </Routes>
        </Router>
      </StateContext>
    </>
  )
}

export default SetRoute;
