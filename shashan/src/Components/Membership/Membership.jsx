import React from 'react';
import './Membership.css';

const Membership = () => {
  const plans = [
    {
      name: 'Premium',
      price: 'Rs 2000',
      description: 'Molestiae ut lectus posuere enim id nec. Molestiae neque, sed Turris faucibus.',
      isPopular: false,
      features: [
        'Tortor interdum condimentum nunc molestie quam lectus.',
        'Turpis tortor convallis condimentum nunc molestie quam lectus.',
        'Tortor interdum condimentum nunc molestie quam lectus.',
        'Tortor interdum condimentum nunc molestie quam lectus.',
        'Tortor interdum condimentum nunc molestie quam lectus.'
      ]
    },
    {
      name: 'Team',
      price: 'Rs 3000',
      description: 'Molestiae ut lectus posuere enim id nec. Molestiae neque, sed Turris faucibus.',
      isPopular: true,
      features: [
        'Tortor interdum condimentum nunc molestie quam lectus.',
        'Turpis tortor convallis condimentum nunc molestie quam lectus.',
        'Tortor interdum condimentum nunc molestie quam lectus.',
        'Tortor interdum condimentum nunc molestie quam lectus.',
        'Tortor interdum condimentum nunc molestie quam lectus.'
      ]
    },
    {
      name: 'Business',
      price: 'Rs 4000',
      description: 'Molestiae ut lectus posuere enim id nec. Molestiae neque, sed Turris faucibus.',
      isPopular: false,
      features: [
        'Tortor interdum condimentum nunc molestie quam lectus.',
        'Turpis tortor convallis condimentum nunc molestie quam lectus.',
        'Tortor interdum condimentum nunc molestie quam lectus.',
        'Tortor interdum condimentum nunc molestie quam lectus.',
        'Tortor interdum condimentum nunc molestie quam lectus.'
      ]
    }
  ];

  return (
    <div className="membership-container">
      <div className="membership-wrapper">
        {/* Header */}
        <div className="header-section">
          <h1 className="main-title">
            Ready to be our<br />member
          </h1>
          <p className="subtitle">
            Joining us will provide you with valuable insights.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card ${plan.isPopular ? 'popular-card' : ''}`}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <div className="popular-badge">
                  <div className="badge-content">🔥 Most popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="plan-header">
                <h3 className="plan-name">{plan.name}</h3>
                <div className="plan-price">{plan.price}</div>
                <p className="plan-description">{plan.description}</p>
              </div>

              {/* Features List */}
              <div className="features-list">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="feature-item">
                    <div className="check-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20,6 9,17 4,12"></polyline>
                      </svg>
                    </div>
                    <span className="feature-text">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Join Button */}
              <button className={`join-button-membership ${plan.isPopular ? 'popular-button' : ''}`}>
                Join Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Membership;