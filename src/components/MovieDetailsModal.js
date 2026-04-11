// Movie details modal component for displaying movie information and trailer button
export const MovieDetailsModal = (movie, onClose, onWatchTrailer) => {
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4';
  modal.id = 'movie-modal';

  const backdrop = document.createElement('div');
  backdrop.className = 'absolute inset-0';
  backdrop.addEventListener('click', onClose);

  const content = document.createElement('div');
  content.className = 'bg-[#1e293b] rounded-lg max-w-2xl w-full max-h-96 overflow-y-auto relative z-10 p-6';

  const closeBtn = document.createElement('button');
  closeBtn.innerHTML = '×';
  closeBtn.className = 'absolute top-4 right-4 text-3xl text-[#e2e8f0] hover:text-[#f59e0b] cursor-pointer';
  closeBtn.addEventListener('click', onClose);

  const title = document.createElement('h2');
  title.textContent = movie.title || movie.name;
  title.className = 'text-3xl font-bold text-[#f59e0b] mb-4';

  const releaseDate = document.createElement('p');
  releaseDate.textContent = `📅 ${movie.release_date || movie.first_air_date || 'N/A'}`;
  releaseDate.className = 'text-[#94a3b8] mb-2';

  const rating = document.createElement('p');
  rating.textContent = `⭐ Rating: ${movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A'}/10`;
  rating.className = 'text-[#94a3b8] mb-4';

  const overview = document.createElement('p');
  overview.textContent = movie.overview || 'No description available';
  overview.className = 'text-[#e2e8f0] mb-6 leading-relaxed';

  const watchBtn = document.createElement('button');
  watchBtn.textContent = '🎬 Watch Trailer';
  watchBtn.className = 'bg-[#f59e0b] text-black font-bold py-2 px-6 rounded-lg hover:bg-[#d97706] transition-colors';
  watchBtn.addEventListener('click', () => {
    onClose();
    onWatchTrailer(movie);
  });

  content.appendChild(closeBtn);
  content.appendChild(title);
  content.appendChild(releaseDate);
  content.appendChild(rating);
  content.appendChild(overview);
  content.appendChild(watchBtn);

  modal.appendChild(backdrop);
  modal.appendChild(content);

  return modal;
};
