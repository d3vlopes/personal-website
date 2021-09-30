import styled, { css } from 'styled-components'
import SVG from 'react-inlinesvg'
import media from 'styled-media-query'

export const Wrapper = styled.div``

export const Icon = styled(SVG)`
  ${({ theme }) => css`
    width: 4.5rem;
    height: 4.5rem;
    transition: all ${theme.transition.default};
    color: ${theme.colors.primary.main};

    ${media.lessThan('large')`
      width: 4rem;
      height: 4rem;
    `}

    &:hover {
      color: ${theme.colors.complementary.main};
      transform: rotate(360deg);
    }
  `}
`
