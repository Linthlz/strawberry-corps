import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // Menambahkan font kustom yang lebih organik/playful
      fontFamily: {
        sans: ['"Inter"', ...defaultTheme.fontFamily.sans],
        // Contoh font serif 'organik' untuk headline
        serif: ['"Playfair Display"', ...defaultTheme.fontFamily.serif],
      },
      // Palet warna "Earthy Strawberry" (Inspirasi Bali Zoo)
      colors: {
        cream: {
          50: '#fefcf9',
          100: '#fdf8f3',
        },
        strawberry: {
          light: '#f87171', // red-400
          DEFAULT: '#ef4444', // red-500
          dark: '#b91c1c', // red-700
        },
        forest: {
          light: '#10b981', // emerald-500
          DEFAULT: '#059669', // emerald-600
          dark: '#065f46', // emerald-800
        },
      },
      // Menambahkan animasi kustom untuk framer-motion
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.5s ease-out',
      },
    },
  },
  plugins: [],
};