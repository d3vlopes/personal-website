import Link from 'next/link'

import Heading from 'components/Heading'
import Button from 'components/Button'

import * as S from './styles'

export type ProjectProps = {
  src: string
  name: string
  description: string
  slug: string
}

const Project = ({ src, name, description, slug }: ProjectProps) => {
  return (
    <S.Wrapper>
      <S.ImageWrapper>
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
        >
          Saber mais
        </Button>
      </S.ContentContainer>
    </S.Wrapper>
  )
}

export default Project
