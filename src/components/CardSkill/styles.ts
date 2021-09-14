import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${theme.colors.complementary.main};
    border-radius: ${theme.border.radius.large};
    width: min(29rem, 100%);
    padding: 4.1rem 0 6.1rem 0;
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: scale(1.1);
      background: ${theme.colors.complementary.dark};
      box-shadow: 0px 20px 40px rgba(202, 213, 217, 0.1);

      ${Title}::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -0.4rem;
        width: 100%;
        display: inline-flex;
        border: 0.2rem solid ${theme.colors.primary.main};
        margin-bottom: ${theme.spacings.xxsmall};
      }
    }
  `}
`

export const Icon = styled.div`
  ${({ theme }) => css`
    svg {
      width: 6rem;
      height: 6rem;
      color: ${theme.colors.primary.main};
    }
  `}
`

export const Title = styled.h3`
  ${({ theme }) => css`
    position: relative;
    font-family: ${theme.font.heading};
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors.text.dark};
    padding: ${theme.spacings.xsmall} 0 ${theme.spacings.xxsmall} 0;
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    line-height: 150%;
    text-align: center;
    color: ${theme.colors.text.dark};
    padding: 0 ${theme.spacings.xsmall};
  `}
`
