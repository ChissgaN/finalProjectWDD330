/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Design System Colors
        background: '#0f172a',
        'bg-secondary': '#1e293b',
        accent: '#f59e0b',
        'text-primary': '#e2e8f0',
        'text-muted': '#94a3b8',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        'xs': '8px',
        'sm': '16px',
        'md': '24px',
        'lg': '32px',
      },
    },
  },
  plugins: [],
}
