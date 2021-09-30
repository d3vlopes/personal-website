import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 8rem;
    margin-bottom: calc(${theme.spacings.huge} + 4.6rem);

    ${media.lessThan('large')`
      flex-direction: column;
    `}

    ${media.lessThan('medium')`
      align-items: center;
    `}

    &:last-of-type {
      margin-bottom: ${theme.spacings.huge};
    }
  `}
`

export const ImageWrapper = styled.div`
  ${({ theme }) => css`
    position: relative;

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
