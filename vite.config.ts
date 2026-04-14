import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import react from '@vitejs/plugin-react'           // or whatever you're using
import { cloudflare } from '@cloudflare/vite-plugin'

export default defineConfig({
  plugins: [
    tanstackStart(),
    cloudflare({
      viteEnvironment: { name: 'ssr' },
    }),
    react(),
  ],
})