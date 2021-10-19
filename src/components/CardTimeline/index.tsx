import TextContent from 'components/TextContent'

import * as S from './styles'

export type CardTimelineProps = {
  title: string
  content: string
}

const CardTimeline = ({ title, content }: CardTimelineProps) => {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <TextContent content={content} />
    </S.Wrapper>
  )
}

export default CardTimeline
