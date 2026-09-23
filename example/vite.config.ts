import { copyFileSync, readFileSync } from 'node:fs';
import { fileURLToPath, URL } from 'node:url';
import react from '@vitejs/plugin-react';
import { defineConfig, Plugin } from 'vite';

const fromHere = (path: string) => fileURLToPath(new URL(path, import.meta.url));

// GitHub Pages has no SPA rewrites, but it serves /foo from foo.html with a 200. Emit a copy of
// index.html per route so deep links load directly; 404.html catches anything else.
const githubPagesRoutes = (): Plugin => ({
    name: 'github-pages-routes',
    apply: 'build',
    closeBundle() {
        const routesSource = readFileSync(fromHere('./src/componentRoutes.tsx'), 'utf8');
        const routes = [...routesSource.matchAll(/route: '\/([^']+)'/g)].map(match => match[1]);
        for (const route of [...routes, '404']) {
            copyFileSync(fromHere('./dist/index.html'), fromHere(`./dist/${route}.html`));
        }
    },
});

export default defineConfig(({ command, isPreview }) => ({
    // GitHub Pages serves the site from /react-component-library/.
    base: command === 'build' || isPreview ? '/react-component-library/' : '/',
    plugins: [react(), githubPagesRoutes()],
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
