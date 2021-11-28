import { GetServerSideProps } from 'next'

import HomeTemplate, { HomeTemplateProps } from 'templates/Home'

import { GET_HOME_PAGE, GET_RECENTS_PROJECTS } from 'graphql/queries'
import {
  GetHomeQuery,
  GetRecentsProjectsQuery,
} from 'graphql/generated/graphql'

import {
  contactsLinksMapper,
  linksMapper,
  projectsMapper,
  skillsMapper,
  toolsMapper,
} from 'utils/mappers'
import { api } from 'services/api'

export default function Index(props: HomeTemplateProps) {
  return <HomeTemplate {...props} />
}

export const getServerSideProps: GetServerSideProps = async () => {
  const {
    menu,
    footer,
    heroes: hero,
    skills,
    tools,
  } = await api.request<GetHomeQuery>(GET_HOME_PAGE, {
    menuSlug: 'primary',
    footerSlug: 'primary',
  })

  const { links, contactsLinks: menuContactLinks } = menu!
  const { contactsLinks: footerContactLinks } = footer!
  const { photo, name, helloMessage, description, buttonText } = hero[0]

  const { projects } = await api.request<GetRecentsProjectsQuery>(
    GET_RECENTS_PROJECTS,
    {
      first: 4,
    },
  )

  return {
    props: {
      menu: {
        links: linksMapper(links),
        contactLinks: contactsLinksMapper(menuContactLinks),
      },
      footer: contactsLinksMapper(footerContactLinks),
      hero: {
        photo: photo.url,
        hello: helloMessage,
        name,
        description,
        buttonText,
      },
      skills: skillsMapper(skills),
      tools: toolsMapper(tools),
      projects: projectsMapper(projects),
    },
  }
}
