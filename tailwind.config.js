module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        pink: {
          500: '#FF6B8B', // Color principal basado en el logo
          600: '#E55A7B',
        },
      },
    },
  },
  plugins: [],
}