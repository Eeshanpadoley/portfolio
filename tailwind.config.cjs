module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#6c5ce7',
        accent: '#7c3aed'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: []
}
