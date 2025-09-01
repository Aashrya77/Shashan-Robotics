import React from "react";
import "./Services.css";
const Services = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>
            We also give <br />
            you IT services
          </h1>
          <p>Learn more about our IT services that is led by youths</p>
          <div className="hero-buttons">
            <button className="btn join">Contact Us</button>
            <button className="btn explore">Learn More</button>
          </div>
        </div>

        {/* Placeholder instead of image */}
        <div className="hero-placeholder">Placeholder Image</div>
      </section>
      <section className="about">
        <div className="about-top">
          <div className="about-left">
            <p className="section-subtitle">Out services</p>
            <h2 className="section-title">Services</h2>
          </div>

          <p className="section-text">
            At TechSpire Robotics Community Club, we offer a range of services
            designed to foster innovation and collaboration in robotics and AI.
            Our workshops provide hands-on training in the latest technologies,
            while our mentorship programs connect members with industry experts.
            We also host hackathons and competitions to challenge your skills
            and creativity. Join us to explore, learn, and create in a vibrant
            community!
          </p>
        </div>

        <div className="about-right">
          <div className="card">
            <div className="icon">🤖</div>
            <p>Workshops</p>
          </div>
          <div className="card">
            <div className="icon">🧠</div>
            <p>Web Development</p>
          </div>
          <div className="card">
            <div className="icon">💻</div>
            <p>App Development</p>
          </div>
          <div className="card">
            <div className="icon">📅</div>
            <p>UI/UX Design</p>
          </div>
        </div>
      </section>
      <section className="community">
        <div className="community-content">
          <div className="community-titles">
            <p className="subtitle">Projects</p>
            <h2 className="title">
              We're making <br /> progress with each <br /> step we take and
              each <br /> contribution we make.
            </h2>
          </div>
          <div className="community-description">
            <p className="description">
              Be part of our dynamic community of innovators and creators.
              Together, we've made significant strides in robotics and
              technology, showcasing the exciting projects we've accomplished.
            </p>

            <div className="stats">
              <div className="stat">
                <h3>20+</h3>
                <p>Projects are done</p>
              </div>
              <div className="stat">
                <h3>50+</h3>
                <p>Workshops were completed.</p>
              </div>
            </div>
            <div className="buttons">
              <button className="btn learn">Contact Us</button>
            </div>
          </div>
        </div>
      </section>
      <section className="partnerships-wrapper">
        <div className="partnerships-container">
          <div className="partnerships-content">
            <div className="partnerships-text">
              <h2 className="partnerships-heading">Our major clients</h2>
              <p className="partnerships-description">
                Our clients are at the heart of everything we do. They inspire
                us to innovate and push boundaries, ensuring we deliver
                exceptional value and service.
              </p>
            </div>

            <div className="partnerships-logos">
              <div className="partnership-logo"></div>
              <div className="partnership-logo"></div>
              <div className="partnership-logo"></div>
              <div className="partnership-logo"></div>
              <div className="partnership-logo"></div>
              <div className="partnership-logo"></div>
              <div className="partnership-logo"></div>
              <div className="partnership-logo"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
