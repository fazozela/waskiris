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
          500: '#FF6B8B',
          600: '#E55A7B',
        },
      },
      keyframes: {
        'bounce-in': {
          '0%': {
            opacity: '0',
            transform: 'translateY(50px)'
          },
          '60%': {
            opacity: '0.8',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      },
      animation: {
        'bounce-in': 'bounce-in 0.8s ease-out'
      }
    },
  },
  plugins: [],
}
