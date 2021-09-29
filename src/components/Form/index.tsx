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
        <FormField label="Nome" name="name" />
        <S.FormGroup>
          <FormField label="Email" name="email" />
          <FormField label="Assunto" name="subject" />
        </S.FormGroup>
        <FormField type="textarea" label="Message" name="message" />
        <Button size="small">Enviar</Button>
      </form>
    </S.Wrapper>
  )
}

export default Form
