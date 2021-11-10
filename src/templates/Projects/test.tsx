import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'
import userEvent from '@testing-library/user-event'

import menuMock from 'components/Menu/mock'
import footerMock from 'components/ContactLink/mock'
import projectsMock from 'components/Project/mock'

import Projects, { ProjectsTemplateProps } from '.'

const props: ProjectsTemplateProps = {
  menu: menuMock,
  footer: footerMock,
  title: 'Projetos',
  subtitle: 'Conheça um pouco mais do meu trabalho.',
  projects: projectsMock,
}

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({ asPath: '/projects' })),
}))

jest.mock('components/Menu', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Menu"></div>
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

const { getByRole, getByTestId, getAllByTestId } = screen

describe('<Projects />', () => {
  it('should render Projects', () => {
    renderWithTheme(<Projects {...props} />)

    const title = getByRole('heading', { name: 'Projetos' })
    const subtitle = getByRole('heading', {
      name: 'Conheça um pouco mais do meu trabalho.',
    })
    const sectionProjects = getByTestId('section-projects')
    const projectContainer = getAllByTestId('project-container')
    const buttonGrid = getByTestId('button-grid')
    const buttonList = getByTestId('button-list')

    expect(getByTestId('Mock Menu')).toBeInTheDocument()

    expect(title).toBeInTheDocument()
    expect(subtitle).toBeInTheDocument()
    expect(sectionProjects).toHaveStyle({
      display: 'grid',
      gap: '1.6rem',
      'grid-template-columns': '1fr',
      margin: '4.0rem 0',
    })
    expect(projectContainer[0]).toHaveStyle({
      'background-color': '#3B3A51',
      'border-radius': '0.6rem',
    })
    expect(buttonGrid).toHaveStyle({
      'background-color': '#6D59A8',
    })
    expect(buttonList).toHaveStyle({
      'background-color': '#3B3A51',
      cursor: 'pointer',
    })

    expect(getByTestId('Mock Footer')).toBeInTheDocument()
  })

  it('should change display layout on click the button', async () => {
    renderWithTheme(<Projects {...props} />)

    const sectionProjects = getByTestId('section-projects')
    const buttonGrid = getByTestId('button-grid')
    const buttonList = getByTestId('button-list')

    userEvent.click(buttonList)

    expect(sectionProjects).toHaveStyle({
      animation: 'fade-in 0.5s ease-in-out',
      display: 'flex',
      'flex-direction': 'column',
      gap: '12rem',
      margin: '12rem 0',
    })

    // await waitFor(() => {
    //   setTimeout(() => {
    //     expect(sectionProjects).toHaveStyle({
    //       opacity: 1,
    //     })
    //   }, 2000)
    // })

    expect(buttonGrid).toHaveStyle({
      'background-color': '#3B3A51',
      cursor: 'pointer',
    })
    expect(buttonList).toHaveStyle({
      'background-color': '#6D59A8',
    })

    userEvent.click(buttonGrid)
  })
})
