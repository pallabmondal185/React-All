import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './component/core/home/Home';
import Service from './pages/service/Service';
import AboutUs from './pages/about/aboutUs/AboutUs';
import Testimonials from './pages/testimonials/Testimonials';
import Navbar from './component/common/Navbar';
import Footer from './component/common/Footer';
import Contact from './pages/contact/Contact';

function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/service' element={<Service/>} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/testimonials' element={<Testimonials />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
      
    </>
  );
}

export default App;
