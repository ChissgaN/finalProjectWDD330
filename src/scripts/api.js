/**
 * API Module
 * Handles all API requests to TheMovieDB (TMDB)
 */

const API_BASE_URL = 'https://api.themoviedb.org/3';
// ⚠️ IMPORTANTE: Reemplaza esto con tu propia API key de TMDB
// Obtén una gratis en: https://www.themoviedb.org/settings/api
const API_KEY = 'YOUR_TMDB_API_KEY_HERE';

/**
 * Fetch popular movies
 * @param {number} page - Page number for pagination
 * @returns {Promise} API response with movies
 */
export const getPopularMovies = async (page = 1) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}&language=es`
    );
    if (!response.ok) throw new Error('Error fetching movies');
    return await response.json();
  } catch (error) {
    console.error('Error in getPopularMovies:', error);
    return { results: [] };
  }
};

/**
 * Search for movies by query
 * @param {string} query - Search query
 * @param {number} page - Page number for pagination
 * @returns {Promise} API response with search results
 */
export const searchMovies = async (query, page = 1) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/search/multi?api_key=${API_KEY}&query=${query}&page=${page}&language=es`
    );
    if (!response.ok) throw new Error('Error searching movies');
    return await response.json();
  } catch (error) {
    console.error('Error in searchMovies:', error);
    return { results: [] };
  }
};

/**
 * Get TV shows
 * @param {number} page - Page number for pagination
 * @returns {Promise} API response with TV shows
 */
export const getPopularTVShows = async (page = 1) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/tv/popular?api_key=${API_KEY}&page=${page}&language=es`
    );
    if (!response.ok) throw new Error('Error fetching TV shows');
    return await response.json();
  } catch (error) {
    console.error('Error in getPopularTVShows:', error);
    return { results: [] };
  }
};

/**
 * Get details of a specific movie
 * @param {number} movieId - Movie ID
 * @returns {Promise} Movie details
 */
export const getMovieDetails = async (movieId) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=es`
    );
    if (!response.ok) throw new Error('Error fetching movie details');
    return await response.json();
  } catch (error) {
    console.error('Error in getMovieDetails:', error);
    return null;
  }
};
