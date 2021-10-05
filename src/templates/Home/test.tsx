import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'

import mockMenu from 'components/Menu/mock'
import mockFooter from 'components/ContactLink/mock'
import mockHero from 'components/Hero/mock'
import mockSkills from 'components/CardSkill/mock'

import Home, { HomeTemplateProps } from '.'

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

jest.mock('components/Hero', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Hero"></div>
    },
  }
})

jest.mock('components/CardSkill', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock CardSkills"></div>
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

const props: HomeTemplateProps = {
  menu: mockMenu,
  footer: mockFooter,
  hero: mockHero,
  skills: mockSkills,
}

const { getByTestId, getAllByTestId, getByRole } = screen

describe('<Home />', () => {
  it('should render Home', () => {
    renderWithTheme(<Home {...props} />)

    expect(getByTestId('Mock Menu')).toBeInTheDocument()
    expect(getByTestId('Mock Hero')).toBeInTheDocument()

    expect(getByRole('heading', { name: 'Qualidades' })).toBeInTheDocument()
    expect(getAllByTestId('Mock CardSkills')).toHaveLength(4)

    expect(getByTestId('Mock Footer')).toBeInTheDocument()
  })
})
