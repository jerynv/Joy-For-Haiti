import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <img
            src="/images/haiti-children.jpg"
            alt="Children in school uniforms - Live in Joy"
            className="hero-bg-image"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content container">
          <h1 className="hero-title">
            <span className="hero-title-line">Prayer</span>
            <span className="hero-title-line hero-title-accent">works.</span>
          </h1>
          <p className="hero-subtitle">Join us in making a difference in Haiti</p>
          <Link to="/support" className="btn btn-primary hero-cta">
            Join The Prayer Chain Now
          </Link>
        </div>
        <div className="hero-scroll-indicator">
          <span></span>
        </div>
      </section>

      {/* Featured Images Section */}
      <section className="featured-images-section">
        <div className="container">
          <div className="featured-images-grid">
            <div className="featured-image-wrapper featured-main">
              <img
                src="/images/community-group.jpg"
                alt="Joy for Haiti community with children wearing branded shirts"
                className="featured-image"
              />
              <div className="featured-image-caption">
                <span>Our Community</span>
              </div>
            </div>
            <div className="featured-image-wrapper">
              <img
                src="/images/children-gathering.jpg"
                alt="Children at Joy for Haiti gathering"
                className="featured-image"
              />
              <div className="featured-image-caption">
                <span>Gathering Together</span>
              </div>
            </div>
            <div className="featured-image-wrapper">
              <img
                src="/images/backpack-distribution.jpg"
                alt="Children receiving backpacks"
                className="featured-image"
              />
              <div className="featured-image-caption">
                <span>Making a Difference</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Make a Difference Section */}
      <section className="difference section">
        <div className="container">
          <div className="section-header">
            <h2>Make a Difference</h2>
          </div>
          <div className="difference-content">
            <p>
              <strong>Through generous financial donations, we will see the vision of Joy for Haiti come to life!</strong> We have a vision to purchase land in Haiti and build dorms to house staff, boys, and girls. As God blesses and provides, Joy for Haiti will grow into a campus with a church, school, medical clinic, and restaurant. Those impacted would go on to fulfill their dreams with a successful future and break the cycle of poverty.
            </p>
            <div className="difference-cta">
              <Link to="/support" className="btn btn-primary">
                Learn More About Supporting Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Preview */}
      <section className="impact section bg-off-white">
        <div className="container">
          <div className="impact-grid">
            <div className="impact-card">
              <div className="impact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
              <h3>Christ Centered</h3>
              <p>Building lives on the foundation of faith and love</p>
            </div>
            <div className="impact-card">
              <div className="impact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                  <line x1="9" y1="9" x2="9.01" y2="9"/>
                  <line x1="15" y1="9" x2="15.01" y2="9"/>
                </svg>
              </div>
              <h3>Joy Filled</h3>
              <p>Creating an environment where joy flourishes</p>
            </div>
            <div className="impact-card">
              <div className="impact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              </div>
              <h3>Dream Fulfilling</h3>
              <p>Empowering youth to achieve their God-given potential</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
