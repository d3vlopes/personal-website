import { useRouter } from 'next/router'

import Menu, { MenuProps } from 'components/Menu'
import { ContactLinkProps } from 'components/ContactLink'
import Footer from 'components/Footer'

import * as S from './styles'

export type BaseTemplateProps = {
  children: React.ReactNode
  menu: MenuProps
  footer: ContactLinkProps[]
}

const Base = ({ children, menu, footer }: BaseTemplateProps) => {
  const { asPath } = useRouter()

  return (
    <S.Wrapper>
      <Menu
        links={menu.links}
        contactLinks={menu.contactLinks}
        activeLink={asPath}
      />

      <S.Content>{children}</S.Content>

      <S.SectionFooter>
        <Footer contactLinks={footer} />
      </S.SectionFooter>
    </S.Wrapper>
  )
}

export default Base
