import { MovieCard } from '../components/MovieCard.js';
import { clearElement, showError } from '../scripts/utils.js';

const movieGrid = document.getElementById('movie-grid');
const searchContainer = document.getElementById('search-container');

// Display search results page
export const showSearchResults = (query, results) => {
  // Clear grid
  clearElement(movieGrid);

  // Create search results header
  const resultsHeader = document.createElement('div');
  resultsHeader.className = 'mb-8';

  const backToHome = document.createElement('button');
  backToHome.innerHTML = '← Back to Home';
  backToHome.className = 'mb-4 bg-[#1e293b] px-4 py-2 rounded hover:bg-[#f59e0b] transition-colors text-[#e2e8f0]';
  backToHome.addEventListener('click', () => location.reload());

  const title = document.createElement('h2');
  title.textContent = `Search Results for "${query}"`;
  title.className = 'text-3xl font-bold text-[#f59e0b] mb-2';

  const resultCount = document.createElement('p');
  resultCount.textContent = `Found ${results.length} result${results.length !== 1 ? 's' : ''}`;
  resultCount.className = 'text-[#94a3b8] text-lg';

  resultsHeader.appendChild(backToHome);
  resultsHeader.appendChild(title);
  resultsHeader.appendChild(resultCount);

  // Insert header at the beginning of the grid section
  movieGrid.parentElement.insertBefore(resultsHeader, movieGrid);

  // Display results
  if (results.length === 0) {
    showError(movieGrid, `No movies or shows found for "${query}"`);
    return;
  }

  results.forEach((movie) => {
    if (movie.poster_path) {
      const card = MovieCard(movie);
      movieGrid.appendChild(card);
    }
  });
};
