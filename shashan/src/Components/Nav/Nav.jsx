import React, { use } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/"><img src="/Shashan_Logo.png" alt="logo" /></Link>
        
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
        <button className="btn explore" onClick={() => navigate('/contact')}>Join</button>
        <button className="btn  join">Explore</button>
      </div>
    </nav>
  );
};

export default Navbar;
