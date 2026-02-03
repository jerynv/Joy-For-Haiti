import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [prayerForm, setPrayerForm] = useState({
    name: '',
    email: '',
    request: ''
  })

  const handlePrayerChange = (e) => {
    const { name, value } = e.target
    setPrayerForm(prev => ({ ...prev, [name]: value }))
  }

  const handlePrayerSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent('Inquiry: Prayer Request')
    const body = encodeURIComponent(
      `Name: ${prayerForm.name}\nEmail: ${prayerForm.email}\n\nPrayer Request:\n${prayerForm.request}`
    )
    window.location.href = `mailto:prayer@joyforhaiti.org?subject=${subject}&body=${body}`
  }

  return (
    <div className="contact">
      {/* Page Hero */}
      <section className="page-hero contact-hero">
        <div className="page-hero-background">
          <img
            src="/images/haiti-children.jpg"
            alt="Children at Joy for Haiti"
            className="page-hero-image"
          />
        </div>
        <div className="container">
          <h1>Get In Touch</h1>
          <p className="page-hero-subtitle">We'd love to hear from you</p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="contact-info section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-details">
              <h2>Contact Information</h2>
              <div className="contact-items">
                <div className="contact-item">
                  <div className="contact-item-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div className="contact-item-content">
                    <h4>Email</h4>
                    <p>
                      <a href="mailto:info@joyforhaiti.org?subject=Inquiry%3A%20General">info@joyforhaiti.org</a>
                    </p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-item-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                  </div>
                  <div className="contact-item-content">
                    <h4>Questions About Donations</h4>
                    <p>
                      <a href="mailto:donations@joyforhaiti.org?subject=Inquiry%3A%20Donation">donations@joyforhaiti.org</a>
                    </p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-item-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 2L14.09 8.26L20.5 9.27L15.5 14.14L16.82 21.02L12 17.77L7.18 21.02L8.5 14.14L3.5 9.27L9.91 8.26L12 2Z"/>
                    </svg>
                  </div>
                  <div className="contact-item-content">
                    <h4>Prayer Requests</h4>
                    <p>
                      <a href="mailto:prayer@joyforhaiti.org?subject=Inquiry%3A%20Prayer%20Request">prayer@joyforhaiti.org</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-message-card">
              <h3>Send Us a Message</h3>
              <p>Have questions about our mission? Want to learn more about how you can get involved? We're here to help.</p>
              <p>Please reach out to us via email using the addresses provided, or send us a message through your preferred method of communication.</p>
              <p>We appreciate your interest in Joy for Haiti and look forward to connecting with you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Connect */}
      <section className="ways-section section bg-off-white">
        <div className="container">
          <div className="section-header">
            <h2>Ways to Connect</h2>
          </div>
          <div className="ways-grid">
            <div className="way-card">
              <div className="way-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                  <line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>
              </div>
              <h4>General Inquiries</h4>
              <p>For general questions about our organization, mission, or how to get involved.</p>
              <a href="mailto:info@joyforhaiti.org?subject=Inquiry%3A%20General" className="btn btn-secondary">Contact Us</a>
            </div>
            <div className="way-card">
              <div className="way-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <line x1="2" y1="10" x2="22" y2="10"/>
                </svg>
              </div>
              <h4>Donation Questions</h4>
              <p>Questions about giving, payment methods, or setting up recurring donations.</p>
              <a href="mailto:donations@joyforhaiti.org?subject=Inquiry%3A%20Donation" className="btn btn-secondary">Ask About Giving</a>
            </div>
            <div className="way-card">
              <div className="way-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2L14.09 8.26L20.5 9.27L15.5 14.14L16.82 21.02L12 17.77L7.18 21.02L8.5 14.14L3.5 9.27L9.91 8.26L12 2Z"/>
                </svg>
              </div>
              <h4>Prayer Partnership</h4>
              <p>Join our prayer chain or share specific prayer requests with our team.</p>
              <a href="mailto:prayer@joyforhaiti.org?subject=Inquiry%3A%20Prayer%20Request" className="btn btn-secondary">Share Prayer Request</a>
            </div>
            <div className="way-card">
              <div className="way-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h4>Partnership Opportunities</h4>
              <p>Interested in partnering with us? We'd love to explore how we can work together.</p>
              <a href="mailto:info@joyforhaiti.org?subject=Inquiry%3A%20Partnership" className="btn btn-secondary">Explore Partnership</a>
            </div>
          </div>
        </div>
      </section>

      {/* Prayer Request Form */}
      <section className="prayer-form-section section">
        <div className="container">
          <div className="section-header">
            <h2>Submit a Prayer Request</h2>
            <p>Share your prayer needs with us. We believe in the power of prayer and would be honored to pray for you.</p>
          </div>
          <form className="prayer-form" onSubmit={handlePrayerSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={prayerForm.name}
                  onChange={handlePrayerChange}
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={prayerForm.email}
                  onChange={handlePrayerChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="request">Prayer Request</label>
              <textarea
                id="request"
                name="request"
                value={prayerForm.request}
                onChange={handlePrayerChange}
                placeholder="Share your prayer request with us..."
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit Prayer Request</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Contact
