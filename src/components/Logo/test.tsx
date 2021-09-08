import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'

import Logo from '.'

describe('<Logo />', () => {
  it('should render Logo large size by default', () => {
    renderWithTheme(<Logo />)

    const logo = screen.getByLabelText(/LL/i)

    expect(logo).toHaveStyle({
      width: '6rem',
      height: '6rem',
    })
  })
  it('should render Logo small size', () => {
    renderWithTheme(<Logo size="small" />)

    const logo = screen.getByLabelText(/LL/i)

    expect(logo).toHaveStyle({
      width: '4rem',
      height: '4rem',
    })
  })
})
