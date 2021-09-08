import Link from 'next/link'
import { useState } from 'react'
import { Github } from '@styled-icons/boxicons-logos'
import { LinkedinWithCircle as Linkedin } from '@styled-icons/entypo-social'
import { Whatsapp } from '@styled-icons/remix-fill/Whatsapp'

import { Container } from 'components/Container'
import Logo from 'components/Logo'
import MediaMatch from 'components/MediaMatch'

import * as S from './styles'

type ContactLink = {
  name: string
  link: string
}

type MenuLink = {
  id: string
  path: string
  text: string
}

export type MenuProps = {
  contactLinks: ContactLink[]
  activeLink?: '/' | '/projects' | '/about' | '/learning' | '/contact'
  links: MenuLink[]
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
          <S.ContactLinks aria-label="Links de contato">
            <a href={contactLinks[0].link} target="_blank" rel="noreferrer">
              <Github
                size={45}
                aria-label={contactLinks[0].name}
                title={contactLinks[0].name}
                data-testid={`${contactLinks[0].name}-desktop`}
              />
            </a>
            <a href={contactLinks[1].link} target="_blank" rel="noreferrer">
              <Linkedin
                size={45}
                aria-label={contactLinks[1].name}
                title={contactLinks[1].name}
                data-testid={`${contactLinks[1].name}-desktop`}
              />
            </a>
            <a href={contactLinks[2].link} target="_blank" rel="noreferrer">
              <Whatsapp
                size={45}
                aria-label={contactLinks[2].name}
                title={contactLinks[2].name}
                data-testid={`${contactLinks[2].name}-desktop`}
              />
            </a>
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
          <S.ContactLinks aria-label="Links de contato">
            <a href={contactLinks[0].link} target="_blank" rel="noreferrer">
              <Github
                size={45}
                aria-label={contactLinks[0].name}
                title={contactLinks[0].name}
              />
            </a>
            <a href={contactLinks[1].link} target="_blank" rel="noreferrer">
              <Linkedin
                size={45}
                aria-label={contactLinks[1].name}
                title={contactLinks[1].name}
              />
            </a>
            <a href={contactLinks[2].link} target="_blank" rel="noreferrer">
              <Whatsapp
                size={45}
                aria-label={contactLinks[2].name}
                title={contactLinks[2].name}
              />
            </a>
          </S.ContactLinks>
        </S.MenuNav>
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
