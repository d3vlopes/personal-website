import { screen, waitFor } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'
import { ThemeProvider } from 'styled-components'

import userEvent from '@testing-library/user-event'

import theme from 'styles/themes/default'

import FormField from '.'

const { getByLabelText, getByText } = screen

describe('<FormField />', () => {
  it('should render FormField like input', () => {
    const { container } = renderWithTheme(
      <FormField label="Nome" name="name" />,
    )

    const input = container.querySelector('input')

    expect(getByLabelText('Nome')).toBeInTheDocument()
    expect(input?.tagName.toLowerCase()).toBe('input')
    expect(input).toHaveAttribute('id', 'name')
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render FormField like textarea', () => {
    const { container } = renderWithTheme(
      <FormField variant="textarea" label="Message" name="message" />,
    )

    const textarea = container.querySelector('textarea')

    expect(getByLabelText('Message')).toBeInTheDocument()
    expect(textarea?.tagName.toLowerCase()).toBe('textarea')
  })

  it('Changes its value when typing', async () => {
    const onInputChange = jest.fn()

    const { container, rerender } = renderWithTheme(
      <FormField
        onFieldChange={onInputChange}
        label="FormField"
        name="FormField"
      />,
    )

    const input = container.querySelector('input')
    const text = 'This is my new text'

    userEvent.type(input!, text)

    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onInputChange).toHaveBeenCalledTimes(text.length)
    })
    expect(onInputChange).toHaveBeenCalledWith(text)

    const onTextAreaChange = jest.fn()

    rerender(
      <ThemeProvider theme={theme}>
        <FormField
          onFieldChange={onTextAreaChange}
          label="FormField"
          name="FormField"
          variant="textarea"
        />
        ,
      </ThemeProvider>,
    )

    const textarea = container.querySelector('textarea')

    userEvent.type(textarea!, text)

    await waitFor(() => {
      expect(textarea).toHaveValue(text)
      expect(onTextAreaChange).toHaveBeenCalledTimes(text.length)
    })
    expect(onTextAreaChange).toHaveBeenCalledWith(text)
  })

  it('Render with error ', () => {
    renderWithTheme(<FormField label="FormField" error="Error message" />)

    expect(getByText('Error message')).toBeInTheDocument()
  })

  it('Is accessible by tab', () => {
    renderWithTheme(
      <FormField label="TextField" name="TextField" id="TextField" />,
    )

    const input = getByLabelText('TextField')
    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(input).toHaveFocus()
  })
})
