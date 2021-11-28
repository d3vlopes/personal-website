import Image from 'next/image'
import { NextSeo } from 'next-seo'
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
  slug?: string
  name?: string
  description?: string
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
  slug,
  name,
  description,
}: ProjectTemplateProps) => {
  const renderMoreProjects = (project: ProjectProps) => (
    <S.ProjectContainer key={`project-${project.slug}`} data-testid="project">
      <Project variant="grid" {...project} />
    </S.ProjectContainer>
  )

  return (
    <Base menu={menu} footer={footer}>
      <NextSeo
        title={`${name} | Leandro Lopes`}
        description={description}
        canonical={`https://my-portfolio-d3vlopes.vercel.app/project/${slug}`}
        openGraph={{
          url: `https://my-portfolio-d3vlopes.vercel.app/project/${slug}`,
          title: `${name} - Leandro Lopes`,
          description,
          images: [
            {
              url: cover,
              alt: `${name}`,
            },
          ],
        }}
      />
      <S.Wrapper>
        <S.Cover>
          <Image
            data-testid="cover"
            src={cover}
            alt="Imagem de destaque do projeto"
            layout="fill"
            quality={100}
          />
        </S.Cover>
        <S.Main>
          <Container>
            <S.Content>
              <TextContent content={content} />
            </S.Content>
            <S.ButtonGroup>
              {!!projectUrl && (
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
              )}
              {projectCodeUrl && (
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
              )}
              {!!projectDesignUrl && (
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
              )}
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
