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
      <S.Content>
        <TextContent content={content} />
      </S.Content>
    </S.Wrapper>
  )
}

export default CardTimeline
