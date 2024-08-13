import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
        configure: (proxy, options) => {
          // Log any errors
          proxy.on('error', (err, req, res) => {
            console.error('Proxy error:', err);
          });

          // Log proxy request details
          proxy.on('proxyReq', (proxyReq, req, res) => {
            console.log('Request to target:', proxyReq.path);
          });
        }
      },
    },
  },
  plugins: [react()],
});
