import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

<<<<<<< HEAD
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/portfolio/' : '/',
  plugins: [
    react(),
    tailwindcss(),
    babel({ presets: [reactCompilerPreset()] })
  ]
}))
=======
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),

    babel({ presets: [reactCompilerPreset()] })
  ],
})
>>>>>>> origin/main
