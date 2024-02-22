/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      md: '769px'
    },

    extend: {
      backgroundImage: {
        'hero-pattern': "url('/bg-hero.jpg')",
        'hero-pattern-nature': "url('/bg-nature.jpg')",
        'hero-pattern-nature-page': "url('/bg-nature-page.jpg')",
        'hero-pattern-nature-texture': "url('/bg-texture.png')"
      },
      colors: {
        primary: '#004F93',
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
