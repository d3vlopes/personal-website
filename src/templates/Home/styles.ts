import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { Wrapper as HeroStyles } from 'components/Hero/styles'
import { Wrapper as CardSkillStyles } from 'components/CardSkill/styles'

export const Hero = styled.div`
  ${({ theme }) => css`
    ${HeroStyles} {
      margin: ${theme.spacings.medium} 0 ${theme.spacings.xxlarge};
    }
  `}
`

export const SectionSkills = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${theme.colors.bg.secondary.dark};
    padding: ${theme.spacings.xxlarge} 0;
    margin-bottom: ${theme.spacings.xxlarge};
  `}
`

export const Break = styled.div`
  display: none;

  ${media.lessThan('huge')`
    display: flex;
    flex-basis: 100%;
    height: 0;
  `}
`

export const CardSkills = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    margin-top: ${theme.spacings.xlarge};

    ${CardSkillStyles} {
      margin-left: ${theme.spacings.medium};
    }

    ${media.lessThan('huge')`
      flex-wrap: wrap;
      margin-bottom: ${theme.spacings.medium};

      ${CardSkillStyles} {
        margin-bottom: ${theme.spacings.medium};
      }
    `}

    ${media.lessThan('medium')`
      flex-direction: column;
      align-items: center;

      ${CardSkillStyles} {
        margin-left: 0;
      }
    `}
  `}
`
