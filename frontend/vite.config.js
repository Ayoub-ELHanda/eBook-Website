import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [vue()],
    server: {
        port: 5173,  // You can change the port if needed
        open: true    // Automatically opens the browser
    },
    base: '/',  // Ensure the base path is set for proper routing
});
