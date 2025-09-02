import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    topic: '',
    bestDescribes: '',
    message: '',
    acceptTerms: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // You can add fetch/axios here to send data to your backend
  };

  return (
    <section className="ctc-main-section">
      <div className="ctc-container">
        <div className="ctc-content-wrapper">
          {/* Left Side - Contact Info */}
          <div className="ctc-info-panel">
            <div className="ctc-tagline">Tagline</div>
            <h2 className="ctc-main-title">Contact us</h2>
            <p className="ctc-description">
              Our friendly team would love to hear from you.
            </p>

            <div className="ctc-details-list">
              <div className="ctc-detail-item">
                <span className="ctc-detail-icon">✉️</span>
                <span className="ctc-detail-text" style={{textDecoration: 'underline'}}>email@example.com</span>
              </div>
              <div className="ctc-detail-item">
                <span className="ctc-detail-icon">📞</span>
                <span className="ctc-detail-text" style={{textDecoration: 'underline'}}>+1 (555) 000-0000</span>
              </div>
              <div className="ctc-detail-item">
                <span className="ctc-detail-icon">📍</span>
                <span className="ctc-detail-text">
                  123 Sample St, Sydney NSW 2000 AU
                </span>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="ctc-form-wrapper">
            <form className="ctc-form-container" onSubmit={handleSubmit}>
              <div className="ctc-form-row">
                <div className="ctc-form-group">
                  <label htmlFor="firstName">First name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="ctc-form-input"
                  />
                </div>
                <div className="ctc-form-group">
                  <label htmlFor="lastName">Last name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="ctc-form-input"
                  />
                </div>
              </div>

              <div className="ctc-form-row">
                <div className="ctc-form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="ctc-form-input"
                  />
                </div>
                <div className="ctc-form-group">
                  <label htmlFor="phone">Phone number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="ctc-form-input"
                  />
                </div>
              </div>

              <div className="ctc-form-group">
                <label htmlFor="topic">Choose a topic</label>
                <select
                  id="topic"
                  name="topic"
                  value={formData.topic}
                  onChange={handleInputChange}
                  className="ctc-form-select"
                >
                  <option value="">Select one...</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="sales">Sales</option>
                  <option value="partnership">Partnership</option>
                </select>
              </div>

              <div className="ctc-form-group">
                <label>Which best describes you?</label>
                <div className="ctc-checkbox-grid">
                  <div className="ctc-checkbox-row">
                    <label className="ctc-checkbox-label">
                      <input
                        type="radio"
                        name="bestDescribes"
                        value="first-choice"
                        checked={formData.bestDescribes === 'first-choice'}
                        onChange={handleInputChange}
                      />
                      <span className="ctc-checkbox-text">First choice</span>
                    </label>
                    <label className="ctc-checkbox-label">
                      <input
                        type="radio"
                        name="bestDescribes"
                        value="second-choice"
                        checked={formData.bestDescribes === 'second-choice'}
                        onChange={handleInputChange}
                      />
                      <span className="ctc-checkbox-text">Second choice</span>
                    </label>
                  </div>
                  <div className="ctc-checkbox-row">
                    <label className="ctc-checkbox-label">
                      <input
                        type="radio"
                        name="bestDescribes"
                        value="third-choice"
                        checked={formData.bestDescribes === 'third-choice'}
                        onChange={handleInputChange}
                      />
                      <span className="ctc-checkbox-text">Third choice</span>
                    </label>
                    <label className="ctc-checkbox-label">
                      <input
                        type="radio"
                        name="bestDescribes"
                        value="fourth-choice"
                        checked={formData.bestDescribes === 'fourth-choice'}
                        onChange={handleInputChange}
                      />
                      <span className="ctc-checkbox-text">Fourth choice</span>
                    </label>
                  </div>
                  <div className="ctc-checkbox-row">
                    <label className="ctc-checkbox-label">
                      <input
                        type="radio"
                        name="bestDescribes"
                        value="fifth-choice"
                        checked={formData.bestDescribes === 'fifth-choice'}
                        onChange={handleInputChange}
                      />
                      <span className="ctc-checkbox-text">Fifth choice</span>
                    </label>
                    <label className="ctc-checkbox-label">
                      <input
                        type="radio"
                        name="bestDescribes"
                        value="other"
                        checked={formData.bestDescribes === 'other'}
                        onChange={handleInputChange}
                      />
                      <span className="ctc-checkbox-text">Other</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="ctc-form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Type your message..."
                  value={formData.message}
                  onChange={handleInputChange}
                  className="ctc-form-textarea"
                ></textarea>
              </div>

              <div className="ctc-form-group">
                <label className="ctc-checkbox-label ctc-terms-label">
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleInputChange}
                  />
                  <span className="ctc-checkbox-text">
                    I accept the{' '}
                    <a href="#" className="ctc-terms-link">
                      Terms
                    </a>
                  </span>
                </label>
              </div>

              <button type="submit" className="ctc-submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
