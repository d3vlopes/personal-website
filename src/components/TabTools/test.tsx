import { screen, fireEvent } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'

import TabTools from '.'
import mock from './mock'

const { getByTestId, getByRole } = screen

const tools = {
  developer: mock.developer,
  design: mock.design,
}

describe('<TabTools />', () => {
  it('should render TabTools', () => {
    renderWithTheme(<TabTools {...tools} />)

    const iconDevelopment = getByTestId('icon-development')
    const iconDesign = getByTestId('icon-design')

    const developmentButton = getByRole('button', { name: 'Development' })
    const designButton = getByRole('button', { name: 'Design' })

    const developmentContent = getByTestId('content-development')
    const designContent = getByTestId('content-design')

    expect(iconDevelopment).toBeInTheDocument()
    expect(iconDesign).toBeInTheDocument()
    expect(developmentButton).toBeInTheDocument()
    expect(designButton).toBeInTheDocument()

    expect(developmentContent.getAttribute('aria-hidden')).toBe('false')
    expect(designContent.getAttribute('aria-hidden')).toBe('true')

    expect(developmentContent).toHaveStyle({
      display: 'flex',
    })
    expect(designContent).toHaveStyle({
      display: 'none',
    })
  })

  it('should change tab active on click', () => {
    renderWithTheme(<TabTools {...tools} />)

    const developmentButton = getByRole('button', { name: 'Development' })
    const designButton = getByRole('button', { name: 'Design' })

    const developmentContent = getByTestId('content-development')
    const designContent = getByTestId('content-design')

    fireEvent.click(designButton)

    expect(developmentContent.getAttribute('aria-hidden')).toBe('true')
    expect(designContent.getAttribute('aria-hidden')).toBe('false')

    expect(developmentContent).toHaveStyle({
      display: 'none',
    })
    expect(designContent).toHaveStyle({
      display: 'flex',
    })

    fireEvent.click(developmentButton)

    expect(developmentContent.getAttribute('aria-hidden')).toBe('false')
    expect(designContent.getAttribute('aria-hidden')).toBe('true')
  })

  it('should match snapshot', () => {
    const { container } = renderWithTheme(<TabTools {...tools} />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
