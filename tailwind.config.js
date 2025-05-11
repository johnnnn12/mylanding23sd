module.exports = {
  content: ['./index.html','./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#EAEAEA',
        bg: '#000000',
        dark: '#111111'
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif']
      }
    }
  },
  plugins: []
}