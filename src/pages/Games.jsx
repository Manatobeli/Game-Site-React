import { useState, useEffect } from 'react';
import { fetchGames } from '../utils/api';
import './styles/games.css';

const Games = () => {
  const [games, setGames] = useState([]);
  const [genre, setGenre] = useState(sessionStorage.getItem('genreFilter') || '');
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadGames = async () => {
      setLoading(true);
      const data = await fetchGames(genre, search);
      setGames(data);
      setLoading(false);
    };
    loadGames();
  }, [genre, search]);

  const handleGenreChange = (e) => {
    const newGenre = e.target.value;
    setGenre(newGenre);
    sessionStorage.setItem('genreFilter', newGenre);
  };

  return (
    <div className="games-page">
      <div className="filter-section">
        <select
          value={genre}
          onChange={handleGenreChange}
          className="genre-select"
        >
          <option value="">All Genres</option>
          <option value="action">Action</option>
          <option value="rpg">RPG</option>
          <option value="strategy">Strategy</option>
          <option value="sports">Sports</option>
          <option value="adventure">Adventure</option>
        </select>
        
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search games..."
          className="search-input"
        />
      </div>

      {loading ? (
        <div className="loading-container">Loading...</div>
      ) : games.length === 0 ? (
        <div className="no-games">No games found</div>
      ) : (
        <div className="games-grid">
          {games.map((game) => (
            <div key={game.id} className="game-card">
              <img 
                src={game.background_image} 
                alt={game.name} 
                className="game-image" 
              />
              <div className="game-info">
                <h3 className="game-title">{game.name}</h3>
                <p className="game-rating">Rating: {game.rating}/5</p>
                <p className="game-release">Released: {game.released}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Games;