/**
 * Utility Functions
 * Helper functions for the application
 */

/**
 * Debounce function to limit function calls
 * @param {Function} func - Function to debounce
 * @param {number} delay - Delay in milliseconds
 * @returns {Function} Debounced function
 */
export const debounce = (func, delay = 300) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

/**
 * Format date string
 * @param {string} dateString - Date string to format
 * @returns {string} Formatted date
 */
export const formatDate = (dateString) => {
  if (!dateString) return 'Fecha desconocida';
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('es-ES', options);
};

/**
 * Truncate text to a specific length
 * @param {string} text - Text to truncate
 * @param {number} length - Maximum length
 * @returns {string} Truncated text
 */
export const truncateText = (text, length = 100) => {
  if (!text) return '';
  return text.length > length ? text.substring(0, length) + '...' : text;
};

/**
 * Clear container element
 * @param {HTMLElement} element - Element to clear
 */
export const clearElement = (element) => {
  if (element) {
    element.innerHTML = '';
  }
};

/**
 * Show loading state
 * @param {HTMLElement} element - Element to show loading state in
 */
export const showLoading = (element) => {
  element.innerHTML = `
    <div class="flex justify-center items-center py-12">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-[#f59e0b]"></div>
    </div>
  `;
};

/**
 * Show error message
 * @param {HTMLElement} element - Element to show error in
 * @param {string} message - Error message
 */
export const showError = (element, message) => {
  element.innerHTML = `
    <div class="text-center py-12">
      <p class="text-red-400 text-lg font-semibold">${message}</p>
    </div>
  `;
};
