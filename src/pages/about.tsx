import AboutTemplate, { AboutTemplateProps } from 'templates/About'

import mockMenu from 'components/Menu/mock'
import mockFooter from 'components/ContactLink/mock'
import mockCardProfile from 'components/CardProfile/mock'
import mockCardTimeline from 'components/CardTimeline/mock'

export default function AboutPage(props: AboutTemplateProps) {
  return <AboutTemplate {...props} />
}

export async function getStaticProps() {
  return {
    props: {
      menu: mockMenu,
      footer: mockFooter,
      title: 'Sobre mim',
      subtitle: 'Um pouco sobre minha história, interesses e sonhos.',
      cardProfile: mockCardProfile,
      cardTimeline: mockCardTimeline,
    },
  }
}
