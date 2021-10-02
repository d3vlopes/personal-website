import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { Wrapper as HeadingStyles } from 'components/Heading/styles'
import { Wrapper as ButtonStyles } from 'components/Button/styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.bg.main};
    background-image: url('/img/hero/hero-left.svg');
    background-repeat: repeat;
    background-size: contain;
    background-position: center;
    width: 100%;
    min-height: 44rem;

    ${media.lessThan('medium')`
      padding: 0 ${theme.spacings.small} 0 ${theme.spacings.small};
      background-image: url('/img/hero/hero-top.svg'), url('/img/hero/hero-bottom.svg');
      background-repeat: no-repeat;
      background-position: top left, bottom right;
    `}
  `}
`

export const Card = styled.div`
  ${({ theme }) => css`
    position: relative;
    margin: ${theme.spacings.xlarge} 0 ${theme.spacings.xxlarge} 0;
    width: 100%;
    max-width: 66.4rem;
    background-color: ${theme.colors.bg.main};
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.08);

    ${ContainerCard} {
      padding: ${theme.spacings.medium} 0 ${theme.spacings.large} 1rem;

      ${media.lessThan('medium')`
        text-align: center;
      `}

      ${HeadingStyles} {
        margin-top: -${theme.spacings.xxsmall};

        ${media.lessThan('medium')`
          font-size: ${theme.font.sizes.huge};
        `}
      }

      ${ButtonStyles} {
        margin-top: ${theme.spacings.small};
      }
    }
  `}
`

export const ContainerCard = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6rem;

    ${media.lessThan('medium')`
      flex-direction: column;
      gap: ${theme.spacings.small};
    `}
  `}
`

export const Window = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    gap: 0.4rem;
    width: 100%;
    height: 4.6rem;
    padding: ${theme.spacings.xsmall};

    span:nth-child(1) {
      width: 1.4rem;
      height: 2rem;
      border-radius: 50%;
      background-color: #e31b1b;
    }

    span:nth-child(2) {
      width: 1.4rem;
      height: 2rem;
      border-radius: 50%;
      background-color: #e3cf1b;
    }

    span:nth-child(3) {
      width: 1.4rem;
      height: 2rem;
      border-radius: 50%;
      background-color: #43e31b;
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      border-bottom: 1px solid #2d2c2c;
      width: 100%;
    }
  `}
`

type PhotoProps = {
  src: string
}

export const Photo = styled.div<PhotoProps>`
  ${({ src }) => css`
    border-radius: 50%;
    width: 12.5rem;
    height: 12.5rem;
    max-width: 100%;
    background-image: url(${src});
    background-repeat: no-repeat;
    background-size: cover;
  `}
`

export const Hello = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.complementary.dark};
    margin-bottom: 0.4rem;

    ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.xxsmall};
    `}
  `}
`

export const Description = styled.h2`
  ${({ theme }) => css`
    font-weight: 400;
    font-size: ${theme.font.sizes.small};
    line-height: 150%;
    color: ${theme.colors.complementary.dark};
    margin-top: 0rem;

    ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.xsmall};
    `}
  `}
`
