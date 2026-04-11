// TMDB API Configuration
export const TMDB_CONFIG = {
  API_KEY: '8e39761e01d4f72ab6ee50507f2346ce',
  BASE_URL: 'https://api.themoviedb.org/3',
  IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
  posterSizes: {
    small: 'w342',
    medium: 'w500',
    large: 'w780',
  },
};

// YouTube API Configuration
export const YOUTUBE_CONFIG = {
  API_KEY: 'AIzaSyByWwysrbEN710XT-xKc5VkHN0u24DGFVo',
  BASE_URL: 'https://www.googleapis.com/youtube/v3',
};

export const getYouTubeEmbedUrl = (videoKey) => {
  return `https://www.youtube.com/embed/${videoKey}?rel=0&controls=1&modestbranding=1`;
};

export const getTMDBImageUrl = (path, size = 'medium') => {
  if (!path) return 'https://via.placeholder.com/500x750?text=No+Image';
  return `${TMDB_CONFIG.IMAGE_BASE_URL}/${TMDB_CONFIG.posterSizes[size]}${path}`;
};
