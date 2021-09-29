// import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'

import Form from '.'

describe('<Form />', () => {
  it('should render Form', () => {
    renderWithTheme(<Form />)
  })
})
