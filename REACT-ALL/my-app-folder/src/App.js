import './App.css';
import BannerNav from './pages/BannerNav'
import AboutNav from './pages/AboutNav'
import MainNav from './pages/MainNav'
import FooterNav from './pages/FooterNav'


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './component/Home';

function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/banner' element={<BannerNav />}/>
        <Route path='/about' element={<AboutNav />}/>
        <Route path='/main' element={<MainNav/>}/>
        <Route path='/footer' element={<FooterNav />}/>

      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
