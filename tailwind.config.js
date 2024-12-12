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
          dark: 'rgba(0, 0, 0, 0.7)',
          'white-hover': 'rgba(255, 255, 255, 0.15)',
          'dark-hover': 'rgba(0, 0, 0, 0.8)',
        },
        brand: {
          primary: '#00FFFF',    // Electric Blue
          secondary: '#FF00FF',  // Hot Pink
          accent: '#39FF14',     // Toxic Green
          yellow: '#FFE700',     // Cyber Yellow
        },
        surface: {
          dark: '#1A1A1A',       // Dark gray
          darker: '#0D0D0D',     // Darker gray
          darkest: '#000000',    // Pure black
          purple: '#2D0076',     // Dark Purple
          red: '#FF0033',        // Deep Red
          steel: '#2B2B2B',      // Steel Gray
        },
        text: {
          primary: '#FFFFFF',
          secondary: 'rgba(255, 255, 255, 0.7)',
          muted: 'rgba(255, 255, 255, 0.5)',
          neon: {
            blue: '#00FFFF',
            pink: '#FF00FF',
            green: '#39FF14',
            yellow: '#FFE700',
          }
        }
      },
      borderRadius: {
        DEFAULT: '0.75rem',  // 12px consistent rounding
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
        glass: '0 4px 30px rgba(0, 0, 0, 0.3)',
        'glass-hover': '0 8px 32px rgba(0, 0, 0, 0.4)',
        'glass-sm': '0 2px 8px rgba(0, 0, 0, 0.3)',
        'glass-lg': '0 8px 32px rgba(0, 0, 0, 0.5)',
        'neon-blue': '0 0 10px rgba(0, 255, 255, 0.3)',
        'neon-pink': '0 0 10px rgba(255, 0, 255, 0.3)',
        'neon-green': '0 0 10px rgba(57, 255, 20, 0.3)',
        'neon-yellow': '0 0 10px rgba(255, 231, 0, 0.3)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-glass': 'linear-gradient(135deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8))',
        'gradient-dark': 'linear-gradient(135deg, rgba(26, 26, 26, 0.9), rgba(0, 0, 0, 0.95))',
        'gradient-cyber': 'linear-gradient(45deg, #00FFFF, #FF00FF)',
        'gradient-neon': 'linear-gradient(90deg, #39FF14, #FFE700)',
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'tech': ['Share Tech Mono', 'monospace'],
        'sans': ['Roboto', 'sans-serif'],
      },
      animation: {
        'glitch': 'glitch 1s infinite',
        'scan': 'scan 2s linear infinite',
        'pulse-neon': 'pulse-neon 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '33%': { transform: 'translate(-5px, 2px)' },
          '66%': { transform: 'translate(5px, -2px)' },
        },
        scan: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '0% 100%' },
        },
        'pulse-neon': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
    },
  },
  plugins: [],
};