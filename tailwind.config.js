/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0D2B4E',
        yellow: '#F4C542',
        green: '#3E8E3A',
        blue: '#2F6FBF',
        red: '#E84A3C',
        offwhite: '#F7F5EF'
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1rem',
          md: '1.5rem',
          lg: '2rem',
          xl: '2.5rem'
        }
      },
      boxShadow: {
        soft: '0 8px 30px rgba(13, 43, 78, 0.08)'
      }
    }
  },
  plugins: []
}


