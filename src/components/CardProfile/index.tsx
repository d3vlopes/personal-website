import * as S from './styles'

export type CardProfileProps = {
  image: string
  name: string
  age: number
  city: string
  liking: string
  dream: string
}

const CardProfile = ({
  image,
  name,
  age,
  city,
  liking,
  dream,
}: CardProfileProps) => {
  return (
    <S.Wrapper>
      <S.Image role="img" src={image} aria-label={name} />
      <S.Details>
        <div>
          <S.Heading>
            Nome: <span>{name}</span>
          </S.Heading>
          <S.Heading>
            Idade: <span>{age} anos</span>
          </S.Heading>
        </div>
        <S.Heading>
          Cidade: <span>{city}</span>
        </S.Heading>
        <S.Heading>
          Interesses: <span>{liking}</span>
        </S.Heading>
        <S.Heading>
          Sonho: <span>{dream}</span>
        </S.Heading>
      </S.Details>
    </S.Wrapper>
  )
}

export default CardProfile
