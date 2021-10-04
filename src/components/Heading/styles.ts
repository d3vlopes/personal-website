import styled, { css, DefaultTheme } from 'styled-components'
import { HeadingProps } from '.'

const wrapperModifiers = {
  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.large};
    line-height: calc(${theme.font.sizes.large} + 1rem);
  `,
  xlarge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};
    line-height: calc(${theme.font.sizes.xlarge} + 1rem);
  `,
  xxlarge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xxlarge};
    line-height: calc(${theme.font.sizes.xxlarge} + 1rem);
  `,
  xxxlarge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xxxlarge};
    line-height: calc(${theme.font.sizes.xxxlarge} + 1rem);
  `,
  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.huge};
    line-height: calc(${theme.font.sizes.huge} + 1rem);
  `,
  highlight: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.highlight};
    line-height: calc(${theme.font.sizes.highlight} + 1rem);
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
    position: ${lineBottom && 'relative'};
    display: inline-flex;
    font-family: ${theme.font.heading};
    max-width: 100%;

    ${!!size && wrapperModifiers[size](theme)};
    ${lineBottom && wrapperModifiers.lineBottom(theme)};
  `}
`
