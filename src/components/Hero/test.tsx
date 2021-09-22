import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'

import Hero, { HeroProps } from '.'

const props: HeroProps = {
  photo: '/img/me.jpg',
  hello: 'Olá me chamo',
  name: 'Leandro Lopes',
  description: 'Desenvolvedor Frontend | UI/UX design',
  buttonText: 'Sobre mim',
}

const { getByText, getByRole, getByTestId, queryByText } = screen

describe('<Hero />', () => {
  it('should render Hero', () => {
    renderWithTheme(<Hero {...props} />)

    const photo = getByTestId('photo')
    const hello = getByText('Olá me chamo')
    const name = getByRole('heading', { name: /leandro lopes/i })
    const description = getByText('Desenvolvedor Frontend | UI/UX design')
    const button = getByTestId('button')

    expect(photo).toBeInTheDocument()
    expect(hello).toBeInTheDocument()
    expect(name).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })
  it('should render Hero witout hello', () => {
    renderWithTheme(
      <Hero
        photo={props.photo}
        name={props.name}
        description={props.description}
        buttonText={props.buttonText}
      />,
    )

    const photo = getByTestId('photo')
    const hello = queryByText('Olá me chamo')
    const name = getByRole('heading', { name: /leandro lopes/i })
    const description = getByText('Desenvolvedor Frontend | UI/UX design')
    const button = getByTestId('button')

    expect(photo).toBeInTheDocument()
    expect(hello).not.toBeInTheDocument()
    expect(name).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })
})
