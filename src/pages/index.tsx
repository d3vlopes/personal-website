import Home, { HomeTemplateProps } from 'templates/Home'

import mockMenu from 'components/Menu/mock'
import mockFooter from 'components/ContactLink/mock'
import mockHero from 'components/Hero/mock'
import mockSkills from 'components/CardSkill/mock'
import mockTools from 'components/TabTools/mock'
import mockProjects from 'components/Project/mock'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  return {
    props: {
      menu: mockMenu,
      footer: mockFooter,
      hero: mockHero,
      skills: mockSkills,
      tools: mockTools,
      projects: mockProjects,
    },
  }
}
