import styled, { css } from 'styled-components'
import { darken } from 'polished'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  width: 100%;
  max-width: 82.3rem;
`

type TabsProps = {
  active: boolean
}

export const Tabs = styled.div<TabsProps>`
  ${({ theme, active }) => css`
    position: relative;
    display: flex;
    justify-content: space-between;
    background-color: ${theme.colors.bg.secondary.dark};
    padding: ${theme.spacings.xsmall} ${theme.spacings.xxlarge};
    transition: all ${theme.transition.fast};

    ${media.lessThan('medium')`
      padding:  ${theme.spacings.xsmall};
      justify-content: space-around;
    `}

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      border-bottom: 0.5rem solid
        ${active ? theme.colors.primary.main : theme.colors.bg.secondary.light};
      width: calc(100% / 2);
    }

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      right: 0;
      border-bottom: 0.5rem solid
        ${active ? theme.colors.bg.secondary.light : theme.colors.primary.main};
      width: calc(100% / 2);
    }
  `}
`

export const Button = styled.button<TabsProps>`
  ${({ theme, active }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: transparent;
    border: none;
    font: normal ${theme.font.weight.medium} ${theme.font.sizes.xxlarge} / 100%
      ${theme.font.body};
    color: ${active ? theme.colors.text.light : theme.colors.grey};
    transition: all ${theme.transition.fast};
    margin-bottom: 0.4rem;
    cursor: pointer;

    ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.small};
    `}

    &:hover {
      color: ${!active && darken(0.2, theme.colors.grey)};
    }

    svg {
      width: 4.5rem;
      height: 4.5rem;
      color: ${active ? theme.colors.white : theme.colors.grey};
      margin-bottom: ${theme.spacings.xsmall};

      ${media.lessThan('medium')`
        width: 3.5rem;
        height: 3.5rem;
    `}
    }
  `}
`

export const Content = styled.div<TabsProps>`
  ${({ theme, active }) => css`
    display: ${active ? 'flex' : 'none'};
    justify-content: space-around;
    background-color: ${theme.colors.bg.secondary.dark};
    padding: ${theme.spacings.large} 0;
    gap: ${theme.spacings.small};
    transition: all ${theme.transition.slow};

    ${media.lessThan('small')`
      justify-content: center;
      padding: ${theme.spacings.large} ${theme.spacings.xsmall};

      .content-design {
        flex-wrap: wrap;
        padding: ${theme.spacings.large} 0;
      }
    `}
  `}
`

export const Tool = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xsmall};
    margin-top: ${theme.spacings.xsmall};

    p {
      font-size: ${theme.font.sizes.small};
      line-height: 150%;

      ${media.lessThan('medium')`
        font-size: ${theme.font.sizes.xsmall};
      `}

      ${media.lessThan('small')`
        font-size: ${theme.font.sizes.xxsmall};
      `}
    }
  `}
`

export const Image = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  max-width: 100%;

  ${media.lessThan('medium')`
    width: 3rem;
    height: 3rem;
  `}
`
