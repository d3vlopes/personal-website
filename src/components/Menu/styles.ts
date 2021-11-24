import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

import { Container as ContainerStyles } from 'components/Container'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.bg.secondary.dark};
    width: 100%;
    padding-top: ${theme.spacings.small};
    padding-bottom: ${theme.spacings.small};

    ${ContainerStyles} {
      display: grid;
      align-items: center;
      grid-template-columns: 5% 80% 15%;

      ${media.lessThan('medium')`
        grid-template-columns: repeat(2, 1fr);
      `}

      ${media.greaterThan('large')`
        grid-template-columns: repeat(3, 1fr);
      `}

      & > div:nth-child(2) {
        ${media.lessThan('medium')`
          justify-self: end;
        `}
      }
    }
  `}
`

export const MenuNav = styled.nav`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.small};
    justify-content: center;

    ${media.lessThan('large')`
      gap: ${theme.spacings.xsmall};
    `}
  `}
`

const menuLinkModifiers = {
  default: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
  `,
  active: (theme: DefaultTheme) => css`
    color: ${theme.colors.primary.main};
    position: relative;

    ${media.lessThan('medium')`
      &::after {
        content: '';
        border-bottom: 0.3rem solid ${theme.colors.primary.main};
        width: 100%;
        position: absolute;
        bottom: -1rem;
        left: 0;
        top: 0;
      }
    `}

    ${media.greaterThan('medium')`
      &::after {
        content: '';
        border-bottom: 0.3rem solid ${theme.colors.primary.main};
        width: 100%;
        position: absolute;
        bottom: -4rem;
        left: 0;
        top: 0;
      }
    `}
  `,
}

type MenuLinkProps = {
  isActive: boolean
}

export const MenuLink = styled.a<MenuLinkProps>`
  ${({ theme, isActive }) => css`
    font-family: ${theme.font.body};
    font-size: ${theme.font.sizes.large};
    line-height: ${theme.font.sizes.xxxlarge};
    cursor: pointer;
    transition: color ${theme.transition.default};
    text-decoration: none;

    ${media.lessThan('large')`
      font-size: ${theme.font.sizes.medium};
    `}

    &:hover {
      color: ${theme.colors.primary.main};
    }

    ${!isActive && menuLinkModifiers.default(theme)};
    ${isActive && menuLinkModifiers.active(theme)};
  `}
`
export const ContactLinks = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.xsmall};
    justify-content: end;
  `}
`

type MenuIconProps = {
  isOpen: boolean
}

export const MenuIcon = styled.div<MenuIconProps>`
  ${({ isOpen, theme }) => css`
    width: 3.5rem;
    height: 3.5rem;
    position: absolute;
    top: 0;
    right: 1.5rem;
    margin: 3.5rem auto;
    transform: rotate(0deg);
    transition: ${theme.transition.slow};
    cursor: pointer;

    span {
      display: block;
      position: absolute;
      height: 0.7rem;
      width: 100%;
      background: ${theme.colors.text.light};
      border-radius: 9rem;
      opacity: 1;
      left: 0;
      transform: rotate(0deg);
      transition: 0.25s ease-in-out;
    }

    > span:nth-child(1) {
      top: ${isOpen ? '0.4rem' : '0'};
      left: ${isOpen ? '0.7rem' : '0'};
      transform-origin: left center;
      transform: ${isOpen ? 'rotate(45deg)' : '0'};
    }

    > span:nth-child(2) {
      width: 50%;
      top: 1.8rem;
      transform-origin: left center;

      width: ${isOpen ? '0%' : ''};
      opacity: ${isOpen ? '0' : '1'};
    }

    > span:nth-child(3) {
      top: ${isOpen ? '3rem' : '3.6rem'};
      left: ${isOpen ? '0.8rem' : '0'};
      transform-origin: left center;
      transform: ${isOpen ? 'rotate(-50deg)' : '0'};
    }
  `}
`

type MenuFullProps = {
  isOpen: boolean
}

export const MenuFull = styled.div<MenuFullProps>`
  ${({ theme, isOpen }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${theme.colors.bg.main};
    position: fixed;
    z-index: ${theme.layers.menu};
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    overflow: hidden;
    transition: opacity ${theme.transition.default};
    opacity: ${isOpen ? 1 : 0};
    pointer-events: ${isOpen ? 'all' : 'none'};

    ${MenuNav} {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      flex-direction: column;
    }
  `}
`
