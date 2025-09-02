import React from 'react';
import './Achievements.css';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "AI and Future Tech Expo",
      date: "12 - April",
      location: "Rank: Third",
      description: "Participated Hacktech nogi & bambara development natus er militaribus libris do tempor suscipit. Duis aliquet, nisi et imperdiet pretium,",
      image: "/api/placeholder/200/150"
    },
    {
      id: 2,
      title: "United Robot Fest 3.0",
      date: "20 - April",
      location: "Rank: First",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius ante in eros elementum tristique.",
      image: "/api/placeholder/200/150"
    },
    {
      id: 3,
      title: "Sustainability in Tech Forum",
      date: "25 - April",
      location: "Rank: Second",
      description: "Aliquam erat volutpat. Quisque elementum, ante non tellus hendrerit, arcu leo dictum magna, eu rhoncus ante eros nec odio.",
      image: "/api/placeholder/200/150"
    },
    {
      id: 4,
      title: "Tech Innovators Summit 2023",
      date: "03 - May",
      location: "Rank: Second",
      description: "Vivamus turpis sapiente id, vili consequat falla elementum nec. Morbi sociates, tacitus sit amet moeentum volutpat, arci non dictum magna.",
      image: "/api/placeholder/200/150"
    },
    {
      id: 5,
      title: "Design Transformations Conference",
      date: "",
      location: "Rank: Third",
      description: "Curabitur gravida ante ac tortor dignissim. Ut ullamcorper, risus at condimentum finibus, risus est dictum sapien.",
      image: "/api/placeholder/200/150"
    },
    {
      id: 6,
      title: "Design Transformations Conference",
      date: "",
      location: "Rank: Third",
      description: "Curabitur gravida ante ac tortor dignissim. Ut ullamcorper, risus at condimentum finibus, risus est dictum sapien.",
      image: "/api/placeholder/200/150"
    },
    {
      id: 7,
      title: "Design Transformations Conference",
      date: "",
      location: "Rank: Third",
      description: "Curabitur gravida ante ac tortor dignissim. Ut ullamcorper, risus at condimentum finibus, risus est dictum sapien.",
      image: "/api/placeholder/200/150"
    },
    {
      id: 8,
      title: "Design Transformations Conference",
      date: "",
      location: "Rank: Third",
      description: "Curabitur gravida ante ac tortor dignissim. Ut ullamcorper, risus at condimentum finibus, risus est dictum sapien.",
      image: "/api/placeholder/200/150"
    }
  ];

  return (
    <section className="achievements-section">
      <div className="achievement-container">
        <div className="achivement-section-header">
          <span className="section-label">Achievement</span>
          <h2 className="section-title">Achievements done by our team</h2>
          <p className="section-description">
            We are proud of our achievements, which include launching innovative software solutions that have transformed the way businesses operate. Our team has successfully completed over 100 projects, helping clients increase efficiency and drive growth. We continue to strive for excellence and aim to set new benchmarks in the industry.
          </p>
        </div>
        
        <div className="achievements-grid">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="achievement-card">
              <div className="achievement-image">
                <img src={achievement.image} alt={achievement.title} />
              </div>
              <div className="achievement-content">
                <h3 className="achievement-title">{achievement.title}</h3>

                <div className="achievement-location">
                  <span className="location-icon">🏆</span>
                  {achievement.location}
                </div>
                <p className="achievement-description">
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;