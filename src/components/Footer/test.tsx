import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'

import mock from 'components/ContactLink/mock'

import Footer, { FooterProps } from '.'
import { Props } from 'react-inlinesvg/esm'

const props: FooterProps = {
  contactLinks: mock,
}

const { getByLabelText, getByTestId } = screen

jest.mock('react-inlinesvg', () => {
  function ReactInlineSVG({ name }: Props) {
    return <svg aria-label={name} />
  }

  return ReactInlineSVG
})

describe('<Footer />', () => {
  it('should render Footer', () => {
    const { container } = renderWithTheme(<Footer {...props} />)

    const contactLinks = getByTestId('contact-links')
    const text = container.querySelector('p')
    const heartIcon = getByLabelText(/heart/i)

    expect(contactLinks).toBeInTheDocument()
    expect(text).toHaveTextContent(/Desenvolvido com por Leandro Lopes/i)
    expect(heartIcon).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
