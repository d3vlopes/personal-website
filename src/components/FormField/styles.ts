import styled, { css, DefaultTheme } from 'styled-components'

type WrapperProps = {
  error?: boolean
  hasFocus?: boolean
}

export const FieldWrapper = styled.div<WrapperProps>`
  ${({ theme, error, hasFocus }) => css`
    position: relative;
    background-color: ${theme.colors.bg.secondary.main};
    border-radius: ${theme.border.radius.small};
    margin-bottom: ${error ? theme.spacings.xxsmall : theme.spacings.small};

    input,
    textarea {
      padding: ${theme.spacings.medium} ${theme.spacings.small};
      background-color: transparent;
      border: 0;
      outline: none;
      width: 100%;
      font-size: ${theme.font.sizes.small};
      font-family: ${theme.font.body};
      line-height: 150%;
      color: ${theme.colors.text.light};

      &:focus ~ label,
      &:valid ~ label,
      ${TextArea}:focus ~ label,
      ${TextArea}:valid ~ label {
        top: ${hasFocus && '-1.8rem'};
        transition: all ${theme.transition.ease.default};
        color: ${theme.colors.text.light};
        font-size: ${theme.font.sizes.xxsmall};
      }

      &:valid {
        border: 1px solid ${theme.colors.complementary.main};
      }
    }
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    &:-webkit-autofill {
      -webkit-text-fill-color: ${theme.colors.text.light};
      border: 1px solid ${theme.colors.complementary.main};
      -webkit-box-shadow: 0 0 0px 1000px ${theme.colors.bg.secondary.main} inset;
    }
  `}
`

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 25rem;
  resize: none;
`

export const Label = styled.label`
  ${({ theme }) => css`
    position: absolute;
    top: 0.1rem;
    left: 0;
    padding: ${theme.spacings.medium} 0 ${theme.spacings.medium}
      ${theme.spacings.small};
    font-weight: ${theme.font.weight.medium};
    font-size: ${theme.font.sizes.small};
    line-height: 100%;
    letter-spacing: 0.005rem;
    color: ${theme.colors.grey};
    pointer-events: none;
    transition: all ${theme.transition.ease.default};
  `}
`

export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.red};
    font-size: ${theme.font.sizes.xxxsmall};
  `}
`

const wrapperModifiers = {
  error: (theme: DefaultTheme) => css`
    ${FieldWrapper} input,
    ${FieldWrapper} textarea {
      border-color: ${theme.colors.red};
    }
  `,
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, error }) => css`
    width: 100%;

    ${error && wrapperModifiers.error(theme)}
  `}
`
