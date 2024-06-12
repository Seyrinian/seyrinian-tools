import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  root: path.resolve(__dirname, 'src'),
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'seyrinian-tools',
      fileName: (format) => `index.${format}.js`,
    },
    outDir: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './'),
    },
  },
});
