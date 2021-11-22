import { GetProjectsQuery } from 'graphql/generated/graphql'
import { GET_PROJECTS_PAGE } from 'graphql/queries'

import { api } from 'services/api'

import ProjectsTemplate, { ProjectsTemplateProps } from 'templates/Projects'
import { contactsLinksMapper, linksMapper, projectsMapper } from 'utils/mappers'

export default function Projects(props: ProjectsTemplateProps) {
  return <ProjectsTemplate {...props} />
}

export async function getStaticProps() {
  const { menu, footer, page, projects } = await api.request<GetProjectsQuery>(
    GET_PROJECTS_PAGE,
    {
      menuSlug: 'primary',
      first: 12,
      pageSlug: 'projects',
      footerSlug: 'primary',
    },
  )

  const { contactsLinks: menuContactLinks, links } = menu!
  const { contactsLinks: footerContactLinks } = footer!
  const { title, subtitle } = page!

  return {
    props: {
      menu: {
        links: linksMapper(links),
        contactLinks: contactsLinksMapper(menuContactLinks),
      },
      footer: contactsLinksMapper(footerContactLinks),
      title,
      subtitle,
      projects: projectsMapper(projects),
    },
    revalidate: 60 * 60 * 24,
  }
}
