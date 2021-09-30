import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'

import Project, { ProjectProps } from '.'

const props: ProjectProps = {
  src: '/img/projects/kurtis.png',
  name: 'Project Name',
  description: 'Loren ipsum dolor',
  slug: 'kurtis-classrom',
}

const { getByRole, getByText, getByTestId } = screen

describe('<Project />', () => {
  it('should render Project', () => {
    renderWithTheme(<Project {...props} />)

    const image = getByRole('img', {
      name: /project name/i,
    })
    const name = getByRole('heading', { name: /project name/i })
    const description = getByText('Loren ipsum dolor')
    const button = getByTestId('button')

    expect(image).toHaveAttribute('src', '/img/projects/kurtis.png')
    expect(name).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })

  it('should match snapshot', () => {
    const { container } = renderWithTheme(<Project {...props} />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
