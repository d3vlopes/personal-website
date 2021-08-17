import styled, { css } from 'styled-components'
import { LogoProps } from '.'

const wrapperModifiers = {
  small: () => css`
    width: 4rem;
    height: 4rem;
  `,
  large: () => css`
    width: 6rem;
    height: 6rem;
  `,
}

export const Wrapper = styled.div<LogoProps>`
  ${({ size }) => css`
    svg {
      ${!!size && wrapperModifiers[size]};
    }
  `}
`
