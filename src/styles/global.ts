import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
 /* Exemplo de carregamento da fonte
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    src: local(''),
        url('/fonts/poppins-v15-latin-300.woff2') format('woff2')
    }
  */


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
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
    }
  `}
`

export default GlobalStyles
