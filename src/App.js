import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Beer from './pages/Beer';
import Food from './pages/Food';
import Catering from './pages/Catering';
import CateringOption1 from './pages/CateringOption1';
import CateringOption2 from './pages/CateringOption2';
import CateringOption3 from './pages/CateringOption3';
import WriteReview from './pages/WriteReview';
import Jobs from './pages/Jobs';

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <nav className={`menu ${isMenuOpen ? 'open' : ''}`}>
          <a href="/">Home</a>
          <a href="/Beer">Beer Menu</a>
          <a href="/Food">Food Menu</a>
          <a href="/Catering">Catering</a>
          <a href="/Jobs">Jobs</a>
        </nav>
        <span>
          Walker Johnson Brewing
          1306 S Batesville Rd
          Greer, SC, 29650
        </span>
      </header>
      <div className="logo-container">
          <img src="/Logo.png" alt="Logo" width="700" height="auto"/>
      </div>
      
      <Router>
        <Routes>
          <Route path="/" element=<Home /> />
          <Route path="/Beer" element=<Beer /> />
          <Route path="/Food" element=<Food /> />
          <Route path="/Catering" element=<Catering /> />
          <Route path="/CateringOption1" element=<CateringOption1 /> />
          <Route path="/CateringOption2" element=<CateringOption2/> />
          <Route path="/CateringOption3" element=<CateringOption3/> />
          <Route path="/Jobs" element=<Jobs/> />
          <Route path="/WriteReview" element=<WriteReview /> />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
