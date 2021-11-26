import Head from 'next/head'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { DefaultSeo } from 'next-seo'

import SEO from '../../next-seo.config'

import GlobalStyles from 'styles/global'
import theme from 'styles/themes/default'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Leandro Lopes | Desenvolvedor Frontend, UI Design</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Site pessoal onde falo sobre mim e dos meus trabalhos como desenvolvedor e design"
        />
      </Head>
      <DefaultSeo {...SEO} />
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
