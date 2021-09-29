import Button from 'components/Button'
import FormField from 'components/FormField'

import * as S from './styles'

const Form = () => {
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    console.log('test')
  }

  return (
    <S.Wrapper>
      <form onSubmit={handleSubmit}>
        <FormField label="Nome" name="name" data-testid="name" />
        <S.FormGroup>
          <FormField
            type="email"
            label="Email"
            name="email"
            data-testid="mail"
          />
          <FormField label="Assunto" name="subject" data-testid="subject" />
        </S.FormGroup>
        <FormField
          variant="textarea"
          label="Message"
          name="message"
          data-testid="message"
        />
        <Button size="small">Enviar</Button>
      </form>
    </S.Wrapper>
  )
}

export default Form
