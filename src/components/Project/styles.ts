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
    font-size: ${theme.font.sizes.xsmall};
    line-height: 170%;
    color: ${theme.colors.complementary.main};
    margin: ${theme.spacings.xsmall} 0 ${theme.spacings.medium};
    max-width: 59.8rem;
    width: 100%;
  `}
`
