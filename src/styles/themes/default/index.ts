export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem',
  },
  border: {
    radius: {
      small: '0.4rem',
      medium: '0.6rem',
      large: '1.2rem',
    },
  },
  font: {
    highlight: 'CodeNext-ExtraBold',
    heading: 'Gilroy-Bold',
    body: "Rubik, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    weight: {
      regular: 400,
      medium: 500,
    },
    sizes: {
      xxxsmall: '1.2rem',
      xxsmall: '1.4rem',
      xsmall: '1.6rem',
      small: '1.8rem',
      medium: '2rem',
      large: '2.2rem',
      xlarge: '2.4rem',
      xxlarge: '2.6rem',
      xxxlarge: '3.2rem',
      huge: '3.6rem',
      highlight: '4.2rem',
    },
  },
  colors: {
    primary: {
      light: '#7864B2',
      main: '#6D59A8',
      dark: '#543F8C',
    },
    secondary: {
      main: '#83A848',
      dark: '#76993D',
    },
    complementary: {
      light: '#F7FDFF',
      main: '#DEE7EA',
      dark: '#CAD5D9',
    },
    bg: {
      main: '#23252F',
      secondary: {
        light: '#484762',
        main: '#3B3A51',
        dark: '#302F43',
      },
    },
    text: {
      light: '#FFFFFF',
      dark: '#1A1C23',
    },
    white: '#FFFFFF',
    grey: '255, 255, 255, 0.5',
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '8rem',
    huge: '12rem',
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50,
  },
  transition: {
    slow: '0.5s ease-in-out',
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out',
  },
} as const
