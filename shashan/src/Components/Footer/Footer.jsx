import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
        <div>
        {/* Testimonial Section */}
        <div className="testimonial-section">
          <div className="stars">
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
          </div>
          
          <p className="testimonial-quote">
            "Got my dream AI job through this community."
          </p>
          
          <div className="testimonial-author">
            <div className="author-avatar">
              [Avatar]
            </div>
            <div className="author-info">
              <p className="author-name">Anita Karki</p>
              <p className="author-title">CloudFactory</p>
            </div>
          </div>
        </div>

        {/* Main Footer */}
        <div className="main-footer">
          <div className="footer-content">
            <div className="footer-left">
              <p className="footer-about">About Us</p>
              <h2 className="footer-title">
                TechSpire Robotics<br />
                Community Club
              </h2>
              
            </div>
            <div className="footer-right">
              <p className="footer-description">
                Where passion meets innovation in the world of robotics. Join a<br />
                vibrant community dedicated to exploring the future of<br />
                technology.
              </p>
              <div className="footer-buttons">
                <button className="btn join footer-button ">
                  Join Our Community
                </button>
                <button className="footer-button events-button">
                  Explore Upcoming Events
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="bottom-footer">
          <div className="bottom-footer-content">
            <img src="/logo.png" alt="" />
            <nav className="footer-nav">
              <a href="#home">Home Page</a>
              <a href="#about">About Us</a>
              <a href="#events">Our Events</a>
              <a href="#join">Join Us</a>
              <a href="#contact">Contact Us</a>
            </nav>
            
            <div className="footer-legal">
              <div className="legal-left"><a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#cookies">Cookies Settings</a></div>
              
              <span className="copyright">© 2025 Alphabiotics. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Footer