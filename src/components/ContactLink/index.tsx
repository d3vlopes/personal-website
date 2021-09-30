import * as S from './styles'

export type ContactLinkProps = {
  icon: string
  name: string
  link: string
}

const ContactLink = ({ icon, name, link }: ContactLinkProps) => {
  return (
    <S.Wrapper>
      <a href={link} target="_blank" rel="noopenner, noreferrer">
        <S.Icon
          src={icon}
          preProcessor={(code) =>
            code.replace(/fill=".*?"/g, 'fill="currentColor"')
          }
          aria-label={name}
          name={name}
        />
      </a>
    </S.Wrapper>
  )
}

export default ContactLink
