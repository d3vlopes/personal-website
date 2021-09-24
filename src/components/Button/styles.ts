import styled, { css, DefaultTheme } from 'styled-components'

import { ButtonProps } from '.'

export type WrapperProps = {
  expand: boolean
  hasIcon: boolean
} & ButtonProps

const wrapperModifiers = {
  primary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.primary.main};

    &:hover {
      background-color: ${theme.colors.primary.dark};
    }
  `,
  secondary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.secondary.main};

    &:hover {
      background-color: ${theme.colors.secondary.dark};
    }
  `,
  outline: (theme: DefaultTheme) => css`
    background-color: transparent;
    border: 1px solid ${theme.colors.complementary.main};

    &:hover {
      span {
        color: ${theme.colors.primary.main};
        transition: all ${theme.transition.default};
      }

      border: 1px solid ${theme.colors.primary.main};
    }
  `,
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
    width: 17.5rem;
    height: 5rem;

    svg {
      width: 2.2rem;
      height: 2.2rem;
    }
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.large};
    width: 21.5rem;
    height: 6.2rem;

    svg {
      width: 2.4rem;
      height: 2.4rem;
    }
  `,
  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xxlarge};
    width: 28.8rem;
    height: 7.6rem;

    svg {
      width: 2.8rem;
      height: 2.8rem;
    }
  `,
  expand: () => css`
    width: 31.5rem;
    height: 6.2rem;
  `,
  withIcon: (theme: DefaultTheme) => css`
    border-radius: ${theme.border.radius.large};
    height: 5rem;

    svg {
      color: ${theme.colors.complementary.main};
      transition: all ${theme.transition.default};
    }
  `,
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, variant, size, expand, hasIcon, hoverUp }) => css`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border: none;
    transition: all ${theme.transition.default};
    text-decoration: none;
    cursor: pointer;
    border-radius: ${theme.border.radius.medium};

    &:focus {
      outline: 1px dashed;
    }

    &:hover {
      transform: ${hoverUp ? 'translateY(-0.5rem)' : 'translateY(0)'};

      svg {
        color: ${theme.colors.primary.main};
      }
    }

    span {
      font-family: ${theme.font.body};
      font-weight: ${theme.font.weight.medium};
      line-height: 100%;
      color: ${theme.colors.text.light};
      margin-left: ${hasIcon && theme.spacings.xxsmall};
      letter-spacing: 0.05rem;
    }

    ${!!variant && wrapperModifiers[variant](theme)};
    ${!!size && wrapperModifiers[size](theme)};
    ${expand && wrapperModifiers.expand()};
    ${hasIcon && wrapperModifiers.withIcon(theme)};
  `}
`
