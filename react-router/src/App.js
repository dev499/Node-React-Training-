import React from 'react'
import Home from './Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Contact from './Contact';
import Help from './Help';
import About from './About';
import Navbar from './Navbar';

function App() {
  return (
    <>
    
    <Router>
    <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home />}></Route>
        <Route path='/contact' exact element={<Contact />} ></Route>
        <Route path='/help' exact element={<Help />} ></Route>
        <Route path='/about' exact element={<About />} ></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
