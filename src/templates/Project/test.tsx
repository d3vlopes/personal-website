import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'

import menuMock from 'components/Menu/mock'
import footerMock from 'components/ContactLink/mock'
import projectMock from 'components/Project/mock'

import ProjectTemplate, { ProjectTemplateProps } from '.'

const props: ProjectTemplateProps = {
  menu: menuMock,
  footer: footerMock,
  banner: {
    src: '/img/project/won-games.png',
    projectName: 'Project Name',
    projectUrl: 'https://www.projecturl.com',
  },
  content: '<p>Loren ipsum dolor<p>',
  projectCodeUrl: 'https://www.google.com',
  projectDesignUrl: 'https://www.behance.net',
  moreProjects: projectMock.slice(0, 3),
}

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({ asPath: '/project/project-name' })),
}))

jest.mock('components/Menu', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Menu"></div>
    },
  }
})

jest.mock('components/ProjectBanner', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock ProjectBanner"></div>
    },
  }
})

jest.mock('components/TextContent', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock TextContent"></div>
    },
  }
})

jest.mock('components/Project', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Project"></div>
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

const { getByTestId, getByRole, getAllByTestId } = screen

describe('<ProjectTemplate />', () => {
  it('should render ProjectTemplate', () => {
    renderWithTheme(<ProjectTemplate {...props} />)

    const buttonViewCode = getByRole('button', { name: 'Ver código' })
    const buttonViewDesign = getByRole('button', { name: 'Ver design' })
    const moreProjectsHeading = getByRole('heading', { name: 'Mais projetos' })

    expect(getByTestId('Mock Menu')).toBeInTheDocument()

    expect(getByTestId('Mock ProjectBanner')).toBeInTheDocument()
    expect(getByTestId('Mock TextContent')).toBeInTheDocument()
    expect(buttonViewCode).toBeInTheDocument()
    expect(buttonViewDesign).toBeInTheDocument()
    expect(moreProjectsHeading).toBeInTheDocument()
    expect(getAllByTestId('Mock Project')).toHaveLength(3)

    expect(getByTestId('Mock Footer')).toBeInTheDocument()
  })
})
