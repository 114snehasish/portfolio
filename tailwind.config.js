/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        'button-padding': 'var(--spacing-unit)',
      },
      colors: {
        primary: 'rgb(var(--primary-rgb) / <alpha-value>)',
        secondary: 'rgb(var(--secondary-rgb) / <alpha-value>)',
        'content-default': 'rgb(var(--text-rgb) / <alpha-value>)',
        content: 'rgb(var(--content-rgb) / <alpha-value>)',
        caption: 'rgb(var(--caption-rgb) / <alpha-value>)',
        background: 'rgb(var(--primary-rgb) / <alpha-value>)',
        'background-transparent': 'var(--background-transparent)',
      },
      boxShadow: {
        cta: '4px 4px 0 0 var(--secondary-color)',
      },
      fontFamily: {
        'fira-code': ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
};
