import React from 'react';
import { Provider } from 'react-redux';
import User from './component/User';
import { Store } from './Server/store/Store';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Profile from './component/Profile'
import Navbar from './component/Navbar';

const PracRedux = () => {
  return (
    <>
      <Provider store={Store}>
        <Router>
          <Navbar/>
          <Routes>            
              <Route path='/user/' element={ <User/>}/>
              <Route path='/profile/:id' element={ <Profile/>}/>
          </Routes>
        </Router>
      </Provider>
    </>
  )
}

export default PracRedux
