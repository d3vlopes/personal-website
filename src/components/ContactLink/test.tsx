import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'
import { Props } from 'react-inlinesvg'

import ContactLink, { ContactLinkProps } from '.'

const { getByLabelText } = screen

const mock: ContactLinkProps = {
  icon: '/img/icon.svg',
  name: 'Github',
  link: 'www.github.com/user/name',
}

jest.mock('react-inlinesvg', () => {
  function ReactInlineSVG({ name }: Props) {
    return <svg aria-label={name} />
  }

  return ReactInlineSVG
})

describe('<ContactLinks />', () => {
  it('should render ContactLinks', () => {
    const { container } = renderWithTheme(<ContactLink {...mock} />)

    const icon = getByLabelText(mock.name)
    const a = container.querySelector('a')

    expect(icon).toBeInTheDocument()
    expect(a).toHaveAttribute('href', mock.link)
  })
})
