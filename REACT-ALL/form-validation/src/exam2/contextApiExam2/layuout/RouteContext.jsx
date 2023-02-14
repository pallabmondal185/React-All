import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import AboutExam2 from '../pages/AboutExam2';
import HomeExam2 from '../pages/HomeExam2';
import ServiceExam2 from '../pages/ServiceExam2';
import SetState from '../state/SetState';
import NavbarExam2 from './NavbarExam2';

function RouteContext() {
  return (
    <>
    <SetState>
      <Router>
        <NavbarExam2/>
        <Routes>
          <Route path='/' element={<HomeExam2/>}/>
          <Route path='/about' element={<AboutExam2/>}/>
          <Route path='/service' element={<ServiceExam2/>}/>
        </Routes>
      </Router>
      </SetState>
    </>
  )
}

export default RouteContext;
