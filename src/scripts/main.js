import { initHome } from '../pages/home.js';

const init = () => {
  initHome();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}