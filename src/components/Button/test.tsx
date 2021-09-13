import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'
import { Github } from '@styled-icons/boxicons-logos'

import Button from '.'

const { getByRole, getByTestId } = screen

describe('<Button />', () => {
  it('should render by default', () => {
    renderWithTheme(
      <Button variant="primary" size="medium">
        Button
      </Button>,
    )

    const button = getByRole('button', { name: /button/i })

    expect(button).toBeInTheDocument()
    expect(button).toHaveStyle({
      'background-color': '#6D59A8',
      'font-size': '2.2rem',
      width: '21.5rem',
      height: '6.2rem',
    })
  })

  it('should render the variant secondary ', () => {
    renderWithTheme(<Button variant="secondary">Button</Button>)

    const button = getByRole('button', { name: /button/i })

    expect(button).toBeInTheDocument()
    expect(button).toHaveStyle({
      'background-color': '#83A848',
    })
  })

  it('should render the variant outline ', () => {
    renderWithTheme(<Button variant="outline">Button</Button>)

    const button = getByRole('button', { name: /button/i })

    expect(button).toBeInTheDocument()
    expect(button).toHaveStyle({
      border: '1px solid #DEE7EA',
      'background-color': 'transparent',
    })
  })

  it('should render expand version', () => {
    renderWithTheme(<Button expand>Button</Button>)

    const button = getByRole('button', { name: /button/i })

    expect(button).toHaveStyle({
      width: '31.5rem',
      height: '6.2rem',
    })
  })

  it('should render small size', () => {
    renderWithTheme(<Button size="small">Button</Button>)

    const button = getByRole('button', { name: /button/i })

    expect(button).toHaveStyle({
      'font-size': '1.8rem',
      width: '17.5rem',
      height: '5rem',
    })
  })

  it('should render large size', () => {
    renderWithTheme(<Button size="large">Button</Button>)

    const button = getByRole('button', { name: /button/i })

    expect(button).toHaveStyle({
      'font-size': '2.6rem',
      width: '28.8rem',
      height: '7.6rem',
    })
  })

  it('should render an icon version', () => {
    renderWithTheme(
      <Button icon={<Github data-testid="icon" />}>Button</Button>,
    )

    const button = getByRole('button', { name: /button/i })
    const icon = getByTestId('icon')

    expect(button).toBeInTheDocument()
    expect(icon).toBeInTheDocument()
  })

  it('should render Button as a link', () => {
    renderWithTheme(
      <Button as="a" href="/link">
        Button
      </Button>,
    )

    expect(screen.getByRole('link', { name: /button/i })).toHaveAttribute(
      'href',
      '/link',
    )
  })

  it('should up while hover', async () => {
    renderWithTheme(<Button hoverUp>Button</Button>)

    const button = getByRole('button', { name: /button/i })

    expect(button).toHaveStyleRule('transform', 'translateY(-0.5rem)', {
      modifier: ':hover',
    })
  })

  it('should match snapshot', () => {
    const { container } = renderWithTheme(<Button>Button</Button>)

    expect(container.firstChild).toMatchSnapshot()
  })
})
