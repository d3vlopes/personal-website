import Link from 'next/link'
import { Fragment, useState } from 'react'

import { Container } from 'components/Container'
import ContactLink, { ContactLinkProps } from 'components/ContactLink'
import Logo from 'components/Logo'
import MediaMatch from 'components/MediaMatch'

import * as S from './styles'

type MenuLink = {
  id: string
  path: string
  text: string
}

export type MenuProps = {
  links: MenuLink[]
  contactLinks: ContactLinkProps[]
  activeLink?: '/' | '/projects' | '/about' | '/learning' | string
}

const Menu = ({ links, contactLinks, activeLink }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const renderMenuLinks = (link: MenuLink) => {
    return (
      <Link key={`menuLink-${link.id}`} href={link.path} passHref>
        <S.MenuLink isActive={activeLink === `${link.path}`}>
          {link.text}
        </S.MenuLink>
      </Link>
    )
  }

  const renderContactLinks = (contact: ContactLinkProps) => {
    return (
      <Fragment key={`contact-${contact.name}`}>
        <ContactLink {...contact} />
      </Fragment>
    )
  }

  return (
    <S.Wrapper>
      <Container>
        <Logo />
        <MediaMatch lessThan="medium">
          <S.MenuIcon
            onClick={() => setIsOpen(!isOpen)}
            isOpen={isOpen}
            title="Abrir menu"
            aria-label="Abrir menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </S.MenuIcon>
        </MediaMatch>
        <MediaMatch greaterThan="medium">
          <S.MenuNav aria-label="Navegação" data-testid="navigation">
            {links.map(renderMenuLinks)}
          </S.MenuNav>
        </MediaMatch>
        <MediaMatch greaterThan="medium">
          <S.ContactLinks
            aria-label="Links de contato"
            data-testid="contact-links"
          >
            {contactLinks.map(renderContactLinks)}
          </S.ContactLinks>
        </MediaMatch>
      </Container>
      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen} data-testid="menu-full">
        <S.MenuIcon
          onClick={() => setIsOpen(!isOpen)}
          isOpen={isOpen}
          title="Fechar menu"
          aria-label="Fechar menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </S.MenuIcon>
        <S.MenuNav>
          {links.map(renderMenuLinks)}
          <S.ContactLinks
            aria-label="Links de contato"
            data-testid="contact-links"
          >
            {contactLinks.map(renderContactLinks)}
          </S.ContactLinks>
        </S.MenuNav>
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
