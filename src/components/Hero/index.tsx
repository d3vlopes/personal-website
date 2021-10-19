import Link from 'next/link'

import Button from 'components/Button'
import Heading from 'components/Heading'
import MediaMatch from 'components/MediaMatch'

import * as S from './styles'

export type HeroProps = {
  photo: string
  hello?: string
  name: string
  description: string
  buttonText: string
}

const Hero = ({ photo, hello, name, description, buttonText }: HeroProps) => {
  return (
    <S.Wrapper>
      <S.Card>
        <S.Window>
          <span></span>
          <span></span>
          <span></span>
        </S.Window>
        <S.ContainerCard>
          <S.Photo role="img" src={photo} aria-label={name} />
          <div>
            {!!hello && <S.Hello>{hello}</S.Hello>}
            <Heading size="highlight">{name}</Heading>
            <S.Description>{description}</S.Description>
            <MediaMatch greaterThan="medium">
              <Link href="/about" passHref>
                <Button as="a" expand hoverUp data-testid="button">
                  {buttonText}
                </Button>
              </Link>
            </MediaMatch>
            <MediaMatch lessThan="medium">
              <Link href="/about" passHref>
                <Button as="a" hoverUp>
                  {buttonText}
                </Button>
              </Link>
            </MediaMatch>
          </div>
        </S.ContainerCard>
      </S.Card>
    </S.Wrapper>
  )
}

export default Hero
