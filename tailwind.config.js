/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#45dfa4',
          light: '#5ee4b0',
          dark: '#3bc68d',
        },
        accent: {
          DEFAULT: '#ffafd3',
          light: '#ffbddb',
          dark: '#ff9fc9',
        },
        dark: {
          DEFAULT: '#1a1a1a',
          lighter: '#2a2a2a',
          darker: '#121212',
        }
      },
      borderRadius: {
        DEFAULT: '0.75rem',
      },
    },
  },
  plugins: [],
}; 