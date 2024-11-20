import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb', '**/*.gltf'],
  build: {
    rollupOptions: {
      // If you want to externalize something, add it here
      // external: ['/src/main.jsx'], // Not recommended unless necessary
    },
  },
})
