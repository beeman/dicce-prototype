import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import { analyzer } from 'vite-bundle-analyzer';

export default defineConfig({
  plugins: [analyzer({ analyzerMode: 'static' }), nodePolyfills({ exclude: ['fs'] }), react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.mjs',
  },
  build: {
    rollupOptions: {
      external: [
        '@metaplex-foundation/umi-eddsa-web3js',
      ],
    },
  },
});
