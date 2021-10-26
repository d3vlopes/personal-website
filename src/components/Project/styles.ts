import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: flex;
  gap: 0 8rem;

  ${media.lessThan('large')`
    flex-direction: column;
    gap: 8rem 0;
  `}

  ${media.lessThan('medium')`
    align-items: center;
  `}
`

export const ImageWrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    z-index: 1;

    ${media.between('medium', 'huge')`
      left: ${theme.spacings.small};
    `}

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

export const Image = styled.img`
  ${({ theme }) => css`
    width: 100%;
    max-width: 51.3rem;
    box-shadow: 10px 15px 10px 2px rgba(0, 0, 0, 0.15);
    border-radius: ${theme.border.radius.small};

    ${media.lessThan('medium')`
        height: 23.4rem;
      `}
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
    display: flex;
    flex-direction: column;
    width: min(100%, 39.8rem);

    a {
      text-decoration: none;
      color: ${theme.colors.text.light};
      transition: color ${theme.transition.default};

      &:hover {
        color: ${theme.colors.primary.main};
      }
    }
  `}
`

export const ImageGrid = styled.img`
  ${({ theme }) => css`
    min-height: 29.2rem;
    width: 100%;
    border-radius: ${theme.border.radius.medium} ${theme.border.radius.medium} 0
      0;
  `}
`

export const ContentGridContainer = styled.div`
  ${({ theme }) => css`
    display: inline-block;
    background-color: ${theme.colors.bg.secondary.main};
    min-height: 16.6rem;
    border-radius: 0 0 ${theme.border.radius.medium}
      ${theme.border.radius.medium};
    margin-top: -3rem;
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
  `}
`
