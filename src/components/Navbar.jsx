import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './navbar/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event) => {
      if (
        menuRef.current && 
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-content">
          <Link to="/" className="navbar-brand">
            GameHub
          </Link>

          <div className="desktop-menu">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/games" className="nav-link">Games</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </div>

          <button
            ref={buttonRef}
            onClick={toggleMenu}
            className="mobile-menu-button"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        <div 
          ref={menuRef}
          className={`mobile-menu ${isOpen ? 'mobile-menu-active' : ''}`}
        >
          <div className="mobile-menu-links">
            <Link to="/" className="mobile-nav-link" onClick={toggleMenu}>Home</Link>
            <Link to="/games" className="mobile-nav-link" onClick={toggleMenu}>Games</Link>
            <Link to="/contact" className="mobile-nav-link" onClick={toggleMenu}>Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
