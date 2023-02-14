import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import About from './component/About';
import Contact from './component/Contact';
import Nav from './component/Nav';
import Home from './component/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/about" element={<div>about page</div>} />
          <Route path="/contact" element={<div>contact page</div>}/> */}
        
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />}/>
          <Route path="/nav" element={<Nav />}/>

        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
