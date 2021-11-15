import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { SpinnerIos as Spinner } from '@styled-icons/fluentui-system-filled/SpinnerIos'

import FormField from 'components/FormField'

import * as S from './styles'

const Form = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  const notify = (status: 'success' | 'fail') => {
    if (status === 'success') {
      toast.success('Mensagem enviada com sucesso!', { duration: 4000 })
    } else {
      toast.error('Não foi possível enviar a mensagem, tente novamente', {
        duration: 4000,
      })
    }
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    const mailData = {
      name: values.name,
      email: values.email,
      subject: values.subject,
      message: values.message,
    }

    try {
      setLoading(true)
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/contact/`,
        {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(mailData),
        },
      )

      const data = await response.json()

      if (data.status === 'success') {
        setLoading(false)
        notify(data.status)
      } else {
        setLoading(false)
        notify(data.status)
      }
    } catch (error) {
      notify('fail')
      setLoading(false)
    }
  }

  return (
    <S.Wrapper>
      <Toaster />
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
        <S.SubmitButton $loading={loading} type="submit" size="small">
          {loading ? <Spinner color="#FFF" size={16} /> : 'Enviar'}
        </S.SubmitButton>
      </form>
    </S.Wrapper>
  )
}

export default Form
