import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { Wrapper as HeadingStyles } from 'components/Heading/styles'
import { Wrapper as CardTimeline } from 'components/CardTimeline/styles'
import { Wrapper as TextContentStyles } from 'components/TextContent/styles'

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

    ${HeadingStyles} {
      margin-bottom: ${theme.spacings.small};
    }

    ${media.greaterThan('medium')`
      ${CardTimeline} {
        margin-top: ${theme.spacings.xxlarge};
      }
    `}
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

export const SectionTimeline = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.bg.secondary.light};
    padding: ${theme.spacings.xxlarge} 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${theme.spacings.xxlarge};
    margin-top: -${theme.spacings.xxlarge};
    border-radius: ${theme.border.radius.medium};

    ${media.lessThan('medium')`
      padding: ${theme.spacings.xxlarge} ${theme.spacings.xsmall};
    `}

    ${TextContentStyles} {
      p {
        max-width: 78.7rem;
      }
    }
  `}
`
