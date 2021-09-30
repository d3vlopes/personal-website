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
    display: ${active ? 'grid' : 'none'};
    grid-template-columns: repeat(auto-fit, minmax(21rem, 1fr));
    background-color: ${theme.colors.bg.secondary.dark};
    padding: ${theme.spacings.large} ${theme.spacings.xlarge};
    gap: ${theme.spacings.xsmall};
    transition: all ${theme.transition.slow};
  `}
`

export const Tool = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-content: space-between;
    align-items: center;
    gap: ${theme.spacings.xxsmall};

    p {
      font-size: ${theme.font.sizes.small};
      line-height: 150%;
    }
  `}
`
