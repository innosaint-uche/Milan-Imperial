import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import devApi from './vite-plugins/dev-api'

// https://vite.dev/config/
export default defineConfig({
  // devApi mounts the /api serverless handlers on the dev server so the contact
  // form works under `npm run dev`. It is a no-op in `vite build`.
  plugins: [react(), devApi()],
})
