/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,html,css}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        glass: {
          white: 'rgba(255, 255, 255, 0.1)',
          dark: 'rgba(16, 16, 16, 0.6)',
          'white-hover': 'rgba(255, 255, 255, 0.15)',
          'dark-hover': 'rgba(16, 16, 16, 0.7)',
        },
        brand: {
          primary: '#1DD1A1',    // Mint green
          secondary: '#5F27CD',  // Purple
          accent: '#FF6B6B',     // Coral
        },
        surface: {
          dark: '#1A1F2C',       // Dark blue-gray
          darker: '#141821',     // Darker blue-gray
          darkest: '#0F1118',    // Almost black
        },
        text: {
          primary: '#FFFFFF',
          secondary: 'rgba(255, 255, 255, 0.7)',
          muted: 'rgba(255, 255, 255, 0.5)',
        }
      },
      borderRadius: {
        'xl': '1rem',    // 16px
        '2xl': '1.5rem', // 24px
        '3xl': '2rem',   // 32px
        'full': '9999px',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        DEFAULT: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '24px',
      },
      boxShadow: {
        glass: '0 4px 30px rgba(0, 0, 0, 0.1)',
        'glass-hover': '0 8px 32px rgba(0, 0, 0, 0.15)',
        'glass-sm': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'glass-lg': '0 8px 32px rgba(0, 0, 0, 0.2)',
        'glow': '0 0 20px rgba(29, 209, 161, 0.3)',
        'glow-hover': '0 0 30px rgba(29, 209, 161, 0.4)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
        'gradient-dark': 'linear-gradient(135deg, rgba(26, 31, 44, 0.8), rgba(20, 24, 33, 0.9))',
      },
    },
  },
  plugins: [],
};