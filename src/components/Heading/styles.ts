import styled, { css, DefaultTheme } from 'styled-components'
import { HeadingProps } from '.'

const wrapperModifiers = {
  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.large};
  `,
  xlarge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};
  `,
  xxlarge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xxlarge};
  `,
  xxxlarge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xxxlarge};
  `,
  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.huge};
  `,
  highlight: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.highlight};
    font-family: ${theme.font.highlight};
  `,
  lineBottom: (theme: DefaultTheme) => css`
    &::after {
      position: absolute;
      left: 0;
      bottom: -0.5rem;
      content: '';
      width: 100%;
      border-bottom: 5px solid ${theme.colors.primary.main};
    }
  `,
}

export const Wrapper = styled.h1<HeadingProps>`
  ${({ theme, size, lineBottom }) => css`
    position: relative;
    display: inline-flex;
    font-family: ${theme.font.body};
    max-width: 100%;

    ${!!size && wrapperModifiers[size](theme)};
    ${lineBottom && wrapperModifiers.lineBottom(theme)};
  `}
`
