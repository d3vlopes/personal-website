import { forwardRef, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'small' | 'medium' | 'large'
  icon?: JSX.Element
  expand?: boolean
  hoverUp?: boolean
  as?: React.ElementType
} & ButtonTypes

const Button: React.ForwardRefRenderFunction<S.WrapperProps, ButtonProps> = (
  {
    children,
    variant = 'primary',
    size = 'medium',
    icon,
    expand = false,
    hoverUp = false,
    ...props
  },
  ref,
) => (
  <S.Wrapper
    variant={variant}
    size={size}
    hasIcon={!!icon}
    expand={expand}
    hoverUp={hoverUp}
    ref={ref}
    {...props}
  >
    {icon}

    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default forwardRef(Button)
