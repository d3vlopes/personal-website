import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'

import CardProfile, { CardProfileProps } from '.'

const props: CardProfileProps = {
  image: '/img/me.jpg',
  name: 'Leandro Lopes',
  age: 27,
  city: 'Santa Cruz do Sul - RS',
  liking: 'Programação, design, música, séries e filmes',
  dream:
    'Trabalhar com o que amo, utilizando meu conhecimento para criar aplicações que possam ajudar as pessoas.',
}

const { getByRole, getByText } = screen

describe('<CardProfile />', () => {
  it('should render CardProfile', () => {
    const { container } = renderWithTheme(<CardProfile {...props} />)

    const image = getByRole('img', { name: 'Leandro Lopes' })
    const name = getByText('Leandro Lopes')
    const age = getByText('27 anos')
    const city = getByText('Santa Cruz do Sul - RS')
    const liking = getByText('Programação, design, música, séries e filmes')
    const dream = getByText(
      'Trabalhar com o que amo, utilizando meu conhecimento para criar aplicações que possam ajudar as pessoas.',
    )

    expect(image).toHaveAttribute('src', '/img/me.jpg')
    expect(name).toBeInTheDocument()
    expect(age).toBeInTheDocument()
    expect(city).toBeInTheDocument()
    expect(liking).toBeInTheDocument()
    expect(dream).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
