import { Fragment } from 'react'

import Base from 'templates/Base'

import Heading from 'components/Heading'
import CardSkill, { CardSkillProps } from 'components/CardSkill'
import Hero, { HeroProps } from 'components/Hero'
// import { Container } from 'components/Container'
import { MenuProps } from 'components/Menu'
import { ContactLinkProps } from 'components/ContactLink'

import * as S from './styles'

export type HomeTemplateProps = {
  menu: MenuProps
  footer: ContactLinkProps[]
  hero: HeroProps
  skills: CardSkillProps[]
}

const Home = ({ menu, footer, hero, skills }: HomeTemplateProps) => {
  const renderCardSkills = (skill: CardSkillProps) => {
    return (
      <Fragment key={`skill-${skill.title}`}>
        <CardSkill {...skill} />
      </Fragment>
    )
  }

  return (
    <Base menu={menu} footer={footer}>
      <S.Hero>
        <Hero {...hero} />
      </S.Hero>
      <S.SectionSkills>
        <Heading as="h2" lineBottom size="huge">
          Qualidades
        </Heading>
        <S.CardSkills>
          {skills.slice(0, 2).map(renderCardSkills)}
          <S.Break />
          {skills.slice(2).map(renderCardSkills)}
        </S.CardSkills>
      </S.SectionSkills>
    </Base>
  )
}

export default Home
