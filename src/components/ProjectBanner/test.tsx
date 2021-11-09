import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'

import ProjectBanner, { ProjectBannerProps } from '.'

const props: ProjectBannerProps = {
  src: '/img/project/banner.png',
  projectName: 'Project Name',
  projectUrl: 'https://www.google.com',
}

const { getByRole, getByTestId } = screen

describe('<ProjectBanner />', () => {
  it('should render ProjectBanner', () => {
    const { container } = renderWithTheme(<ProjectBanner {...props} />)

    const cover = getByTestId('cover')
    const projectName = getByRole('heading', { name: 'Project Name' })
    const buttonVisitProject = getByRole('button', { name: 'Visitar' })

    expect(cover).toHaveAttribute('src', '/img/project/banner.png')
    expect(projectName).toBeInTheDocument()
    expect(buttonVisitProject).toHaveAttribute('href', 'https://www.google.com')
    expect(container.firstChild).toMatchSnapshot()
  })
})
