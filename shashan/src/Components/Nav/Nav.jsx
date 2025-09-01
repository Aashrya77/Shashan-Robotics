import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/Shashan_Logo.png" alt="logo" />
        <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/events">Events</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Achievements</a></li>
        <li className="dropdown">
          <a href="#">Membership ▾</a>
          <ul className="dropdown-menu">
            <li><a href="#">Option 1</a></li>
            <li><a href="#">Option 2</a></li>
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
