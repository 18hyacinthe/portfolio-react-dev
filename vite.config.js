import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      include: '**/*.{js,jsx}',
      babel: {
        plugins: [
          ['@babel/plugin-transform-react-jsx', { runtime: 'automatic' }]
        ]
      }
    })
  ],
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx'
      }
    }
  },
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.jsx?$/,
    exclude: []
  },
  server: {
    host: true,
    port: process.env.PORT || 3000,
    strictPort: true,
    allowedHosts: [
      'portfolio-react-dev.onrender.com',
      '.onrender.com'
    ]
  },
  preview: {
    port: process.env.PORT || 3000,
    host: true,
    strictPort: true
  }
})
