import Image, { ImageLoaderProps } from 'next/image'
import { useState, Fragment } from 'react'

import { CodeCurly } from '@styled-icons/boxicons-regular/CodeCurly'
import { Palette } from '@styled-icons/boxicons-solid/Palette'

import * as S from './styles'

type Tool = {
  src: string
  name: string
}

export type TabToolsProps = {
  developer: Tool[]
  design: Tool[]
}

const TabTools = ({ developer, design }: TabToolsProps) => {
  const [isOpen, setIsOpen] = useState(true)

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  const Loader = ({ src, width, quality }: ImageLoaderProps) => {
    return `${src}?w=${width}&q=${quality || 75}`
  }

  const renderTools = (tool: Tool) => {
    return (
      <Fragment key={`tool-${tool.name}`}>
        <S.Tool>
          <Image
            loader={Loader}
            src={tool.src}
            alt={tool.name}
            width={35}
            height={35}
          />
          <p>{tool.name}</p>
        </S.Tool>
      </Fragment>
    )
  }

  return (
    <S.Wrapper>
      <S.Tabs active={isOpen}>
        <S.Button active={isOpen} onClick={handleOpen} disabled={isOpen}>
          <CodeCurly data-testid="icon-development" /> Development
        </S.Button>

        <S.Button active={!isOpen} onClick={handleOpen} disabled={!isOpen}>
          <Palette data-testid="icon-design" /> Design
        </S.Button>
      </S.Tabs>

      <S.Content
        active={isOpen}
        aria-hidden={!isOpen}
        data-testid="content-development"
      >
        {developer.map(renderTools)}
      </S.Content>
      <S.Content
        active={!isOpen}
        aria-hidden={isOpen}
        data-testid="content-design"
      >
        {design.map(renderTools)}
      </S.Content>
    </S.Wrapper>
  )
}

export default TabTools
