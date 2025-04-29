import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Shopi/" /* As I'm deploying the app to GitHub Pages the base should be the repository name */
})
