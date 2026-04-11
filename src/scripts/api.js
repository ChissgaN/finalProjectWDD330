// API requests to TMDB
import { TMDB_CONFIG } from './config.js';

const API_BASE_URL = TMDB_CONFIG.BASE_URL;
const API_KEY = TMDB_CONFIG.API_KEY;
// Fetch popular movies
export const getPopularMovies = async (page = 1) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}&language=en-US`
    );
    if (!response.ok) throw new Error('Error fetching movies');
    return await response.json();
  } catch (error) {
    return { results: [] };
  }
};

// Search movies and shows by query
export const searchMovies = async (query, page = 1) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/search/multi?api_key=${API_KEY}&query=${query}&page=${page}&language=en-US`
    );
    if (!response.ok) throw new Error('Error searching movies');
    return await response.json();
  } catch (error) {
    return { results: [] };
  }
};

// Fetch popular TV shows
export const getPopularTVShows = async (page = 1) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/tv/popular?api_key=${API_KEY}&page=${page}&language=en-US`
    );
    if (!response.ok) throw new Error('Error fetching TV shows');
    return await response.json();
  } catch (error) {
    return { results: [] };
  }
};

// Get full movie details with videos
export const getMovieDetails = async (movieId) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US&append_to_response=videos`
    );
    if (!response.ok) throw new Error('Error fetching movie details');
    return await response.json();
  } catch (error) {
    return null;
  }
};

// Get movie trailers
export const getMovieTrailers = async (movieId) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`
    );
    if (!response.ok) throw new Error('Error fetching trailers');
    const data = await response.json();
    // Filter for Trailer and Teaser type videos from YouTube
    return data.results.filter(
      (video) =>
        (video.type === 'Trailer' || video.type === 'Teaser') &&
        video.site === 'YouTube'
    );
  } catch (error) {
    return [];
  }
};

// Search trailers on YouTube
export const searchYouTubeTrailer = async (query) => {
  try {
    const YOUTUBE_API_KEY = 'AIzaSyByWwysrbEN710XT-xKc5VkHN0u24DGFVo';
    const searchQuery = `${query} official trailer`;
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(searchQuery)}&type=video&maxResults=1&key=${YOUTUBE_API_KEY}`
    );
    if (!response.ok) throw new Error('Error searching YouTube');
    const data = await response.json();
    if (data.items && data.items.length > 0) {
      return {
        videoId: data.items[0].id.videoId,
        title: data.items[0].snippet.title,
        channelName: data.items[0].snippet.channelTitle,
      };
    }
    return null;
  } catch (error) {
    return null;
  }
};
