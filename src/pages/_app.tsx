import NextNprogress from 'nextjs-progressbar'
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
        <title>Leandro Lopes | Desenvolvedor Full Stack, UX/UI Design</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Site pessoal onde mostro um pouco sobre mim e dos meus trabalhos como desenvolvedor e design"
        />
        <meta
          name="google-site-verification"
          content="SHR0iLsieaSD3nyflAp7wd7TkRY_uGLtY06Tl30RbNU"
        />
      </Head>
      <DefaultSeo {...SEO} />
      <GlobalStyles />
      <NextNprogress
        color="#6D59A8"
        startPosition={0.3}
        stopDelayMs={200}
        height={5}
        options={{
          showSpinner: false,
        }}
      />

      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
