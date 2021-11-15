global.fetch = require('node-fetch')

import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

import { renderWithTheme } from 'utils/test/helpers'

import Form from '.'

const server = setupServer()

const { getByTestId, getByRole, findByText } = screen

describe('<Form />', () => {
  beforeAll(() => {
    server.listen()

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

  afterEach(() => server.resetHandlers())

  afterAll(() => {
    server.close()
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

  it('should show fail message if there is network error', async () => {
    server.use(
      rest.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
        async (req, res) => {
          return res.networkError('Failed to connect')
        },
      ),
    )

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

  it('should show fail message if there is an error sending email', async () => {
    server.use(
      rest.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
        async (req, res, ctx) => {
          return res(
            ctx.json({
              status: 'fail',
            }),
          )
        },
      ),
    )

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

  it('should show success message if there is success', async () => {
    server.use(
      rest.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
        async (req, res, ctx) => {
          return res(
            ctx.json({
              status: 'success',
            }),
          )
        },
      ),
    )

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
})
