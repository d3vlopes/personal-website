export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem',
  },
  border: {
    radius: '1.2rem',
  },
  font: {
    highlight: 'CodeNext-ExtraBold',
    heading: 'Gilroy-Bold',
    body: "Rubik, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    weight: {
      400: 400,
      500: 500,
    },
    sizes: {
      200: '1.2rem',
      300: '1.4rem',
      400: '1.6rem',
      450: '1.8rem',
      500: '2rem',
      550: '2.2rem',
      600: '2.4rem',
      700: '2.6rem',
      800: '3.6rem',
      900: '4.2rem',
    },
  },
  colors: {
    primary: '#6D59A8',
    secondary: '#3B3A51',
    mainBg: '#23252F',
    text: '#FFFFFF',
    contrast: '#1A1C23',
  },
  spacings: {
    300: '0.8rem',
    400: '1.6rem',
    500: '2.4rem',
    600: '3.2rem',
    700: '4.0rem',
    800: '4.8rem',
    900: '8rem',
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50,
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out',
  },
} as const
