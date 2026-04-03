export const SearchBar = (onSearch) => {
  const container = document.createElement('div');
  container.className = 'w-full max-w-2xl mx-auto';

  const form = document.createElement('form');
  form.className = 'flex gap-2';

  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'Busca películas o series...';
  input.className = `
    flex-1 px-4 py-3 rounded-lg bg-[#0f172a] border-2 border-[#94a3b8]
    text-[#e2e8f0] placeholder-[#94a3b8] focus:outline-none focus:border-[#f59e0b]
    transition-colors duration-200
  `;

  const button = document.createElement('button');
  button.type = 'submit';
  button.textContent = 'Buscar';
  button.className = `
    px-6 py-3 bg-[#f59e0b] text-black font-semibold rounded-lg
    hover:bg-[#d97706] transition-colors duration-200 font-bold
  `;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = input.value.trim();
    if (searchTerm) {
      onSearch(searchTerm);
      input.value = '';
    }
  });

  form.appendChild(input);
  form.appendChild(button);
  container.appendChild(form);

  return container;
};
