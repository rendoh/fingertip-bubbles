import { defineConfig } from 'vite';

export default defineConfig({
  base: '/fingertip-bubbles/',
  build: {
    chunkSizeWarningLimit: 1000,
  },
});
