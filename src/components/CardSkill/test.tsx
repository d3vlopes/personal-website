import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'
import { Sword } from '@styled-icons/remix-fill/Sword'

import CardSkill from '.'
import mock from './mock'

const { getByTestId, getByRole, getByText } = screen

describe('<CardSkill />', () => {
  it('should render CardSkill', () => {
    renderWithTheme(
      <CardSkill
        icon={<Sword data-testid="icon" />}
        title={mock[0].title}
        description={mock[0].description}
      />,
    )

    const icon = getByTestId('icon')
    const title = getByRole('heading', { name: /desafios/i })
    const description = getByText(
      /Estou sempre em busca de novos desafios que me tirem do meu porto seguro./i,
    )

    expect(icon).toBeInTheDocument()
    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()
  })

  it('should match snapshot', () => {
    const { container } = renderWithTheme(
      <CardSkill
        icon={<Sword data-testid="icon" />}
        title={mock[0].title}
        description={mock[0].description}
      />,
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
