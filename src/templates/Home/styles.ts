import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { Wrapper as HeroStyles } from 'components/Hero/styles'
import { Container as ContainerStyles } from 'components/Container'
import { Wrapper as TabTools } from 'components/TabTools/styles'
import { Wrapper as HeadingStyles } from 'components/Heading/styles'
import { Wrapper as FormStyles } from 'components/Form/styles'

export const Hero = styled.div`
  ${({ theme }) => css`
    ${HeroStyles} {
      margin: ${theme.spacings.medium} 0 ${theme.spacings.xxlarge};

      ${media.lessThan('medium')`
        margin: ${theme.spacings.medium} 0 ${theme.spacings.large};
      `}
    }
  `}
`

export const SectionSkills = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${theme.colors.bg.secondary.dark};
    padding: ${theme.spacings.xxlarge} 0;
    margin-bottom: ${theme.spacings.xxlarge};

    ${media.lessThan('medium')`
      margin-bottom: ${theme.spacings.large};
      padding: ${theme.spacings.large} 0;
    `}
  `}
`

export const Break = styled.div`
  display: flex;
  flex-basis: 100%;
  height: 0;

  ${media.greaterThan('huge')`
    display: none;
  `}

  ${media.lessThan('medium')`
    display: none;
  `}
`

export const CardSkills = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    margin-top: ${theme.spacings.xlarge};
    gap: ${theme.spacings.medium};

    ${media.lessThan('huge')`
      flex-wrap: wrap;
    `}

    ${media.lessThan('medium')`
      flex-direction: column;
      align-items: center;
    `}
  `}
`
export const SectionTools = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${theme.spacings.xxlarge} 0;
    margin-bottom: ${theme.spacings.xxlarge};

    ${media.lessThan('medium')`
      margin-bottom: ${theme.spacings.large};
      padding: ${theme.spacings.large} 0;
    `}

    ${TabTools} {
      margin-top: ${theme.spacings.large};

      ${media.lessThan('large')`
        padding: 0 ${theme.spacings.small};
      `}
    }
  `}
`

export const CallOfLearning = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(2, 40%);
    justify-content: center;
    justify-items: center;
    margin-bottom: calc(${theme.spacings.xxlarge} * 2);
    width: 100%;

    ${media.lessThan('large')`
      grid-template-columns: repeat(2, 1fr);
      padding: 0 ${theme.spacings.small};
    `}

    ${media.lessThan('medium')`
      grid-template-columns: 1fr;
      margin-bottom: calc(${theme.spacings.large} * 2);
    `}

    ${Content} {
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: ${theme.colors.primary.main};
      padding: ${theme.spacings.xxlarge} ${theme.spacings.large};
      border-radius: ${theme.border.radius.large} 0 0
        ${theme.border.radius.large};

      ${media.lessThan('medium')`
        border-radius: ${theme.border.radius.large};
        padding: ${theme.spacings.large} ${theme.spacings.small};
      `}

      ${media.lessThan('small')`
        padding: ${theme.spacings.medium} ${theme.spacings.xsmall};
      `}

      ${HeadingStyles} {
        text-align: center;
        font-family: ${theme.font.highlight};
        margin-bottom: ${theme.spacings.medium};

        ${media.lessThan('large')`
          font-size: ${theme.font.sizes.xxxlarge};
        `}

        ${media.lessThan('medium')`
          font-size: ${theme.font.sizes.xlarge};
        `}
      }
    }

    ${Image} {
      background-image: url('/img/books.svg');
      border-radius: 0 ${theme.border.radius.large} ${theme.border.radius.large}
        0;
      width: inherit;
      background-size: cover;
      background-position: center;
    }
  `}
`

export const Content = styled.div``
export const Image = styled.div``

export const SectionProjectsRecents = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${theme.spacings.xxlarge} 0;
    margin-bottom: ${theme.spacings.xxlarge};
    background-color: ${theme.colors.bg.secondary.dark};

    ${media.lessThan('medium')`
      padding: ${theme.spacings.large} 0;
    `}

    ${media.lessThan('medium')`
      margin-bottom: ${theme.spacings.large};
    `}

    ${ContainerStyles} {
      display: flex;
      flex-direction: column;
      gap: 20rem;
    }
  `}
`

export const Projects = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.huge} 0;
    align-self: normal;

    ${media.lessThan('large')`
      align-self: center;
      margin: ${theme.spacings.huge} 0 ${theme.spacings.large};
    `}
  `}
`

export const SectionContact = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${theme.spacings.xxlarge} 0;
    margin-bottom: ${theme.spacings.xxlarge};

    ${media.lessThan('medium')`
      padding: ${theme.spacings.large} 0;
    `}

    ${FormStyles} {
      margin-top: ${theme.spacings.large};
      width: 80%;

      ${media.greaterThan('huge')`
        width: 50%;
      `}
    }
  `}
`
