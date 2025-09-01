import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="tech-about-wrapper">
      <div className="tech-about-container">
        <div className="tech-content-grid">
          {/* Left side - Text content */}
          <div className="tech-text-content">
            <p className="tech-section-label">About us</p>
            
            <h2 className="tech-main-heading">
              TechSpire Robotics<br />
              Community Club
            </h2>
            
            <div className="tech-description-text">
              <p className="tech-paragraph">
                TechSpire is Nepal's leading robotics community built to empower the 
                next generation of innovators. We bridge the gap between classroom 
                learning and real-world application through hands-on workshops, 
                project-based learning, and expert mentorship.
              </p>
              
              <p className="tech-paragraph">
                Since our inception, we've hosted national competitions, delivered AI 
                and IoT bootcamps, and helped members launch their careers in 
                robotics and automation. Our community thrives on collaboration, 
                experimentation, and a shared mission to push the boundaries of 
                what's possible.
              </p>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="tech-image-wrapper">
            <div className="tech-image-container">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="TechSpire Robotics team members working together"
                className="tech-hero-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;