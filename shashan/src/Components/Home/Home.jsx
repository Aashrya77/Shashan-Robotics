import "./Home.css";
import events from "../../data";


const Home = () => {
     const events = [
    {
      id: 1,
      image: '[AI Summit Image]',
      title: 'AI & Robotics Summit',
      date: 'June 15, 2025',
      location: 'Kathmandu',
      description: 'Join us for the premier event in AI and robotics innovation this June.',
      tag: '20 seats',
      buttonText: 'Register Now',
      buttonColor: '#3182ce'
    },
    {
      id: 2,
      image: '[IoT Workshop Image]',
      title: 'IoT Workshop',
      date: 'June 22, 2025',
      location: 'TechSpire Lab',
      description: 'Learn how to automate your home with cutting-edge IoT technologies at this hands-on workshop.',
      tag: null,
      buttonText: 'Register Now',
      buttonColor: '#3182ce'
    },
    {
      id: 3,
      image: '[Robotics Competition Image]',
      title: 'National Robotics Comp.',
      date: 'July 5-8, 2025',
      location: 'Nepal',
      description: 'Compete with the best teams and showcase your skills in this exciting national event.',
      tag: null,
      buttonText: 'Register Team',
      buttonColor: '#3182ce'
    }
  ];
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>
            Innovate. <br />
            Build. Inspire
          </h1>
          <p>
            Join Nepal’s leading robotics community and shape the future of
            intelligent automation.
          </p>
          <div className="hero-buttons">
            <button className="btn join">Join Now</button>
            <button className="btn explore">Explore Events</button>
          </div>
        </div>

        {/* Placeholder instead of image */}
        <div className="hero-placeholder">Placeholder Image</div>

        <div className="trusted">
          <p>Companies that have Trusted us</p>
          <div className="logos">
            <span>Logo 1</span>
            <span>Logo 2</span>
            <span>Logo 3</span>
            <span>Logo 4</span>
          </div>
        </div>
      </section>
      <section className="about">
        <div className="about-top">
          <div className="about-left">
            <p className="section-subtitle">About Us</p>
            <h2 className="section-title">Who We Are</h2>
          </div>

          <p className="section-text">
            TechSpire Robotics Community Club is Nepal’s premier hub for
            robotics, AI, and emerging technologies. We bring together students,
            professionals, and tech enthusiasts to learn, build, and innovate
            collaboratively. Whether you’re just starting out or an expert in
            the field, TechSpire empowers you with hands-on experiences,
            mentorship, and industry exposure.
          </p>
        </div>

        <div className="about-right">
          <div className="card">
            <div className="icon">🤖</div>
            <p>Robotics</p>
          </div>
          <div className="card">
            <div className="icon">🧠</div>
            <p>Artificial Intelligence</p>
          </div>
          <div className="card">
            <div className="icon">💻</div>
            <p>Information Technology</p>
          </div>
          <div className="card">
            <div className="icon">📅</div>
            <p>Events</p>
          </div>
        </div>
      </section>
      <section className="community">
        <div className="community-content">
            <div className="community-titles">
                  <p className="subtitle">Community</p>
          <h2 className="title">
            Our Growing Robotics <br /> Community is Thriving
          </h2>
            </div>
        <div className="community-description">
             <p className="description">
            Join a vibrant community of innovators and creators. Together, we
            are shaping the future of robotics and technology.
          </p>

          <div className="stats">
            <div className="stat">
              <h3>500+</h3>
              <p>Active members driving innovation and collaboration.</p>
            </div>
            <div className="stat">
              <h3>50+</h3>
              <p>Workshops held to enhance skills and knowledge.</p>
            </div>
          </div>
           <div className="buttons">
            <button className="btn learn">Learn More</button>
            <button className="btn discover">Discover →</button>
          </div>
        </div>
         

         
        </div>

        {/* Placeholder Image */}
        <div className="community-image">Image Placeholder</div>
      </section>
            <div className="techspire-section">
        <h1 className="techspire-title">
          Why Join TechSpire Robotics<br />
          Community Club?
        </h1>
        
        <div className="cards-container">
          
          {/* First Card */}
          <div className="card">
            <div className="card-image">
              [Team Meeting Image]
            </div>
            <h3 className="card-title">
              Unlock your potential with<br />
              exclusive community benefits
            </h3>
            <p className="card-description">
              Become part of a vibrant community dedicated to<br />
              innovation and growth.
            </p>
          </div>

          {/* Second Card */}
          <div className="card">
            <div className="card-image">
              [Mentorship Image]
            </div>
            <h3 className="card-title">
              Expert Mentorship for Your<br />
              Robotics Journey
            </h3>
            <p className="card-description">
              Receive personalized guidance from experienced<br />
              engineers and researchers.
            </p>
          </div>

          {/* Third Card */}
          <div className="card">
            <div className="card-image">
              [Robot Projects Image]
            </div>
            <h3 className="card-title">
              Collaborate on Real-World<br />
              Projects
            </h3>
            <p className="card-description">
              Work on impactful projects that enhance your<br />
              portfolio and skills.
            </p>
          </div>

        </div>

        <button className="join-button">
          Join our Robotics Community
        </button>
      </div>
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
    </>
  );
};

export default Home;
