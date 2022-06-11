import * as S from './styles'

export type TextContentProps = {
  content: string
}

const TextContent = ({ content }: TextContentProps) => {
  return (
    <S.Wrapper>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </S.Wrapper>
  )
}

export default TextContent
