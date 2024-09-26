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
      boxShadow: {
        cta: '4px 4px 0 0 var(--secondary-color)',
      },
    },
  },
  plugins: [],
};
