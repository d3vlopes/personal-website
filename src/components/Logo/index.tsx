import * as S from './styles'

export type LogoProps = {
  size?: 'small' | 'large'
}

const Logo = ({ size = 'large' }: LogoProps) => {
  return (
    <S.Wrapper size={size}>
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="LL"
      >
        <path
          d="M2.24078 13.7864L28.5965 0.879772C29.7274 0.325954 31.0531 0.337011 32.1746 0.909618L57.8189 14.0027C59.1575 14.6861 60 16.0622 60 17.5652V42.8653C60 44.3863 59.1373 45.7757 57.7741 46.4503L32.1441 59.1335C31.0391 59.6803 29.7437 59.687 28.6331 59.1516L2.26305 46.4398C0.87948 45.7728 0 44.3725 0 42.8366V17.3788C0 15.8518 0.869389 14.458 2.24078 13.7864Z"
          fill="#23252F"
        />
        <path
          d="M20.3904 43.1483V21.5454H23.3891V39.8483H38.0996V43.1483H20.3904Z"
          stroke="#6D59A8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M26.8047 38.1244V16.5215H29.8034V34.8244H44.5138V38.1244H26.8047Z"
          stroke="#6D59A8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </S.Wrapper>
  )
}

export default Logo
