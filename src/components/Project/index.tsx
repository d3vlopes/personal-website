import Link from 'next/link'

import Heading from 'components/Heading'
import Button from 'components/Button'

import * as S from './styles'

export type ProjectProps = {
  src: string
  name: string
  description: string
  slug: string
  variant?: 'list' | 'grid'
}

const Project = ({
  src,
  name,
  description,
  slug,
  variant = 'list',
}: ProjectProps) => {
  const renderList = () => {
    return (
      <S.Wrapper>
        <S.ImageWrapper data-testid="list">
          <Link href={`/project/${slug}`} passHref>
            <a>
              <S.Image src={src} alt={name} />
            </a>
          </Link>
        </S.ImageWrapper>
        <S.ContentContainer>
          <Heading as="h3" size="xxxlarge">
            {name}
          </Heading>
          <S.Description>{description}</S.Description>
          <Button
            size="small"
            data-testid="button"
            as="a"
            href={`/project/${slug}`}
            hoverUp
          >
            Saber mais
          </Button>
        </S.ContentContainer>
      </S.Wrapper>
    )
  }

  const renderGrid = () => {
    return (
      <S.WrapperGrid data-testid="grid">
        <Link href={`/project/${slug}`} passHref>
          <a>
            <S.ImageGrid src={src} alt={name} />
          </a>
        </Link>
        <Link href={`/project/${slug}`} passHref>
          <a>
            <S.ContentGridContainer>
              <Heading as="h3" size="large">
                {name}
              </Heading>
              <S.DescriptionGrid>{description}</S.DescriptionGrid>
            </S.ContentGridContainer>
          </a>
        </Link>
      </S.WrapperGrid>
    )
  }

  return <>{variant === 'list' ? renderList() : renderGrid()}</>
}

export default Project
