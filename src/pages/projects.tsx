import ProjectsTemplate, { ProjectsTemplateProps } from 'templates/Projects'

import mockMenu from 'components/Menu/mock'
import mockFooter from 'components/ContactLink/mock'
import mockProjects from 'components/Project/mock'

export default function Projects(props: ProjectsTemplateProps) {
  return <ProjectsTemplate {...props} />
}

export async function getStaticProps() {
  return {
    props: {
      menu: mockMenu,
      footer: mockFooter,
      title: 'Projetos',
      subtitle: 'Conheça um pouco mais do meu trabalho.',
      projects: mockProjects,
    },
  }
}
