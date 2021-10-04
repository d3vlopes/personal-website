import Base from 'templates/Base'

import Hero, { HeroProps } from 'components/Hero'
// import { Container } from 'components/Container'
import { MenuProps } from 'components/Menu'
import { ContactLinkProps } from 'components/ContactLink'

import * as S from './styles'

export type HomeTemplateProps = {
  menu: MenuProps
  footer: ContactLinkProps[]
  hero: HeroProps
}

const Home = ({ menu, footer, hero }: HomeTemplateProps) => {
  return (
    <Base menu={menu} footer={footer}>
      <S.Hero>
        <Hero {...hero} />
      </S.Hero>
      Home
    </Base>
  )
}

export default Home
