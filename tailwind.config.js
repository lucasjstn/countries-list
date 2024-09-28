module.exports = {

  content: [
    'index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {},
      screen: {
        'xs': '320px'
      }
    },
  },
  plugins: [require("@tailwindcss/typography"), require('daisyui')],
  daisyui: {
    themes: ['retro', 'coffee']
  }
}
