// import Link from 'next/link'

import { Fragment } from 'react'

import Base from 'templates/Base'

// import Button from 'components/Button'
// import MediaMatch from 'components/MediaMatch'
import Heading from 'components/Heading'
import Form from 'components/Form'
import TabTools, { TabToolsProps } from 'components/TabTools'
import CardSkill, { CardSkillProps } from 'components/CardSkill'
import Hero, { HeroProps } from 'components/Hero'
import Project, { ProjectProps } from 'components/Project'
import { Container } from 'components/Container'
import { MenuProps } from 'components/Menu'
import { ContactLinkProps } from 'components/ContactLink'

import * as S from './styles'

export type HomeTemplateProps = {
  menu: MenuProps
  footer: ContactLinkProps[]
  hero: HeroProps
  skills: CardSkillProps[]
  tools: TabToolsProps
  projects: ProjectProps[]
}

const HomeTemplate = ({
  menu,
  footer,
  hero,
  skills,
  tools,
  projects,
}: HomeTemplateProps) => {
  const renderCardSkills = (skill: CardSkillProps) => {
    return (
      <Fragment key={`skill-${skill.title}`}>
        <CardSkill {...skill} />
      </Fragment>
    )
  }

  const renderProjects = (project: ProjectProps) => {
    return (
      <Fragment key={`project-${project.slug}`}>
        <Project {...project} />
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
      <S.SectionTools>
        <Heading as="h2" lineBottom size="huge">
          Ferramentas
        </Heading>
        <TabTools {...tools} />
      </S.SectionTools>

      <S.SectionProjectsRecents>
        <Heading as="h2" lineBottom size="huge">
          Projetos recentes
        </Heading>
        <S.Projects>
          <Container>{projects.map(renderProjects)}</Container>
        </S.Projects>
      </S.SectionProjectsRecents>
      <S.SectionContact>
        <Heading as="h2" lineBottom size="huge">
          Contato
        </Heading>
        <Form />
      </S.SectionContact>
    </Base>
  )
}

export default HomeTemplate
