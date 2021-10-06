import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'

import mockMenu from 'components/Menu/mock'
import mockFooter from 'components/ContactLink/mock'

import Base from '.'

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({ asPath: '/' })),
}))

jest.mock('components/Menu', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Menu"></div>
    },
  }
})

jest.mock('components/Footer', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Footer"></div>
    },
  }
})

const props = {
  menu: mockMenu,
  footer: mockFooter,
}

const { getByTestId, getByRole } = screen

describe('<Base />', () => {
  it('should render Base', () => {
    renderWithTheme(
      <Base {...props}>
        <h1>Heading</h1>
      </Base>,
    )

    expect(getByTestId('Mock Menu')).toBeInTheDocument()
    expect(getByTestId('Mock Footer')).toBeInTheDocument()
    expect(getByRole('heading', { name: /heading/i })).toBeInTheDocument()
  })
})
