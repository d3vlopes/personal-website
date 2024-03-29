import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    background: ${theme.colors.bg.secondary.dark};
    border-radius: ${theme.border.radius.medium};
    padding: ${theme.spacings.small} ${theme.spacings.large}
      ${theme.spacings.small};
    width: 100%;
    max-width: 86.7rem;

    &::before {
      position: absolute;
      content: '';
      border-bottom: 1px solid ${theme.colors.bg.secondary.light};
      top: 10.5rem;
      left: 0;
      right: 0;
    }

    .content {
      padding: ${theme.spacings.large} 0;
    }
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-family: ${theme.font.heading};
    font-size: ${theme.font.sizes.xxlarge};
    color: ${theme.colors.text.light};
    padding: ${theme.spacings.small} 0;

    ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.medium};
    `}

    ${media.lessThan('small')`
      font-size: ${theme.font.sizes.small};
    `}
  `}
`

export const Content = styled.div``
