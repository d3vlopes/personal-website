import { Github } from '@styled-icons/boxicons-logos'
import { Behance } from '@styled-icons/evaicons-solid/Behance'

import Base from 'templates/Base'

import { ContactLinkProps } from 'components/ContactLink'
import { MenuProps } from 'components/Menu'
import ProjectBanner, { ProjectBannerProps } from 'components/ProjectBanner'
import TextContent from 'components/TextContent'
import Button from 'components/Button'
import Project, { ProjectProps } from 'components/Project'

import * as S from './styles'
import Heading from 'components/Heading'

export type ProjectTemplateProps = {
  menu: MenuProps
  footer: ContactLinkProps[]
  banner: ProjectBannerProps
  content: string
  projectCodeUrl: string
  projectDesignUrl: string
  moreProjects: ProjectProps[]
}

const ProjectTemplate = ({
  menu,
  footer,
  banner,
  content,
  projectCodeUrl,
  projectDesignUrl,
  moreProjects,
}: ProjectTemplateProps) => {
  const renderMoreProjects = (project: ProjectProps) => (
    <S.ProjectContainer key={`project-${project.slug}`} data-testid="project">
      <Project variant="grid" {...project} />
    </S.ProjectContainer>
  )

  return (
    <Base menu={menu} footer={footer}>
      <S.Wrapper>
        <ProjectBanner {...banner} />
        <S.Main>
          <S.Content>
            <TextContent content={content} />
            <S.ButtonGroup>
              <Button
                as="a"
                role="button"
                href={projectCodeUrl}
                target="_blank"
                variant="outline"
                icon={<Github />}
              >
                Ver código
              </Button>
              <Button
                as="a"
                role="button"
                href={projectDesignUrl}
                target="_blank"
                variant="outline"
                icon={<Behance />}
              >
                Ver design
              </Button>
            </S.ButtonGroup>
          </S.Content>
          <S.SectionMoreProjects>
            <Heading as="h2" size="xxxlarge" lineBottom>
              Mais projetos
            </Heading>
            <S.Projects>{moreProjects.map(renderMoreProjects)}</S.Projects>
          </S.SectionMoreProjects>
        </S.Main>
      </S.Wrapper>
    </Base>
  )
}

export default ProjectTemplate
