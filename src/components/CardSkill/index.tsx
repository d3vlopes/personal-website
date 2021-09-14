import * as S from './styles'

export type CardSkillProps = {
  icon?: JSX.Element
  title: string
  description: string
}

const CardSkill = ({ icon, title, description }: CardSkillProps) => {
  return (
    <S.Wrapper>
      {!!icon && <S.Icon>{icon}</S.Icon>}
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Wrapper>
  )
}

export default CardSkill
