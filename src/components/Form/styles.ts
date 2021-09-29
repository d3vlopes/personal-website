import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as ButtonStyles from 'components/Button/styles'

export const Wrapper = styled.div`
  ${media.lessThan('medium')`
      ${ButtonStyles.Wrapper} {
        width: 100%;
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
