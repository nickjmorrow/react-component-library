import { fileURLToPath, URL } from 'node:url';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { defineConfig } from 'vitest/config';
import pkg from './package.json' with { type: 'json' };

// Everything the consumer installs (deps + peers) stays out of the bundle, including subpath imports.
const externalPackages = [...Object.keys(pkg.dependencies), ...Object.keys(pkg.peerDependencies)];
const isExternal = (id: string) => externalPackages.some(name => id === name || id.startsWith(`${name}/`));

export default defineConfig({
    plugins: [react(), dts({ include: ['src'], exclude: ['src/**/*.test.tsx'], rollupTypes: true })],
    resolve: {
        alias: { '~': fileURLToPath(new URL('./src', import.meta.url)) },
    },
    build: {
        lib: {
            entry: 'src/index.ts',
            formats: ['es', 'cjs'],
            fileName: format => (format === 'es' ? 'index.js' : 'index.cjs'),
            cssFileName: 'style',
        },
        rolldownOptions: { external: isExternal },
        sourcemap: true,
    },
    test: {
        environment: 'jsdom',
        include: ['src/**/*.test.{ts,tsx}'],
    },
});
