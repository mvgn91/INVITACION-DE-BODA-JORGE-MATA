/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'fraunces': ['Fraunces', 'serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        // Paleta de colores elegante sin grises ni verdes
        'burgundy': {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#f9d1e7',
          300: '#f4a5d1',
          400: '#ed70bb',
          500: '#c4176a', // C4176A - Rosa principal
          600: '#a8145a',
          700: '#8c114a',
          800: '#700e3b',
          900: '#590f2f', // 59103F - Borgoña oscuro
        },
        'wine': {
          50: '#fef7f7',
          100: '#fdeeee',
          200: '#fbdcdc',
          300: '#f8c4c4',
          400: '#f4a6a6',
          500: '#890f2d', // 890F2D - Vino oscuro
          600: '#7b0d28',
          700: '#6d0b23',
          800: '#5f091e',
          900: '#510719',
        },
        'pearl': {
          50: '#fefefe',
          100: '#fdfdfd',
          200: '#fbfbfb',
          300: '#f8f8f8',
          400: '#f5f5f5',
          500: '#d1dadc', // D1DADC - Perla principal
          600: '#bcc7ca',
          700: '#a7b4b8',
          800: '#92a1a6',
          900: '#7d8e94',
        },
        // Colores de acento
        'rose': '#c4176a',
        'pearl-light': '#d1dadc',
        'burgundy-dark': '#590f2f',
        'wine-dark': '#890f2d',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}

