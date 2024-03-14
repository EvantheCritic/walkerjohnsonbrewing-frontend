import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Beer from './pages/Beer';
import Food from './pages/Food';
import WriteReview from './pages/WriteReview';

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
          <Route path="/WriteReview" element=<WriteReview /> />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
