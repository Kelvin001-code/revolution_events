import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/revolution_events/',
  plugins: [react()],
  server: {
    allowedHosts: ['thirstiest-divina-noncentrally.ngrok-free.dev', 'unboring-evelia-topologic.ngrok-free.dev', 'all']
  },
})