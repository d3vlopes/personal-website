import Image from 'next/image'

import * as S from './styles'

export type CardSkillProps = {
  icon: string
  title: string
  description: string
}

const CardSkill = ({ icon, title, description }: CardSkillProps) => {
  return (
    <S.Wrapper>
      <Image src={icon} alt={title} width={60} height={60} />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Wrapper>
  )
}

export default CardSkill
