import * as S from './styles'

export type CardSkillProps = {
  icon: string
  title: string
  description: string
}

const CardSkill = ({ icon, title, description }: CardSkillProps) => {
  return (
    <S.Wrapper>
      <S.Icon src={icon} alt={title} />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Wrapper>
  )
}

export default CardSkill
