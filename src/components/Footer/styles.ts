import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${theme.spacings.xlarge} 0 ${theme.spacings.xsmall};
    background: ${theme.colors.bg.secondary.dark};

    @keyframes pulse {
      to {
        transform: scale(1.2);
      }
    }

    p {
      font-size: ${theme.font.sizes.small};
      line-height: 150%;
      color: ${theme.colors.grey};

      svg {
        color: red;

        &:hover {
          animation: pulse 0.25s infinite alternate;
        }
      }

      span:nth-child(2) {
        color: ${theme.colors.white};
      }
    }
  `}
`

export const ContactLinks = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.xsmall};
    margin-bottom: ${theme.spacings.xsmall};
  `}
`
