import {
  Dispatch,
  InputHTMLAttributes,
  useState,
  useEffect,
  SetStateAction,
  TextareaHTMLAttributes,
} from 'react'

import * as S from './styles'

export type FormFieldProps = {
  variant?: 'input' | 'textarea'
  label: string
  initialValue?: string
  error?: string

  onFieldChange?: (value: string) => void
} & InputHTMLAttributes<HTMLInputElement> &
  TextareaHTMLAttributes<HTMLTextAreaElement>

const FormField = ({
  variant = 'input',
  label,
  name,
  initialValue = '',
  error,
  onFieldChange,
  ...props
}: FormFieldProps) => {
  const [inputValue, setInputValue] = useState(initialValue)
  const [textAreaValue, setTextAreaValue] = useState(initialValue)
  const [hasFocus, setFocus] = useState(false)

  const fieldValues = {
    inputValue: Boolean(inputValue.length),
    textAreaValue: Boolean(textAreaValue.length),
    initialValue: Boolean(initialValue.length),
  }

  const hasFieldValue =
    fieldValues.inputValue ||
    fieldValues.textAreaValue ||
    fieldValues.initialValue

  useEffect(() => {
    if (
      error ||
      initialValue.length ||
      inputValue.length ||
      textAreaValue.length
    ) {
      setFocus(true)
    }
  }, [error, initialValue.length, inputValue.length, textAreaValue.length])

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    setValue: Dispatch<SetStateAction<string>>,
  ) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onFieldChange && onFieldChange(newValue)
  }

  const handleFocus = () => {
    setFocus(true)
  }

  const handleBlur = () => {
    if (hasFieldValue) return
    setFocus(false)
  }

  const renderInput = () => (
    <S.Input
      type="text"
      onChange={(event) => onChange(event, setInputValue)}
      value={inputValue}
      name={name}
      id={name}
      onFocus={handleFocus}
      onBlur={handleBlur}
      {...props}
    />
  )

  const renderTextArea = () => (
    <S.TextArea
      value={textAreaValue}
      onChange={(event) => onChange(event, setTextAreaValue)}
      name={name}
      id={name}
      onFocus={handleFocus}
      onBlur={handleBlur}
      {...props}
    />
  )

  return (
    <S.Wrapper error={!!error}>
      <S.FieldWrapper
        error={!!error}
        hasFocus={hasFocus}
        hasFieldValue={hasFieldValue}
      >
        {variant === 'input' ? renderInput() : renderTextArea()}
        {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
      </S.FieldWrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}

export default FormField
