import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RootHome from '../pages/RootHome';
import RootAbout from '../pages/RootAbout';
import RootService from '../pages/RootService'
import RootContact from '../pages/RootContact'
import RootNotFound from '../pages/RootNotFount'
import RootNavber from './RootNavber';
import SetState from '../../notes/SetState'

const ParamRoot = () => {
  return (
    <>
      <SetState>
        <Router>
          <RootNavber />
          <Routes>
            <Route path='/' element={<RootHome />} />
            <Route path='/about' element={<RootAbout />} />
            <Route path='/service' element={<RootService />} />
            <Route path='/contact' element={<RootContact />} />
            <Route path='*' element={<RootNotFound />} />
          </Routes>
        </Router>
      </SetState>
    </>
  )
}

export default ParamRoot
