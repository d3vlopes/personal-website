/* eslint-disable @next/next/no-img-element */
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
          <S.Photo src={photo} data-testid="photo" />
          <div>
            {!!hello && <S.Hello>{hello}</S.Hello>}
            <Heading size="highlight">{name}</Heading>
            <S.Description>{description}</S.Description>
            <MediaMatch greaterThan="medium">
              <Button expand hoverUp data-testid="button">
                {buttonText}
              </Button>
            </MediaMatch>
            <MediaMatch lessThan="medium">
              <Button hoverUp>{buttonText}</Button>
            </MediaMatch>
          </div>
        </S.ContainerCard>
      </S.Card>
    </S.Wrapper>
  )
}

export default Hero
