import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { Wrapper as ButtonStyles } from 'components/Button/styles'
import { Wrapper as HeadingStyles } from 'components/Heading/styles'

type CoverProps = {
  src: string
}

export const Cover = styled.div<CoverProps>`
  ${({ src, theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 60rem;
    background-image: linear-gradient(
        177.39deg,
        rgba(0, 0, 0, 0.2) 45%,
        rgba(0, 0, 0, 0) 100%
      ),
      url(${src});
    background-size: cover;
    background-position: top center;
    background-repeat: no-repeat;

    ${media.lessThan('medium')`
      background-size: 100% 100%;
    `}

    ${HeadingStyles} {
      margin-bottom: ${theme.spacings.xsmall};
      font-family: ${theme.font.highlight};
    }

    ${ButtonStyles} {
      background: ${theme.colors.primary.main};
      border: none;

      span,
      svg {
        color: ${theme.colors.complementary.light};
      }
    }

    ${ButtonStyles}:hover {
      background: ${theme.colors.primary.dark};

      span,
      svg {
        color: ${theme.colors.complementary.main};
      }
    }
  `}
`
