import { RouterContext } from 'next/dist/shared/lib/router-context'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'
import theme from 'styles/themes/default'

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider,
  },
  backgrounds: {
    default: 'primary',
    values: [
      {
        name: 'primary',
        value: theme.colors.bg.main,
      },
      {
        name: 'secondary',
        value: theme.colors.bg.secondary.main,
      },
      {
        name: 'secondary-light',
        value: theme.colors.bg.secondary.light,
      },
      {
        name: 'secondary-dark',
        value: theme.colors.bg.secondary.dark,
      },
    ],
  },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
]
