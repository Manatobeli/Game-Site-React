const API_KEY = '8420ae4ca54e44e983cfc17d80ad5d7c';

export const fetchGames = async (genre = '', search = '') => {
  try {
    const baseUrl = 'https://api.rawg.io/api/games';
    const url = `${baseUrl}?key=${API_KEY}${genre ? `&genres=${genre}` : ''}${search ? `&search=${search}` : ''}&page_size=21`;

    const response = await fetch(url);
    const data = await response.json();
    let games = data.results;

    if (search) {
      const searchLower = search.toLowerCase();
      games = games
        .filter(game => game.name.toLowerCase().includes(searchLower))
        .sort((a, b) => {
          const aStartsWith = a.name.toLowerCase().startsWith(searchLower);
          const bStartsWith = b.name.toLowerCase().startsWith(searchLower);
          return (bStartsWith - aStartsWith);
        });
    }

    return games;
  } catch (error) {
    console.error('Error fetching games:', error);
    return [];
  }
};
