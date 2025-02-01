module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // สำหรับ React
    './public/index.html' // สำหรับ HTML
  ],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
}
