import { forwardRef, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'small' | 'medium' | 'large'
  expand?: boolean
  icon?: JSX.Element
  as?: React.ElementType
} & ButtonTypes

const Button: React.ForwardRefRenderFunction<S.WrapperProps, ButtonProps> = (
  {
    children,
    icon,
    size = 'medium',
    expand = false,
    variant = 'primary',
    ...props
  },
  ref,
) => (
  <S.Wrapper
    size={size}
    expand={expand}
    hasIcon={!!icon}
    variant={variant}
    ref={ref}
    {...props}
  >
    {icon}

    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default forwardRef(Button)
