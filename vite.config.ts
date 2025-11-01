/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
   plugins: [react()],
   test: {
      environment: 'jsdom',
      setupFiles: './setupTest.ts',
      globals: true,
      css: true,
      restoreMocks: true,
      clearMocks: true,
   },
});
