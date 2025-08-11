import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Pages/Header';
import Home from './Pages/Home';
import Aboutus from './Pages/Aboutus';
import Contactus from './Pages/Contactus';
import Footer from './Pages/Footer';
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/contact" element={<Contactus />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
