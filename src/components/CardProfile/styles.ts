import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  animation: moveUp 0.9s cubic-bezier(0.425, 1.14, 0.47, 1.125) forwards;

  @keyframes moveUp {
    0% {
      opacity: 0;
      bottom: -50rem;
    }

    100% {
      opacity: 1;
      bottom: 0px;
    }
  }
`

type ImageProps = {
  src: string
}

export const Image = styled.div<ImageProps>`
  ${({ src }) => css`
    border-radius: 50%;
    width: 12.5rem;
    height: 12.5rem;
    max-width: 100%;
    background-image: url(${src});
    background-size: cover;
  `}
`

export const Details = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    background: ${theme.colors.bg.secondary.dark};
    border-radius: ${theme.border.radius.large};
    margin-top: ${theme.spacings.large};
    padding: ${theme.spacings.small} ${theme.spacings.medium};
    width: 100%;
    max-width: 43.1rem;

    & > div:nth-child(1) {
      display: flex;
      gap: 1.6rem;

      ${media.lessThan('medium')`
        flex-direction: column;
      `}
    }
  `}
`

export const Heading = styled.h3`
  ${({ theme }) => css`
    font-family: ${theme.font.heading};
    font-size: ${theme.font.sizes.medium};

    span {
      font-family: ${theme.font.body};
      font-size: ${theme.font.sizes.small};
      font-weight: ${theme.font.weight.regular};
      color: ${theme.colors.complementary.main};
    }
  `}
`
