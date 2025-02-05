import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebook, FaInstagram, FaDiscord } from 'react-icons/fa';
import './footer/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3 className="brand-title">GameHub</h3>
            <p className="brand-tagline">Your ultimate gaming destination</p>
          </div>
          
          <div className="quick-links">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="links-grid">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/games" className="footer-link">Games</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>
          
          <div className="social-connect">
            <h4 className="footer-heading">Connect</h4>
            <div className="social-icons">
              <a href="#" className="social-icon"><FaTwitter size={24} /></a>
              <a href="#" className="social-icon"><FaFacebook size={24} /></a>
              <a href="#" className="social-icon"><FaInstagram size={24} /></a>
              <a href="#" className="social-icon"><FaDiscord size={24} /></a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 GameHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
