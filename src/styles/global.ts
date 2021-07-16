import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  /* Highlight */
  @font-face {
  font-family: 'CodeNext-ExtraBold';
  font-style: normal;
  font-weight: normal;
  src: local(''), url('/fonts/CodeNext-ExtraBold.woff2') format('woff2');
  }

  /* Heading */
  @font-face {
  font-family: 'Gilroy-Bold';
  font-style: normal;
  font-weight: normal;
  src: local(''), url('/fonts/Gilroy-Bold.woff') format('woff');
  }

  /* Body */
  @font-face {
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 400;
  src: local(''),
       url('/fonts/rubik-v14-latin-400.woff2') format('woff2')
  }

  @font-face {
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 500;
  src: local(''),
       url('/fonts/rubik-v14-latin-500.woff2') format('woff2')
  }


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    html,
    body,
    #__next {
      height: 100%;
    }

    body {
      font-family: ${theme.font.body};
      font-size: ${theme.font.sizes[400]};
    }
  `}
`

export default GlobalStyles
