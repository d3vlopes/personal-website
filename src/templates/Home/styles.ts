import styled, { css } from 'styled-components'

import { Wrapper as HeroStyles } from 'components/Hero/styles'

export const Hero = styled.div`
  ${({ theme }) => css`
    ${HeroStyles} {
      margin: ${theme.spacings.medium} 0 ${theme.spacings.xxlarge};
    }
  `}
`
