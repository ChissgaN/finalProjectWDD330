import { MovieDetailsModal } from './MovieDetailsModal.js';
import { showTrailerPlayer } from '../pages/details.js';

// Movie card component
export const MovieCard = (movie) => {
  const posterPath = movie.poster_path
    ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
    : 'https://via.placeholder.com/342x513?text=No+Image';

  const rating = movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A';

  const card = document.createElement('div');
  card.className = 'bg-[#1e293b] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group';

  card.innerHTML = `
    <div class="relative overflow-hidden">
      <img 
        src="${posterPath}" 
        alt="${movie.title || movie.name}" 
        class="w-full h-96 object-cover group-hover:brightness-75 transition-all duration-300"
        loading="lazy"
      />
      <div class="absolute top-2 right-2 bg-[#f59e0b] text-black font-bold py-1 px-3 rounded">
        ${rating}
      </div>
    </div>
    <div class="p-4">
      <h3 class="text-lg font-bold text-[#e2e8f0] mb-2 line-clamp-2">
        ${movie.title || movie.name}
      </h3>
      <p class="text-sm text-[#94a3b8] mb-3 line-clamp-3">
        ${movie.overview || 'No description available'}
      </p>
      <p class="text-xs text-[#94a3b8]">
        ${movie.release_date || movie.first_air_date || 'Unknown date'}
      </p>
    </div>
  `;

  card.addEventListener('click', () => {
    const handleWatchTrailer = () => {
      modal.remove();
      showTrailerPlayer(movie);
    };

    const modal = MovieDetailsModal(movie, () => modal.remove(), handleWatchTrailer);
    document.body.appendChild(modal);
  });

  return card;
};
