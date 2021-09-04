module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "lighting-thief": "#727AA9",
        "primary":"#F8FCFF",
        "secondary":"#1CC4CA",
        "aquo":"#2B80AB",
        "aquo-dark":"#1B76A3",
        "aniston":"#2A8D91",
        "aniston-light":"#d5f0f1",
        "blaco-traslucente":"#FFDFAA"
      
      },
      fontFamily: {
        'IBM-Plex': ['"IBM Plex Sans"', 'sans-serif'] // Ensure fonts with spaces have " " surrounding it.
      },
      spacing: {
        '100': '28rem',
      }
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
