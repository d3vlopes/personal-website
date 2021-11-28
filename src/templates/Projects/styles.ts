import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { Wrapper as HeadingStyles } from 'components/Heading/styles'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15rem 0 ${theme.spacings.xxlarge} 0;

    ${HeadingStyles},
    ${Subtitle} {
      text-align: center;
    }

    & > ${HeadingStyles}:first-child {
      margin-bottom: ${theme.spacings.small};
    }
  `}
`

export const Subtitle = styled.h2`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.medium};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.weight.regular};
    line-height: 120%;
    color: ${theme.colors.complementary.main};
  `}
`

type LayoutDisplayProps = {
  display?: string
  active?: boolean
  fadeIn?: boolean
}

export const LayoutDisplayContainer = styled.div`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    gap: ${theme.spacings.xsmall};
    justify-content: flex-end;

    div {
      display: grid;
      grid-template-columns: repeat(2, minmax(8rem, 1fr));

      button:nth-child(1) {
        border-radius: ${theme.border.radius.medium} 0 0
          ${theme.border.radius.medium};
      }

      button:nth-child(2) {
        border-radius: 0 ${theme.border.radius.medium}
          ${theme.border.radius.medium} 0;
      }
    }
  `}
`

export const ButtonLayoutDisplay = styled.button<LayoutDisplayProps>`
  ${({ theme, active }) => css`
    background-color: ${active
      ? theme.colors.primary.main
      : theme.colors.bg.secondary.main};
    border: none;
    cursor: ${!active ? 'pointer' : ''};

    padding: ${theme.spacings.xsmall};

    span {
      color: ${theme.colors.text.light};
      font-size: ${theme.font.sizes.xxxsmall};
    }

    &:hover {
      background: ${active ? '' : theme.colors.bg.secondary.dark};
    }

    svg {
      color: ${theme.colors.white};
    }
  `}
`

export const ProjectContainer = styled.div<LayoutDisplayProps>`
  ${({ theme, display }) => css`
    background-color: ${display === 'grid'
      ? theme.colors.bg.secondary.main
      : ''};
    border-radius: ${display === 'grid' ? theme.border.radius.medium : ''};
  `}
`

export const SectionProjects = styled.section<LayoutDisplayProps>`
  ${({ theme, display, fadeIn }) => css`
    @keyframes fade-in {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    animation: ${fadeIn ? `fade-in ${theme.transition.slow}` : ''};
    display: ${display === 'grid' ? 'grid' : 'flex'};
    flex-direction: ${display === 'list' ? 'column' : ''};
    gap: ${display === 'grid' ? theme.spacings.xsmall : '20rem'};
    grid-template-columns: ${display === 'grid'
      ? 'repeat(2, minmax(20rem, 1fr))'
      : ''};
    margin: ${display === 'grid' ? theme.spacings.large : theme.spacings.huge} 0;
    transition: ${display === 'list' ? `gap ${theme.transition.slow}` : ''};

    ${media.greaterThan('huge')`
      grid-template-columns: ${
        display === 'grid' ? 'repeat(3, minmax(39.8rem, 1fr))' : ''
      };
    `}

    ${media.lessThan('medium')`
      grid-template-columns: ${display === 'grid' ? '1fr' : ''};
    `}
  `}
`
