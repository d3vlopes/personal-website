import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { Cover as ProjectBannerStyles } from 'components/ProjectBanner/styles'
import { Wrapper as HeadingStyles } from 'components/Heading/styles'
import { ContentGridContainer as ProjectStyles } from 'components/Project/styles'

export const Wrapper = styled.div`
  ${ProjectBannerStyles} {
    margin-top: 11rem;
  }
`

export const Main = styled.main``

export const Content = styled.div`
  max-width: 59.7rem;
  margin: calc(60rem + 4rem) auto 0;
`

export const ButtonGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: ${theme.spacings.xsmall};
    margin: ${theme.spacings.large} 0 ${theme.spacings.xxlarge};
  `}
`

export const SectionMoreProjects = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${theme.colors.bg.secondary.main};
    padding: ${theme.spacings.xxlarge} 0;

    ${HeadingStyles} {
      margin-bottom: ${theme.spacings.xxlarge};
    }
  `}
`

export const ProjectContainer = styled.div``

export const Projects = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: ${theme.spacings.medium};
    padding: 0 ${theme.spacings.small};

    ${ProjectContainer} {
      max-width: 39.7rem;

      div a > img {
        border-radius: ${theme.border.radius.small};
        box-shadow: 3px 5px 10px 15px rgba(0, 0, 0, 0.05);
      }

      ${ProjectStyles} {
        text-align: left;

        h3 {
          margin-bottom: 1.6rem;
        }

        p {
          margin-top: 0;
          font-size: ${theme.font.sizes.xsmall};
          width: 38rem;

          ${media.lessThan('medium')`
            display: inherit;
            width: 100%;
          `}
        }
      }
    }
  `}
`
