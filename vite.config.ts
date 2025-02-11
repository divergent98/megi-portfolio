import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/megi-portfolio/",
  resolve: {
    extensions: ['.tsx', '.ts', '.js'], // Ensure .tsx files are resolved correctly
  },

})
