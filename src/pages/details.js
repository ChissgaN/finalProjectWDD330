
import { getMovieTrailers, searchYouTubeTrailer } from '../scripts/api.js';
import { clearElement } from '../scripts/utils.js';

// Get main container for displaying trailer player
const detailsContainer = document.getElementById('main') || document.body;

// Display trailer player with movie details
export const showTrailerPlayer = async (movie) => {
  clearElement(detailsContainer);

  const container = document.createElement('div');
  container.className = 'min-h-screen bg-[#0f172a] text-[#e2e8f0] py-8';

  const content = document.createElement('div');
  content.className = 'max-w-4xl mx-auto px-4';

  const backBtn = document.createElement('button');
  backBtn.textContent = '← Back';
  backBtn.className = 'mb-6 bg-[#1e293b] px-4 py-2 rounded hover:bg-[#f59e0b] transition-colors';
  backBtn.addEventListener('click', () => location.reload());

  const title = document.createElement('h1');
  title.textContent = movie.title || movie.name;
  title.className = 'text-4xl font-bold text-[#f59e0b] mb-8';

  const playerContainer = document.createElement('div');
  playerContainer.className = 'bg-black rounded-lg overflow-hidden mb-8';

  let trailerFound = false;
  let videoId = null;

  try {
    const trailers = await getMovieTrailers(movie.id);
    if (trailers && trailers.length > 0) {
      videoId = trailers[0].key;
      trailerFound = true;
    }
  } catch (error) {
    //
  }

  if (!trailerFound) {
    try {
      const youtubeResult = await searchYouTubeTrailer(movie.title || movie.name);
      if (youtubeResult) {
        videoId = youtubeResult.videoId;
        trailerFound = true;
      }
    } catch (error) {
      //
    }
  }

  if (trailerFound && videoId) {
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${videoId}`;
    iframe.className = 'w-full aspect-video';
    iframe.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    playerContainer.appendChild(iframe);
  } else {
    const noTrailer = document.createElement('div');
    noTrailer.textContent = 'No trailer available';
    noTrailer.className = 'w-full aspect-video flex items-center justify-center text-[#94a3b8]';
    playerContainer.appendChild(noTrailer);
  }

  const details = document.createElement('div');
  details.className = 'grid grid-cols-1 md:grid-cols-3 gap-8';

  const poster = document.createElement('div');
  poster.innerHTML = `
    <img 
      src="https://image.tmdb.org/t/p/w500${movie.poster_path}" 
      alt="${movie.title}"
      class="w-full rounded-lg shadow-lg"
    />
  `;

  const info = document.createElement('div');
  info.className = 'md:col-span-2';
  info.innerHTML = `
    <div class="mb-6">
      <p class="text-[#94a3b8] mb-2">📅 Release Date: ${movie.release_date || 'N/A'}</p>
      <p class="text-[#94a3b8] mb-2">⭐ Rating: ${movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A'}/10</p>
      <p class="text-[#94a3b8] mb-4">👁️ Votes: ${movie.vote_count?.toLocaleString() || 'N/A'}</p>
    </div>
    <h2 class="text-2xl font-bold text-[#f59e0b] mb-3">Overview</h2>
    <p class="text-[#e2e8f0] leading-relaxed">${movie.overview || 'No description available'}</p>
  `;

  details.appendChild(poster);
  details.appendChild(info);

  content.appendChild(backBtn);
  content.appendChild(title);
  content.appendChild(playerContainer);
  content.appendChild(details);
  container.appendChild(content);

  detailsContainer.appendChild(container);
};
