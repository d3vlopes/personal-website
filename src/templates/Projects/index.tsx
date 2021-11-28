import { useState } from 'react'
import { NextSeo } from 'next-seo'
import { ViewList as List, Grid } from '@styled-icons/bootstrap/'

import Base from 'templates/Base'

import { ContactLinkProps } from 'components/ContactLink'
import { MenuProps } from 'components/Menu'
import { Container } from 'components/Container'
import Project, { ProjectProps } from '../../components/Project'
import Heading from 'components/Heading'

import * as S from './styles'

export type ProjectsTemplateProps = {
  menu: MenuProps
  footer: ContactLinkProps[]
  title: string
  subtitle: string
  projects: ProjectProps[]
}

const ProjectsTemplate = ({
  menu,
  footer,
  title,
  subtitle,
  projects,
}: ProjectsTemplateProps) => {
  const [display, setDisplay] = useState('grid')
  const [active, setActive] = useState(true)
  const [fadeIn, setFadeIn] = useState(false)

  const handleChangeDisplay = (newDisplay: string) => {
    if (newDisplay !== display) {
      setDisplay(newDisplay)
      setActive(!active)
      setFadeIn(true)

      setTimeout(() => {
        setFadeIn(false)
      }, 1000)
    }
  }

  const renderProjects = (project: ProjectProps) => (
    <S.ProjectContainer
      key={`project-${project.slug}`}
      data-testid="project-container"
      display={display}
    >
      <Project
        variant={`${display === 'grid' ? 'grid' : 'list'}`}
        {...project}
      />
    </S.ProjectContainer>
  )

  return (
    <Base menu={menu} footer={footer}>
      <NextSeo title={'Projetos | Leandro Lopes'} description={subtitle} />
      <S.Wrapper>
        <Heading lineBottom>{title}</Heading>
        <S.Subtitle>{subtitle}</S.Subtitle>
        <Container>
          <S.LayoutDisplayContainer>
            <span>Exibição:</span>
            <div>
              <S.ButtonLayoutDisplay
                data-testid="button-grid"
                onClick={() => handleChangeDisplay('grid')}
                active={active}
                title="Exibição em grid"
              >
                <Grid size={16} />
              </S.ButtonLayoutDisplay>
              <S.ButtonLayoutDisplay
                data-testid="button-list"
                onClick={() => handleChangeDisplay('list')}
                active={!active}
                title="Exibição em lista"
              >
                <List size={16} />
              </S.ButtonLayoutDisplay>
            </div>
          </S.LayoutDisplayContainer>
          <S.SectionProjects
            data-testid="section-projects"
            display={display}
            fadeIn={fadeIn}
          >
            {projects.map(renderProjects)}
          </S.SectionProjects>
        </Container>
      </S.Wrapper>
    </Base>
  )
}

export default ProjectsTemplate
