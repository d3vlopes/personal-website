import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'

import Form from '.'

const { getByTestId } = screen

describe('<Form />', () => {
  it('should render Form', () => {
    renderWithTheme(<Form />)

    const nameInput = getByTestId('name')
    const emailInput = getByTestId('mail')
    const subjectInput = getByTestId('subject')
    const messageTextArea = getByTestId('message')

    expect(nameInput.tagName.toLowerCase()).toBe('input')
    expect(nameInput).toHaveAttribute('name', 'name')

    expect(emailInput.tagName.toLowerCase()).toBe('input')
    expect(emailInput).toHaveAttribute('name', 'email')

    expect(subjectInput.tagName.toLowerCase()).toBe('input')
    expect(subjectInput).toHaveAttribute('name', 'subject')

    expect(messageTextArea.tagName.toLowerCase()).toBe('textarea')
    expect(messageTextArea).toHaveAttribute('name', 'message')
  })
})
