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
    padding: 3rem;
    transition: all 0.3s ease-in-out;
    height: min(29.6rem, 33rem);

    &:hover {
      transform: scale(1.1);
      background: ${theme.colors.complementary.dark};
      box-shadow: 0px 10px 15px rgba(202, 213, 217, 0.1);

      ${Title}::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -0.8rem;
        margin-bottom: ${theme.spacings.xsmall};
        width: 100%;
        display: inline-flex;
        border: 0.2rem solid ${theme.colors.primary.main};
        margin-bottom: ${theme.spacings.xxsmall};
      }
    }
  `}
`

export const Icon = styled.img`
  max-width: min(6rem, 100%);
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
    padding: ${theme.spacings.xsmall};
  `}
`
