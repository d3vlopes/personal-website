import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'

import Project, { ProjectProps } from '.'

const props: ProjectProps = {
  src: '/img/projects/kurtis.png',
  name: 'Project Name',
  description: 'Loren ipsum dolor',
  slug: 'kurtis-classrom',
}

const { getByRole, getByText, getByTestId, queryByTestId } = screen

describe('<Project />', () => {
  it('should render Project', () => {
    renderWithTheme(<Project {...props} variant="list" />)

    const wrapperList = getByTestId('list')
    const wrapperGrid = queryByTestId('grid')
    const image = getByRole('img', {
      name: /project name/i,
    })
    const name = getByRole('heading', { name: /project name/i })
    const description = getByText('Loren ipsum dolor')
    const button = getByTestId('button')

    expect(wrapperList).toBeInTheDocument()
    expect(wrapperGrid).not.toBeInTheDocument()
    expect(image).toBeInTheDocument()
    expect(name).toHaveStyle({
      'font-size': '3.2rem',
    })
    expect(description).toHaveStyle({
      'font-size': '1.8rem',
    })
    expect(button).toBeInTheDocument()
  })

  it('should render with grid layout ', () => {
    renderWithTheme(<Project {...props} variant="grid" />)

    const wrapperList = queryByTestId('list')
    const wrapperGrid = getByTestId('grid')
    const image = getByRole('img', {
      name: /project name/i,
    })
    const name = getByRole('heading', { name: /project name/i })
    const description = getByText('Loren ipsum dolor')
    const button = queryByTestId('button')

    expect(wrapperList).not.toBeInTheDocument()
    expect(wrapperGrid).toBeInTheDocument()
    expect(image).toBeInTheDocument()
    expect(name).toHaveStyle({
      'font-size': '2.2rem',
    })
    expect(description).toHaveStyle({
      'font-size': '1.6rem',
    })
    expect(button).not.toBeInTheDocument()
  })

  it('should match snapshot', () => {
    const { container } = renderWithTheme(<Project {...props} />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
