import { useState, useEffect } from 'react';
import { fetchGames } from '../utils/api';
import './featuredGames/FeaturedGames.css';

const FeaturedGames = () => {
  const [featuredGames, setFeaturedGames] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadFeaturedGames = async () => {
      try {
        const games = await fetchGames();
        setFeaturedGames(games.slice(0, 3));
      } catch (err) {
        setError(err.message);
      }
    };
    loadFeaturedGames();
  }, []);

  if (error) {
    return <div className="error-message">Error loading games: {error}</div>;
  }

  return (
    <section className="featured-games-section">
      <div className="container">
        <h2 className="section-title">Featured Games</h2>
        <div className="games-grid">
          {featuredGames.map((game) => (
            <div key={game.id} className="game-card">
              <img src={game.background_image} alt={game.name} className="game-image" />
              <div className="game-info">
                <h3 className="game-title">{game.name}</h3>
                <p className="game-rating">Rating: {game.rating}/5</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGames;