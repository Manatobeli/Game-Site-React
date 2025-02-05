import { Link } from 'react-router-dom';
import heroBg from '../assets/hero-bg.jpg';
import './hero/Hero.css';

const Hero = () => {
  return (
    <div className="hero"
    style={{
      backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }}
    >
      <div className="hero-content">
        <h1 className="hero-title">
          Welcome to GameHub
        </h1>
        <p className="hero-description">
          Discover the latest games, news, and connect with fellow gamers
        </p>
        <Link to="/games" className="hero-button">
          Explore Games
        </Link>
      </div>
    </div>
  );
};

export default Hero;