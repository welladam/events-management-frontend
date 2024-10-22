module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#3D37F1',
        secondary: '#FFFFFF',
        error: '#F13766',
      },
      backgroundImage: {
        'header-background': "url('./assets/header-background.webp')",
      },
    },
  },
  plugins: [],
}
