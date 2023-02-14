import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import AllUser from '../pages/AllUser';
import AddUser from '../pages/AddUser';
import EditPage from '../pages/EditPage';

function RouteAxiosProject() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/alluser' element={<AllUser/>}/>
          <Route path='/adduser' element={<AddUser/>}/>
          <Route path='all' element={<AllUser/>}/>
          <Route path='/edit/:id' element={<EditPage/>}/>
          <Route/>
        </Routes>
      </Router>
    </>
  )
}

export default RouteAxiosProject;
