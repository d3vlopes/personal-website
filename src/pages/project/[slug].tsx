import { useRouter } from 'next/router'

import ProjectTemplate, { ProjectTemplateProps } from 'templates/Project'

import mockMenu from 'components/Menu/mock'
import mockFooter from 'components/ContactLink/mock'
import { project as mockContent } from 'components/TextContent/mock'
import mockProjects from 'components/Project/mock'

import projectsMock from 'components/Project/mock'
import { GetStaticProps } from 'next'

export default function Index(props: ProjectTemplateProps) {
  const router = useRouter()
  if (router.isFallback) return null

  return <ProjectTemplate {...props} />
}

export async function getStaticPaths() {
  const data = projectsMock

  const paths = data.map(({ slug }) => ({
    params: { slug },
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async () => {
  const data = projectsMock
  const slug = 'won-games'

  const project = data.filter((project) => project.slug === slug)

  if (!data.length) {
    return { notFound: true }
  }

  return {
    props: {
      menu: mockMenu,
      footer: mockFooter,
      banner: {
        src: '/img/project/won-games.png',
        projectName: project[0].name,
        projectUrl: 'https://www.google.com/',
      },
      content: mockContent,
      projectCodeUrl: 'https://www.google.com',
      projectDesignUrl: 'https://www.behance.net',
      moreProjects: mockProjects.slice(0, 3),
    },
  }
}
