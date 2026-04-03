import { initHome } from '../pages/home.js';

const init = () => {
  console.log('🎬 Movie & TV Explorer - Initializing...');
  initHome();
};

// Start application when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}