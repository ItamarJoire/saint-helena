/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '600px',
      lg: '1100px'
    },

    extend: {
      backgroundImage: {
        'hero-pattern': "url('/bg-hero.jpg')",
        'hero-pattern-texture': "url('/bg-texture.png')",
        'hero-pattern-camb': "url('/bg-camb.jpg')"
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
