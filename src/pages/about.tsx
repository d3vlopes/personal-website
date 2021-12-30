import { GetStaticProps } from 'next'

import AboutTemplate, { AboutTemplateProps } from 'templates/About'

import { GET_ABOUT_PAGE } from 'graphql/queries'
import { GetAboutQuery } from 'graphql/generated/graphql'

import { api } from 'services/api'
import {
  contactsLinksMapper,
  linksMapper,
  timelinesMapper,
} from 'utils/mappers'
import { TimelinesProps } from 'types/mappers'

type ProfileInformation = {
  __typename: 'ProfileInformation'
  name: string
  age: number
  city: string
  liking: string
  dream: string
  image: {
    __typename?: 'Asset'
    url: string
  }
}

export default function AboutPage(props: AboutTemplateProps) {
  return <AboutTemplate {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
  const { menu, footer, page } = await api.request<GetAboutQuery>(
    GET_ABOUT_PAGE,
    {
      menuSlug: 'primary',
      pageSlug: 'about',
      footerSlug: 'primary',
    },
  )

  const { links, contactsLinks: menuContactLinks } = menu!
  const { contactsLinks: footerContactLinks } = footer!
  const { title, subtitle, blocks } = page!

  const blockProfileInformation = blocks.filter(
    (block) => block.__typename === 'ProfileInformation',
  ) as ProfileInformation[]

  const blockTimelines = blocks.filter(
    (block) => block.__typename === 'Timeline',
  ) as TimelinesProps[]

  const profileInformation = blockProfileInformation[0]

  return {
    props: {
      menu: {
        links: linksMapper(links),
        contactLinks: contactsLinksMapper(menuContactLinks),
      },
      footer: contactsLinksMapper(footerContactLinks),
      title,
      subtitle,
      cardProfile: {
        image: profileInformation.image.url,
        name: profileInformation.name,
        age: profileInformation.age,
        city: profileInformation.city,
        liking: profileInformation.liking,
        dream: profileInformation.dream,
      },
      cardTimeline: timelinesMapper(blockTimelines),
    },
    revalidate: 60 * 60 * 24,
  }
}
