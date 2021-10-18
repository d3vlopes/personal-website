import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'

import mockMenu from 'components/Menu/mock'
import mockFooter from 'components/ContactLink/mock'
import mockCardProfile from 'components/CardProfile/mock'
import mockCardTimeline from 'components/CardTimeline/mock'

import About, { AboutTemplateProps } from '.'

const props: AboutTemplateProps = {
  menu: mockMenu,
  footer: mockFooter,
  title: 'Sobre mim',
  subtitle: 'Um pouco sobre minha história, interesses e sonhos.',
  cardProfile: mockCardProfile,
  cardTimeline: mockCardTimeline,
}

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({ asPath: '/about' })),
}))

jest.mock('components/Menu', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Menu"></div>
    },
  }
})

jest.mock('components/CardProfile', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock CardProfile"></div>
    },
  }
})

jest.mock('components/CardTimeline', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock CardTimeline"></div>
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

const { getByRole, getByTestId, getAllByTestId } = screen

describe('<About />', () => {
  it('should render About', () => {
    renderWithTheme(<About {...props} />)

    expect(getByTestId('Mock Menu')).toBeInTheDocument()

    expect(getByRole('heading', { name: 'Sobre mim' })).toBeInTheDocument()
    expect(
      getByRole('heading', {
        name: 'Um pouco sobre minha história, interesses e sonhos.',
      }),
    ).toBeInTheDocument()

    expect(getByTestId('Mock CardProfile')).toBeInTheDocument()
    expect(getAllByTestId('Mock CardTimeline')).toHaveLength(4)

    expect(getByTestId('Mock Footer')).toBeInTheDocument()
  })
})
