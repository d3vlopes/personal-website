import * as S from './styles'

export type HeadingProps = {
  children: React.ReactNode
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  size?: 'large' | 'xlarge' | 'xxlarge' | 'xxxlarge' | 'huge' | 'highlight'
  lineBottom?: boolean
}

const Heading = ({
  children,
  as = 'h1',
  size = 'huge',
  lineBottom = false,
}: HeadingProps) => {
  return (
    <S.Wrapper as={as} size={size} lineBottom={lineBottom}>
      {children}
    </S.Wrapper>
  )
}

export default Heading
