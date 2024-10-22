module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#3D37F1',
        secondary: '#FFFFFF',
        background: '#FCFCFC',
        error: '#F13766',
        title: '#242565',
      },
      backgroundImage: {
        'header-background': "url('./assets/header-background.webp')",
      },
    },
  },
  plugins: [],
}
