// Utility functions
export const debounce = (func, delay = 300) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};


export const formatDate = (dateString) => {
  if (!dateString) return 'Unknown date';
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};


export const truncateText = (text, length = 100) => {
  if (!text) return '';
  return text.length > length ? text.substring(0, length) + '...' : text;
};


export const clearElement = (element) => {
  if (element) {
    element.innerHTML = '';
  }
};


export const showLoading = (element) => {
  element.innerHTML = `
    <div class="flex justify-center items-center py-12">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-[#f59e0b]"></div>
    </div>
  `;
};


export const showError = (element, message) => {
  element.innerHTML = `
    <div class="text-center py-12">
      <p class="text-red-400 text-lg font-semibold">${message}</p>
    </div>
  `;
};
