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
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        'content-default': 'var(--text-color)',
        content: 'var(--content-color)',
        caption: 'var(--caption-color)',
        background: 'var(--background-color)',
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
