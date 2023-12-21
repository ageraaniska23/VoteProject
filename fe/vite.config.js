import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ReactRefreshPlugin()],
});
