import { Github } from '@styled-icons/boxicons-logos'
import { Behance } from '@styled-icons/evaicons-solid/Behance'
import { OpenFolder } from '@styled-icons/fluentui-system-filled/OpenFolder'

import Base from 'templates/Base'

import { Container } from 'components/Container'
import { ContactLinkProps } from 'components/ContactLink'
import { MenuProps } from 'components/Menu'
import Project, { ProjectProps } from 'components/Project'
import TextContent from 'components/TextContent'
import Heading from 'components/Heading'
import Button from 'components/Button'

import * as S from './styles'

export type ProjectTemplateProps = {
  menu: MenuProps
  footer: ContactLinkProps[]
  cover: string
  content: string
  projectUrl: string
  projectCodeUrl: string
  projectDesignUrl: string
  moreProjects: ProjectProps[]
}

const ProjectTemplate = ({
  menu,
  footer,
  cover,
  content,
  projectUrl,
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
        <S.Cover
          src={cover}
          role="image"
          aria-label="Imagem de destaque do projeto"
          data-testid="cover"
        />
        <S.Main>
          <Container>
            <S.Content>
              <TextContent content={content} />
            </S.Content>
            <S.ButtonGroup>
              <Button
                as="a"
                role="button"
                href={projectUrl}
                target="_blank"
                variant="outline"
                icon={<OpenFolder />}
              >
                Visitar
              </Button>
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
          </Container>
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
