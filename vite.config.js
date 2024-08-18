import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({ 
    registerType: 'autoUpdate',
    workbox: {
      cleanupOutdatedCaches: false
    },
    includeAssets: ['nu.png', 'nu.svg'],
    manifest: {
      name: 'Nubank',
      short_name: 'nu',
      description: 'Nubank o roxinho...',
      theme_color: '#9c01d8',
      icons: [
        {
          src: '/nu.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: '/nu.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ],
      display: "fullscreen"
    }
   })
  ],
  optimizeDeps: {
    exclude: ['js-big-decimal']
  },
  test: {
    environment: 'jsdom'
  },
})
