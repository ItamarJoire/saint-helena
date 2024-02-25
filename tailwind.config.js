/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      md: '769px'
    },

    extend: {
      backgroundImage: {
        'hero-pattern': "url('/bg-hero.png')",
        'hero-pattern-texture': "url('/bg-texture.png')"
      },
      colors: {
        primary: '#004E92',
        'primary-dark': '#003461',
        'primary-light': '#006BC7',
        'primary-2': '#fff',
        'secondary-yellow': '#F6B115',
        'secondary-yellow-dark': '#CE9108',
        'secondary-red': '#E0040B'
      }
    }
  },
  plugins: []
}
