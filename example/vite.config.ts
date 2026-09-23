import { fileURLToPath, URL } from 'node:url';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const fromHere = (path: string) => fileURLToPath(new URL(path, import.meta.url));

export default defineConfig(({ command, isPreview }) => ({
    // GitHub Pages serves the site from /react-component-library/.
    base: command === 'build' || isPreview ? '/react-component-library/' : '/',
    plugins: [react()],
    resolve: {
        alias: {
            // Consume the library straight from source so edits hot-reload without a library build.
            '@nickjmorrow/react-component-library': fromHere('../src/index.ts'),
            '~': fromHere('../src'),
            src: fromHere('./src'),
        },
    },
    server: { port: 8080 },
    // The demo ships as a single bundle; it's a docs site, not something to code-split.
    build: { chunkSizeWarningLimit: 1000 },
}));
