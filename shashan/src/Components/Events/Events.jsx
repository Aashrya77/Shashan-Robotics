import React, { useState } from "react";
import events from "../../data";
import "./Events.css";
const Events = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    topic: '',
    message: '',
    acceptTerms: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Our Events</h1>
          <p>
            Join our cutting-edge workshops, competitions, and seminars designed
            to spark creativity, sharpen technical <br/> skills, and build your
            robotics journey.
          </p>
        </div>

        {/* Placeholder instead of image */}
        <div style={{marginTop: '70px'}} className="hero-placeholder">Placeholder Image</div>

      </section>
               <div className="events-container">
        <div className="filter-tabs">
          <button className="filter-tab active">View All</button>
          <button className="filter-tab">Workshops</button>
          <button className="filter-tab">Competitions</button>
          <button className="filter-tab">Summits</button>
          <button className="filter-tab">Webinars</button>
        </div>
        
        <div className="events-list">
          {events.map((event) => (
            <div key={event.id} className="event-card">
              <div className="event-image">
                {event.image}
              </div>
              
              <div className="event-content">
                <div className="event-header">
                  <h3 className="event-title">{event.title}</h3>
                  {event.tag && <span className="event-tag">{event.tag}</span>}
                </div>
                
                <div className="event-meta">
                  <span>{event.date}</span>
                  <span>• {event.location}</span>
                </div>
                
                <p className="event-description">
                  {event.description}
                </p>
              </div>
              
              <div className="event-actions">
                <button 
                  className="register-button"
                  style={{ backgroundColor: event.buttonColor }}
                >
                  {event.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
       <div className="contact-container">
      <div className="contact-content">
        {/* Left side - Contact Info */}
        <div className="contact-info">
          <p className="tagline">Tagline</p>
          <h1 className="contact-title">Contact us</h1>
          <p className="contact-description">
            Our friendly team would love to hear from you.
          </p>
          
          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon">✉</div>
              <a href="mailto:email@example.com" className="contact-link">
                email@example.com
              </a>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <a href="tel:+15550000000" className="contact-link">
                +1 (555) 000-0000
              </a>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <span className="contact-text">
                123 Sample St, Sydney NSW 2000 AU
              </span>
            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="contact-form">
          <div className="form-fields">
            {/* First Row */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName" className="form-label">
                  First name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="lastName" className="form-label">
                  Last name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>
            </div>

            {/* Second Row */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="example@gmail.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone" className="form-label">
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+977"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
            </div>

            {/* Topic Dropdown */}
            <div className="form-group">
              <label htmlFor="topic" className="form-label">
                Choose a topic
              </label>
              <div className="select-wrapper">
                <select
                  id="topic"
                  name="topic"
                  value={formData.topic}
                  onChange={handleInputChange}
                  className="form-select"
                  required
                >
                  <option value="">Select one...</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Support</option>
                  <option value="sales">Sales</option>
                  <option value="partnership">Partnership</option>
                </select>
                <div className="select-arrow">▼</div>
              </div>
            </div>

            {/* Message Textarea */}
            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Type your message..."
                rows="6"
                value={formData.message}
                onChange={handleInputChange}
                className="form-textarea"
                required
              />
            </div>

            {/* Terms Checkbox */}
            <div className="terms-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="acceptTerms"
                  checked={formData.acceptTerms}
                  onChange={handleInputChange}
                  className="checkbox-input"
                  required
                />
                I accept the <a href="#" className="terms-link">Terms</a>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              onClick={handleSubmit}
              disabled={!formData.acceptTerms}
              className={`submit-btn ${!formData.acceptTerms ? 'disabled' : ''}`}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Events;
