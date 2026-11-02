import process from 'node:process'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // On GitHub Pages the site is served from /<repo-name>/
  base: process.env.GITHUB_ACTIONS ? '/ProductInventory/' : '/',
  plugins: [react()],
})
