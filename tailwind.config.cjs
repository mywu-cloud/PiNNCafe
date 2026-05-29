/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary:   '#00d4ff',
          secondary: '#0ea5e9',
          accent:    '#f59e0b',
          success:   '#10b981',
          danger:    '#ef4444',
        },
        dark: {
          900: '#070b14',
          800: '#0d1626',
          700: '#111e33',
          600: '#1a2a45',
          500: '#243756',
        },
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in':    'fadeIn 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)'    },
        },
      },
    },
  },
  plugins: [],
};
