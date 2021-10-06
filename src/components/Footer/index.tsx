import { Fragment } from 'react'
import { Heart } from '@styled-icons/boxicons-solid/Heart'

import ContactLink, { ContactLinkProps } from 'components/ContactLink'

import * as S from './styles'

export type FooterProps = {
  contactLinks: ContactLinkProps[]
}

const Footer = ({ contactLinks }: FooterProps) => {
  const renderContactLinks = (contact: ContactLinkProps) => {
    return (
      <Fragment key={`contact-${contact.name}`}>
        <ContactLink {...contact} />
      </Fragment>
    )
  }

  return (
    <S.Wrapper>
      <S.ContactLinks data-testid="contact-links">
        {contactLinks.map(renderContactLinks)}
      </S.ContactLinks>

      <p>
        Desenvolvido com <Heart aria-label="heart" size={25} /> por
        <span> Leandro Lopes</span>
      </p>
    </S.Wrapper>
  )
}

export default Footer
