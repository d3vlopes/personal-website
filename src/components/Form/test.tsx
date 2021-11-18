/* eslint-disable @typescript-eslint/no-var-requires */

global.fetch = require('node-fetch')

import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import toast from 'react-hot-toast'

import { renderWithTheme } from 'utils/test/helpers'

import Form from '.'

const { getByTestId, getByRole, findByText } = screen

describe('<Form />', () => {
  beforeAll(() => {
    toast.remove()

    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    })
  })

  it('should render Form', () => {
    renderWithTheme(<Form />)

    const nameInput = getByTestId('name')
    const emailInput = getByTestId('mail')
    const subjectInput = getByTestId('subject')
    const messageTextArea = getByTestId('message')
    const submitButton = getByRole('button', { name: 'Enviar' })

    expect(nameInput.tagName.toLowerCase()).toBe('input')
    expect(nameInput).toHaveAttribute('name', 'name')

    expect(emailInput.tagName.toLowerCase()).toBe('input')
    expect(emailInput).toHaveAttribute('name', 'email')

    expect(subjectInput.tagName.toLowerCase()).toBe('input')
    expect(subjectInput).toHaveAttribute('name', 'subject')

    expect(messageTextArea.tagName.toLowerCase()).toBe('textarea')
    expect(messageTextArea).toHaveAttribute('name', 'message')

    expect(submitButton).toBeInTheDocument()
  })

  it('should send email and show success message', async () => {
    const send = jest.spyOn(require('emailjs-com'), 'send')
    const mailData = {
      name: 'John Doe',
      email: 'test@email.com',
      subject: 'Subject',
      message: 'Loren ipsum dolor',
    }
    const data = {
      serviceId: 'serviceID_123',
      templateID: 'templateID_123',
      templatePrams: mailData,
      userID: 'userID_123',
    }
    send.mockImplementationOnce(() => [data])

    renderWithTheme(<Form />)

    const nameInput = getByTestId('name')
    const emailInput = getByTestId('mail')
    const subjectInput = getByTestId('subject')
    const messageTextArea = getByTestId('message')
    const submitButton = getByRole('button', { name: 'Enviar' })

    userEvent.type(nameInput, 'Lopes')
    userEvent.type(emailInput, 'email@provider.com')
    userEvent.type(subjectInput, 'Subject')
    userEvent.type(messageTextArea, 'Loren ipsum dolor')
    userEvent.click(submitButton)

    const message = findByText('Mensagem enviada com sucesso!')

    expect(await message).toBeInTheDocument()
  })

  it('should show fail message', async () => {
    renderWithTheme(<Form />)

    const nameInput = getByTestId('name')
    const emailInput = getByTestId('mail')
    const subjectInput = getByTestId('subject')
    const messageTextArea = getByTestId('message')
    const submitButton = getByRole('button', { name: 'Enviar' })

    userEvent.type(nameInput, 'Lopes')
    userEvent.type(emailInput, 'email@provider.com')
    userEvent.type(subjectInput, 'Subject')
    userEvent.type(messageTextArea, 'Loren ipsum dolor')
    userEvent.click(submitButton)

    const message = findByText(
      'Não foi possível enviar a mensagem, tente novamente',
    )

    expect(await message).toBeInTheDocument()
  })
})
