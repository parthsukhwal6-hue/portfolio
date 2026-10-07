import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => ({
  // Netlify serves from the domain root; GitHub Pages serves from /portfolio/
  base: process.env.NETLIFY ? '/' : mode === 'production' ? '/portfolio/' : '/',
  plugins: [
    react(),
    tailwindcss(),
    babel({ presets: [reactCompilerPreset()] })
  ]
}))
