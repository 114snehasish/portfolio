/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        'button-padding': 'var(--spacing-unit)',
      },
      borderColor: {
        secondary: 'var(--secondary-color)',
      },
      colors: {
        secondary: 'var(--secondary-color)',
      },
      animation: {
        shine: 'shine 1s',
      },
      keyframes: {
        shine: {
          '100%': { left: '125%' },
        },
      },
    },
  },
  plugins: [],
};
