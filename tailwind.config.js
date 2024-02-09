/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: '#09B451',
      white: '#fff',
      black: '#000',
      'gray-op': 'rgba(64, 64, 64, 0.80)'
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./src/assets/bg-hero.jpg')"
      }
    }
  },
  plugins: []
}
