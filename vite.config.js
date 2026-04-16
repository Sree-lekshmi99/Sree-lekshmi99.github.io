import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For project pages (https://<user>.github.io/<repo>/) set base to '/<repo>/'.
// For a user site (https://<user>.github.io/) leave base as '/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
