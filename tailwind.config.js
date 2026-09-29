/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        background: 'var(--bg-color)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'accent-primary': 'var(--accent-primary)',
        'accent-secondary': 'var(--accent-secondary)',
        'card-bg': 'var(--card-bg)',
        'border-color': 'var(--border-color)',
      },
      backgroundImage: {
        'gradient-text': 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
      }
    },
  },
  plugins: [],
}
