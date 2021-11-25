import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { Wrapper as HeadingStyles } from 'components/Heading/styles'

export const Wrapper = styled.div`
  display: flex;
  gap: 0 8rem;

  ${media.lessThan('large')`
    flex-direction: column;
    gap: 8rem 0;
  `}

  ${media.lessThan('large')`
    align-items: center;
  `}
`

export const ImageWrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    z-index: 1;

    div {
      box-shadow: 10px 15px 10px 2px rgba(0, 0, 0, 0.15);
    }

    img {
      width: 100%;
      border-radius: ${theme.border.radius.small};

      ${media.lessThan('medium')`
        height: 21rem;
      `}
    }

    &::before {
      content: '';
      position: absolute;
      top: -4.6rem;
      left: -4.6rem;
      max-width: 48.1rem;
      width: 100%;
      height: 24.1rem;
      background: ${theme.colors.bg.secondary.main};
      z-index: -1;

      ${media.between('medium', 'huge')`
        left: -2.6rem;
      `}

      ${media.lessThan('medium')`
        top: -20%;
        height: 20rem;
      `}
    }
  `}
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    line-height: 170%;
    color: ${theme.colors.complementary.main};
    margin: ${theme.spacings.xsmall} 0 ${theme.spacings.medium};
    max-width: 59.8rem;
    width: 100%;

    ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.xsmall};
    `}
  `}
`

export const WrapperGrid = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;

    a {
      text-decoration: none;
      color: ${theme.colors.text.light};
      transition: color ${theme.transition.default};

      img {
        width: 100%;
        border-radius: ${theme.border.radius.medium}
          ${theme.border.radius.medium} 0 0;
      }

      &:hover {
        color: ${theme.colors.primary.main};
      }
    }

    ${HeadingStyles} {
      margin-bottom: 0;
    }
  `}
`

export const ContentGridContainer = styled.div`
  ${({ theme }) => css`
    text-align: center;
    padding: ${theme.spacings.medium} ${theme.spacings.xsmall};
  `}
`

export const DescriptionGrid = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    line-height: 1.5;
    color: ${theme.colors.complementary.main};
    margin-top: ${theme.spacings.xxsmall};

    ${media.lessThan('medium')`
      display: none;
    `}
  `}
`
