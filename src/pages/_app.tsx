import Head from 'next/head'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { DefaultSeo } from 'next-seo'
import Script from 'next/script'

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
      <GlobalStyles />
      <DefaultSeo {...SEO} />
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script id="ga-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
      </Script>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
