import { Link } from 'react-router-dom'
import './Support.css'

function Support() {
  return (
    <div className="support">
      {/* Page Hero */}
      <section className="page-hero support-hero">
        <div className="page-hero-background">
          <img
            src="/images/child-in-need.jpg"
            alt="Child in Haiti"
            className="page-hero-image"
          />
        </div>
        <div className="container">
          <h1>Make a Difference</h1>
          <p className="page-hero-subtitle">Your support helps bring joy and hope to Haiti</p>
        </div>
      </section>

      {/* Main Support Content */}
      <section className="support-main section">
        <div className="container">
          <div className="support-intro">
            <p>
              <strong>Through generous financial donations, we will see the vision of Joy for Haiti come to life!</strong> We have a vision to purchase land in Haiti and build dorms to house staff, boys, and girls. As God blesses and provides, Joy for Haiti will grow into a campus with a church, school, medical clinic, and restaurant. Those impacted would go on to fulfill their dreams with a successful future and break the cycle of poverty.
            </p>
          </div>

          <div className="support-options">
            <div className="support-card">
              <div className="support-card-image">
                <img src="/images/siblings-with-food.jpg" alt="Children receiving meals" />
              </div>
              <div className="support-card-content">
                <h3>One-Time Donation</h3>
                <p>Make a single contribution to support our mission. Every gift, no matter the size, makes a difference in the lives of young people in Haiti.</p>
                <a href="https://venmo.com/code?user_id=3274260265041920090&created=1767149073.827726&printed=1" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Give Now</a>
              </div>
            </div>

            {/* Monthly Support - Coming Soon
            <div className="support-card">
              <div className="support-card-image">
                <img src="/images/children-eating.jpg" alt="Children enjoying a meal" />
              </div>
              <div className="support-card-content">
                <h3>Monthly Support</h3>
                <p>Join our monthly giving program to provide consistent support for our ongoing work. Recurring gifts help us plan for the future with confidence.</p>
                <a href="mailto:donations@joyforhaiti.org?subject=Inquiry%3A%20Monthly%20Giving" className="btn btn-primary">Set Up Monthly Giving</a>
              </div>
            </div>
            */}
          </div>

          <div className="support-note">
            <p>Your gifts are very appreciated! Let us know if you have any questions.</p>
          </div>
        </div>
      </section>

      {/* Impact Gallery */}
      <section className="impact-gallery section">
        <div className="container">
          <div className="section-header">
            <h2>Your Impact</h2>
            <p>See how your support transforms lives</p>
          </div>
          <div className="impact-gallery-grid">
            <div className="impact-gallery-item">
              <img src="/images/teen-with-meal.jpg" alt="Teen receiving a meal" />
            </div>
            <div className="impact-gallery-item">
              <img src="/images/food-distribution.jpg" alt="Food distribution" />
            </div>
            <div className="impact-gallery-item">
              <img src="/images/young-children.jpg" alt="Young children in Haiti" />
            </div>
          </div>
        </div>
      </section>

      {/* Prayer Section */}
      <section className="prayer-section section bg-off-white">
        <div className="container">
          <div className="prayer-content">
            <div className="prayer-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L14.09 8.26L20.5 9.27L15.5 14.14L16.82 21.02L12 17.77L7.18 21.02L8.5 14.14L3.5 9.27L9.91 8.26L12 2Z"/>
              </svg>
            </div>
            <h2>Join The Prayer Chain</h2>
            <p className="prayer-intro">
              Prayer is the foundation of everything we do. We believe that prayer works, and we invite you to join us in praying for:
            </p>
            <ul className="prayer-list">
              <li>
                <span className="prayer-bullet"></span>
                The young people we serve in Haiti
              </li>
              <li>
                <span className="prayer-bullet"></span>
                Our staff and partners on the ground
              </li>
              <li>
                <span className="prayer-bullet"></span>
                Wisdom and provision as we build our campus
              </li>
              <li>
                <span className="prayer-bullet"></span>
                The communities we will impact
              </li>
              <li>
                <span className="prayer-bullet"></span>
                God's continued guidance and blessing
              </li>
            </ul>
            <p className="prayer-cta">
              If you would like to receive prayer updates and specific requests, please{' '}
              <Link to="/contact">contact us</Link>.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Support
