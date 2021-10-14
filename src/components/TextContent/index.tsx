import { useEffect } from 'react'
import mediumZoom from 'medium-zoom'

import * as S from './styles'

export type TextContentProps = {
  content: string
}

const TextContent = ({ content }: TextContentProps) => {
  useEffect(() => {
    const imgs = document.querySelectorAll('.content > img')
    const styles = {
      margin: 24,
      background: 'rgba(0, 0, 0, 0.7)',
    }

    mediumZoom(imgs, styles)
  }, [])

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
