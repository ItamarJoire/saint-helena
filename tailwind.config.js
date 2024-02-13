/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      md: '769px'
    },

    extend: {
      backgroundImage: {
        'hero-pattern': "url('./src/assets/bg-hero.jpg')"
      },
      colors: {
        primary: '#212121'
      }
    }
  },
  plugins: []
}
