import { useState } from 'react'

import Button from 'components/Button'
import FormField from 'components/FormField'

import * as S from './styles'

const Form = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  // const [loading, setLoading] = useState(false)
  // const [disabled, setDisabled] = useState(true)

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    const data = {
      name: values.name,
      email: values.email,
      subject: values.subject,
      message: values.message,
    }

    try {
      fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(data),
      })
      alert('Enviado')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <S.Wrapper>
      <form onSubmit={handleSubmit}>
        <FormField
          label="Nome"
          name="name"
          onFieldChange={(value) => handleInput('name', value)}
          required
          data-testid="name"
        />
        <S.FormGroup>
          <FormField
            type="email"
            name="email"
            label="Email"
            onFieldChange={(value) => handleInput('email', value)}
            required
            data-testid="mail"
          />
          <FormField
            label="Assunto"
            name="subject"
            onFieldChange={(value) => handleInput('subject', value)}
            required
            data-testid="subject"
          />
        </S.FormGroup>
        <FormField
          variant="textarea"
          label="Message"
          name="message"
          onFieldChange={(value) => handleInput('message', value)}
          required
          data-testid="message"
        />
        <Button type="submit" size="small">
          Enviar
        </Button>
      </form>
    </S.Wrapper>
  )
}

export default Form
