import { screen, fireEvent } from '@testing-library/react'
import { Props } from 'react-inlinesvg/esm'
import { renderWithTheme } from 'utils/test/helpers'

import Menu from '.'
import mock from './mock'

const { getByRole, getByTestId, getAllByTestId } = screen

jest.mock('react-inlinesvg', () => {
  function ReactInlineSVG({ name }: Props) {
    return <svg aria-label={name} />
  }

  return ReactInlineSVG
})

describe('<Menu />', () => {
  it('should render Menu', () => {
    renderWithTheme(<Menu activeLink="/" {...mock} />)

    const logo = getByRole('img', { name: /LL/i })
    const navigation = getByTestId('navigation').querySelectorAll('a')
    const active = getByTestId('navigation').querySelector('a')
    const contactLinks = getAllByTestId('contact-links')

    expect(logo).toBeInTheDocument()
    expect(navigation).toHaveLength(mock.links.length)
    // desktop e mobile
    expect(contactLinks).toHaveLength(2)

    expect(active).toHaveStyle({
      color: '#6D59A8',
    })
  })

  it('should handle the open/close mobile menu ', () => {
    renderWithTheme(<Menu {...mock} />)

    // selecionar o MenuFull
    const fullMenuElement = getByTestId('menu-full')

    // verificar se o menu está escondido
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })

    // clicar no botão de abrir o menu e verificar se ele abriu
    fireEvent.click(screen.getByLabelText(/abrir menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')
    expect(fullMenuElement).toHaveStyle({ opacity: 1 })

    // clicar no botão de fechar o menu e verificar se ele fechou
    fireEvent.click(screen.getByLabelText(/fechar menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })
  })
})
