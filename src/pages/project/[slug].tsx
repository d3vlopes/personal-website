import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'

import {
  GetMoreProjectsQuery,
  GetProjectQuery,
  GetProjectsQuery,
} from 'graphql/generated/graphql'
import {
  GET_MORE_PROJECTS,
  GET_PROJECTS_PAGE,
  GET_PROJECT_PAGE,
} from 'graphql/queries'

import { api } from 'services/api'
import { contactsLinksMapper, linksMapper, projectsMapper } from 'utils/mappers'

import ProjectTemplate, { ProjectTemplateProps } from 'templates/Project'

export default function Index(props: ProjectTemplateProps) {
  const router = useRouter()
  if (router.isFallback) return null

  return <ProjectTemplate {...props} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { projects } = await api.request<GetProjectsQuery>(GET_PROJECTS_PAGE, {
    menuSlug: 'primary',
    first: 12,
    footerSlug: 'primary',
  })

  const paths = projects.map(({ slug }) => ({
    params: { slug },
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug

  const { menu, footer, projects } = await api.request<GetProjectQuery>(
    GET_PROJECT_PAGE,
    {
      menuSlug: 'primary',
      projectSlug: slug,
      footerSlug: 'primary',
    },
  )

  if (!projects.length) {
    return { notFound: true }
  }

  const { links, contactsLinks: menuContactLinks } = menu!
  const { contactsLinks: footerContactLinks } = footer!
  const project = projects[0]

  const { projects: moreProjects } = await api.request<GetMoreProjectsQuery>(
    GET_MORE_PROJECTS,
    {
      slug,
      first: 3,
    },
  )

  return {
    props: {
      menu: {
        links: linksMapper(links),
        contactLinks: contactsLinksMapper(menuContactLinks),
      },
      footer: contactsLinksMapper(footerContactLinks),
      cover: project.cover?.url,
      projectUrl: project?.projectUrl,
      content: project.content?.html,
      projectCodeUrl: project?.projectCodeUrl,
      projectDesignUrl: project?.projectDesignUrl,
      moreProjects: projectsMapper(moreProjects),
      name: project.name,
      description: project.description,
      slug,
    },
    revalidate: 60,
  }
}
