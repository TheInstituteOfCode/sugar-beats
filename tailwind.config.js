/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_includes/**/*.{html,js,md}',
    './_layouts/**/*.{html,js,md}',
    './_*/*.{html,js,md}',
    './*.{html,js,md}'
  ],
  theme: {
    extend: {
      colors: {
        blue: 'var(--blue)',
        cream: 'var(--cream)',
        yellow: 'var(--yellow)',
        rust: 'var(--rust)',
        
      }
    },
  },
  plugins: [],
}
