import styled, { css, keyframes } from 'styled-components'
import media from 'styled-media-query'

import Button from 'components/Button'

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`

export const Wrapper = styled.div``

type SubmitButtonProps = {
  $loading: boolean
}

export const SubmitButton = styled(Button).attrs(
  (props: SubmitButtonProps) => ({
    disabled: props.$loading,
  }),
)`
  ${media.lessThan('medium')`
      & {
        width: 100%;
      }
    `}

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${(props: SubmitButtonProps) =>
    props.$loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`

export const FormGroup = styled.div`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
      display: flex;
      gap: ${theme.spacings.medium};
    `}
  `}
`
