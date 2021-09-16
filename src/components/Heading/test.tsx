import { screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { renderWithTheme } from 'utils/test/helpers'

import theme from 'styles/themes/default'

import Heading from '.'

const { getByRole } = screen

describe('<Heading />', () => {
  it('should render by default', () => {
    renderWithTheme(<Heading>Title</Heading>)

    const heading = getByRole('heading', { name: /title/i })

    expect(heading.tagName.toLowerCase()).toBe('h1')
    expect(heading).toHaveStyle({
      'font-size': '3.6rem',
    })
  })

  it('should  render correct heading sizes', () => {
    const { rerender } = renderWithTheme(<Heading size="large">Title</Heading>)

    const heading = getByRole('heading', { name: /title/i })

    expect(heading).toHaveStyle({
      'font-size': '2.2rem',
    })

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="xlarge">Title</Heading>
      </ThemeProvider>,
    )

    expect(heading).toHaveStyle({
      'font-size': '2.4rem',
    })

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="xxlarge">Title</Heading>
      </ThemeProvider>,
    )

    expect(heading).toHaveStyle({
      'font-size': '2.6rem',
    })

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="xxxlarge">Title</Heading>
      </ThemeProvider>,
    )

    expect(heading).toHaveStyle({
      'font-size': '3.2rem',
    })
    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="huge">Title</Heading>
      </ThemeProvider>,
    )

    expect(heading).toHaveStyle({
      'font-size': '3.6rem',
    })
    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="highlight">Title</Heading>
      </ThemeProvider>,
    )

    expect(heading).toHaveStyle({
      'font-size': '4.2rem',
    })
  })

  it('should render correct heading element', () => {
    const { container } = renderWithTheme(<Heading as="h6">Title</Heading>)

    const h6 = container.querySelector('h6')

    expect(h6?.tagName.toLowerCase()).toBe('h6')
  })

  it('should render line bottom', () => {
    renderWithTheme(
      <Heading size="large" lineBottom>
        Title
      </Heading>,
    )

    const heading = getByRole('heading', { name: /title/i })

    expect(heading).toHaveStyleRule('border-bottom', '5px solid #6D59A8', {
      modifier: '::after',
    })
  })
})
