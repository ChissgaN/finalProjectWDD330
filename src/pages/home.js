import { getPopularMovies, searchMovies } from '../scripts/api.js';
import { MovieCard } from '../components/MovieCard.js';
import { SearchBar } from '../components/SearchBar.js';
import { clearElement, showLoading, showError } from '../scripts/utils.js';

const movieGrid = document.getElementById('movie-grid');
const searchContainer = document.getElementById('search-container');

/**
 * Render movies to the grid
 * @param {Array} movies - Array of movie objects
 */
const renderMovies = (movies) => {
  clearElement(movieGrid);
  
  if (movies.length === 0) {
    showError(movieGrid, 'No se encontraron películas o series.');
    return;
  }

  movies.forEach((movie) => {
    if (movie.poster_path) {
      const card = MovieCard(movie);
      movieGrid.appendChild(card);
    }
  });
};

/**
 * Handle search functionality
 * @param {string} query - Search query
 */
const handleSearch = async (query) => {
  showLoading(movieGrid);
  try {
    const data = await searchMovies(query);
    renderMovies(data.results);
  } catch (error) {
    showError(movieGrid, 'Error al buscar. Intenta de nuevo.');
    console.error('Search error:', error);
  }
};

/**
 * Load initial popular movies
 */
const loadInitialMovies = async () => {
  showLoading(movieGrid);
  try {
    const data = await getPopularMovies();
    renderMovies(data.results);
  } catch (error) {
    showError(movieGrid, 'Error al cargar películas. Intenta más tarde.');
    console.error('Load error:', error);
  }
};

/**
 * Initialize home page
 */
export const initHome = () => {
  // Render search bar
  const searchBar = SearchBar(handleSearch);
  clearElement(searchContainer);
  searchContainer.appendChild(searchBar);

  // Load initial movies
  loadInitialMovies();
};
