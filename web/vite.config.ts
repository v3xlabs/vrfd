import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import pluginRewriteAll from 'vite-plugin-rewrite-all';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [tsconfigPaths(), react(), pluginRewriteAll()],
});
