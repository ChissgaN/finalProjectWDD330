import { getPopularMovies, searchMovies } from '../scripts/api.js';
import { MovieCard } from '../components/MovieCard.js';
import { SearchBar } from '../components/SearchBar.js';
import { clearElement, showLoading, showError } from '../scripts/utils.js';
import { showSearchResults } from './search.js';

const movieGrid = document.getElementById('movie-grid');
const searchContainer = document.getElementById('search-container');

// Render movies to grid
const renderMovies = (movies) => {
  clearElement(movieGrid);
  if (movies.length === 0) {
    showError(movieGrid, 'No movies or shows found.');
    return;
  }
  movies.forEach((movie) => {
    if (movie.poster_path) {
      const card = MovieCard(movie);
      movieGrid.appendChild(card);
    }
  });
};

// Handle search query
const handleSearch = async (query) => {
  showLoading(movieGrid);
  try {
    const data = await searchMovies(query);
    // Filter valid results with poster
    const validResults = data.results.filter((movie) => movie.poster_path);
    showSearchResults(query, validResults);
  } catch (error) {
    showError(movieGrid, 'Error searching. Please try again.');
  }
};

// Load initial popular movies
const loadInitialMovies = async () => {
  showLoading(movieGrid);
  try {
    const data = await getPopularMovies();
    renderMovies(data.results);
  } catch (error) {
    showError(movieGrid, 'Error loading movies. Please try again later.');
  }
};

export const initHome = () => {
  const searchBar = SearchBar(handleSearch);
  clearElement(searchContainer);
  searchContainer.appendChild(searchBar);
  loadInitialMovies();
};
