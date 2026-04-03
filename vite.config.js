import { defineConfig } from 'vite';

export default defineConfig({
  base: '/finalProject/',
  server: {
    port: 3000,
    open: true,
    hot: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
  },
});
