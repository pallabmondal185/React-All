import './App.css';
import NavbarEg from './component/NavbarEg';
import Home from './component/pages/Home';
import About from './component/pages/About'
import Service from './component/pages/Service'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Login from './component/pages/Login';

function App() {
  return (
    <>
    <Router>
      <NavbarEg />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/service' element={<Service/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </Router>
      
      
    </>
  );
}

export default App;
