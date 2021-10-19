import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    line-height: 180%;
    color: ${theme.colors.complementary.main};

    ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.xsmall};
    `}

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: ${theme.font.heading};
      color: ${theme.colors.text.light};
      margin: ${theme.spacings.xsmall} 0;
    }

    p {
      margin-bottom: ${theme.spacings.xsmall};
      max-width: 59.7rem;
    }

    a,
    a:visited,
    a:link {
      color: ${theme.colors.primary.main};
      text-decoration: none;
      transition: all ${theme.transition.default};
    }

    a:hover {
      color: ${theme.colors.primary.dark};

      &:hover > img {
        filter: brightness(50%);
      }
    }

    img {
      max-width: 100%;
      transition: all ${theme.transition.default};

      &:hover {
        transform: scale(1.2);
      }
    }

    .image {
      //background: ${theme.colors.bg.secondary.main};
      line-height: 0;
      margin: ${theme.spacings.small} 0;
    }

    .image figcaption {
      font-size: ${theme.font.sizes.xsmall};
      padding: ${theme.spacings.xsmall};
      text-align: center;
      line-height: 1.3;
    }

    .image-half {
      max-width: 50%;
    }

    .image-style-side {
      max-width: 50%;
      float: right;
      margin: ${theme.spacings.small} 0;

      ${media.lessThan('medium')`
      & {
        max-width: 100%;
        float: none;
        }
      `}
    }

    ul,
    ol {
      padding: 0 ${theme.spacings.small} ${theme.spacings.xsmall};
    }

    hr {
      border: none;
      border-bottom: 0.1rem solid ${theme.colors.bg.secondary.main};
    }

    code {
      font-family: monospace;
      color: ${theme.colors.complementary.main};
      font-size: ${theme.font.sizes.xsmall};
      background: ${theme.colors.bg.secondary.dark};
      padding: 0.2rem;
      margin: 0.2rem;
    }

    pre {
      background: ${theme.colors.bg.secondary.dark};
      padding: ${theme.spacings.small};
      font-family: monospace;
      color: ${theme.colors.text.light};
      margin: ${theme.spacings.small} 0;
      width: 100%;
      overflow-x: auto;
      font-size: ${theme.font.sizes.xsmall};
    }

    pre code {
      color: inherit;
      background: inherit;
    }

    .table {
      width: 100%;
      overflow: hidden;
      overflow-x: auto;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin: ${theme.spacings.small} 0;
    }

    table td,
    table th {
      padding: ${theme.spacings.xsmall};
      border-bottom: 0.1rem solid ${theme.colors.bg.secondary.main};
    }

    blockquote {
      border-left: 0.5rem solid ${theme.colors.primary.main};
      color: ${theme.colors.complementary.main};
      /* filter: brightness(80%); */
      padding-left: ${theme.spacings.small};
      margin: ${theme.spacings.small};
    }
  `}
`
