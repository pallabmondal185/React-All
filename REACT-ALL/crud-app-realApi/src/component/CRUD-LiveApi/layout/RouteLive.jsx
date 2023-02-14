import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddDataLive from '../pages/AddDataLive';
import AllDataLive from '../pages/AllDataLive';
import HomeLive from '../pages/HomeLive';
import UpdateDataLive from '../pages/UpdateDataLive';
import NavBarLive from './NavBarLive';

const RouteLive = () => {
  return (
    <>
      <Router>
        <NavBarLive/>
        <Routes>
          <Route path='/' element={<HomeLive/>}/>
          <Route path='/add' element={<AddDataLive/>}/>
          <Route path='/all' element={<AllDataLive/>}/>
          <Route path='/edit/:id' element={<UpdateDataLive/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default RouteLive
