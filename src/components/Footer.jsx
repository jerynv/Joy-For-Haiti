import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content container">
        <div className="footer-logo">
          <Link to="/">
            <img
              src="/images/logo-full.png"
              alt="Joy For Haiti - Live in Joy"
              className="footer-logo-image"
            />
          </Link>
        </div>

        <div className="footer-address">
          <p>12842 Ari Lane</p>
          <p>Fishers, IN 46037</p>
        </div>

        <nav className="footer-nav">
          <Link to="/about">About</Link>
          <Link to="/support">Support</Link>
          <Link to="/contact">Contact</Link>
          <a href="https://venmo.com/code?user_id=3274260265041920090&created=1767149073.827726&printed=1" target="_blank" rel="noopener noreferrer">Donate</a>
        </nav>

        <div className="footer-social">
          <a href="https://www.facebook.com/p/Joy-for-Haiti-100070952906247/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
        </div>

        <div className="footer-tax-notice">
          <p>Joy for Haiti is a 501(c)(3) nonprofit organization. All donations are tax-deductible to the extent allowed by law.</p>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Joy for Haiti. All rights reserved.</p>
        </div>
      </div>

      <div className="footer-decoration">
        <div className="footer-wave"></div>
      </div>
    </footer>
  )
}

export default Footer
