import { defineConfig } from 'vite';

export default defineConfig({
  base: '/finalProjectWDD330/',
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
