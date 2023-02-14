import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './component/pages/Home';
import Navbar from './component/layout/Navbar';
import KnowMore from './component/pages/KnowMore';



function ParamRoot2() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/know/:id' element={<KnowMore/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default ParamRoot2;
