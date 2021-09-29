import {
  Dispatch,
  InputHTMLAttributes,
  useState,
  SetStateAction,
  TextareaHTMLAttributes,
} from 'react'

import * as S from './styles'

export type FormFieldProps = {
  type?: 'input' | 'textarea'
  label: string
  initialValue?: string
  error?: string

  onFieldChange?: (value: string) => void
} & InputHTMLAttributes<HTMLInputElement> &
  TextareaHTMLAttributes<HTMLTextAreaElement>

const FormField = ({
  type = 'input',
  label,
  name,
  initialValue = '',
  error,
  onFieldChange,
  ...props
}: FormFieldProps) => {
  const [inputValue, setInputValue] = useState(initialValue)
  const [textAreaValue, setTextAreaValue] = useState(initialValue)

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    setValue: Dispatch<SetStateAction<string>>,
  ) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onFieldChange && onFieldChange(newValue)
  }

  const renderInput = () => (
    <S.Input
      type="text"
      onChange={(event) => onChange(event, setInputValue)}
      value={inputValue}
      name={name}
      required
      id={name}
      {...props}
    />
  )

  const renderTextArea = () => (
    <S.TextArea
      value={textAreaValue}
      required
      onChange={(event) => onChange(event, setTextAreaValue)}
      name={name}
      id={name}
      {...props}
    />
  )

  return (
    <S.Wrapper error={!!error}>
      <S.FieldWrapper error={!!error}>
        {type === 'input' ? renderInput() : renderTextArea()}
        {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
      </S.FieldWrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}

export default FormField
