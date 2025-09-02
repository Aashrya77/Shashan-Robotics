import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        
        <img src="/Shashan_Logo.png" alt="logo" />
        <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/achievements">Achievements</Link></li>
        <li className="dropdown">
          <Link to="/membership">Membership ▾</Link>
          <ul className="dropdown-menu">
            <li><Link to="#">Option 1</Link></li>
            <li><Link to="#">Option 2</Link></li>
          </ul>
        </li>
      </ul>
      </div>
      

      <div className="navbar-right">
        <button className="btn join">Join</button>
        <button className="btn explore">Explore</button>
      </div>
    </nav>
  );
};

export default Navbar;
