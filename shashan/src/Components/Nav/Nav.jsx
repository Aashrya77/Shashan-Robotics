import React, { useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" onClick={closeMobileMenu}>
          <img src="/Shashan_Logo.png" alt="logo" />
        </Link>
        
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
        
        <ul className={`navbar-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <li><Link to="/" onClick={closeMobileMenu}>Home</Link></li>
          <li><Link to="/events" onClick={closeMobileMenu}>Events</Link></li>
          <li><Link to="/about" onClick={closeMobileMenu}>About Us</Link></li>
          <li><Link to="/services" onClick={closeMobileMenu}>Services</Link></li>
          <li><Link to="/achievements" onClick={closeMobileMenu}>Achievements</Link></li>
          <li className="dropdown">
            <Link to="/membership">Membership ▾</Link>
            <ul className="dropdown-menu">
              <li><Link to="#" onClick={closeMobileMenu}>Option 1</Link></li>
              <li><Link to="#" onClick={closeMobileMenu}>Option 2</Link></li>
            </ul>
          </li>
        </ul>
      </div>
      
      <div className={`navbar-right ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <button className="btn explore" onClick={() => { navigate('/contact'); closeMobileMenu(); }}>Join</button>
        <button className="btn join" onClick={closeMobileMenu}>Explore</button>
      </div>
    </nav>
  );
};

export default Navbar;
