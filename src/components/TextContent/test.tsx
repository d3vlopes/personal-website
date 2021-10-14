import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'

import TextContent from '.'

const { getByRole } = screen

describe('<TextContent />', () => {
  it('should render TextContent', () => {
    const { container } = renderWithTheme(
      <TextContent content="<h6>Children</h6>" />,
    )

    const h6 = container.querySelector('h6')

    expect(h6?.tagName.toLowerCase()).toBe('h6')
    expect(getByRole('heading', { name: 'Children' })).toBeInTheDocument()
  })

  it('should match snapshot', () => {
    const { container } = renderWithTheme(
      <TextContent content="<h6>Children</h6>" />,
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
