/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1200px',
      xl: '1440px',
    },

    fontFamily: {
      poppins: 'Poppins',
    },
    extend: {
      colors: {
        airbnbRed: '#FF385C',
        airbnbGrey: '#6A6A6A',
        airbnbGrey2: '#DDDDDD',
        airbnbGrey3: 'rgba(235, 235, 235, 0.5)',
        airbnbGrey4: '#F7F7F7',
      },
    },
  },
  plugins: [],
};
