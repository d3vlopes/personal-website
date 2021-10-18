import { Fragment } from 'react'

import Base from 'templates/Base'

import Heading from 'components/Heading'
import CardProfile, { CardProfileProps } from 'components/CardProfile'
import CardTimeline, { CardTimelineProps } from 'components/CardTimeline'
import { ContactLinkProps } from 'components/ContactLink'
import { MenuProps } from 'components/Menu'
import { Container } from 'components/Container'

import * as S from './styles'

export type AboutTemplateProps = {
  menu: MenuProps
  footer: ContactLinkProps[]
  title: string
  subtitle: string
  cardProfile: CardProfileProps
  cardTimeline: CardTimelineProps[]
}

const About = ({
  menu,
  footer,
  title,
  subtitle,
  cardProfile,
  cardTimeline,
}: AboutTemplateProps) => {
  const renderCardTimelines = (timeline: CardTimelineProps) => {
    return (
      <Fragment key={`cardTimeline-${timeline.title}`}>
        <CardTimeline {...timeline} />
      </Fragment>
    )
  }

  return (
    <Base menu={menu} footer={footer}>
      <S.Wrapper>
        <Heading lineBottom>{title}</Heading>
        <S.Subtitle>{subtitle}</S.Subtitle>
        <CardProfile {...cardProfile} />
        <Container>
          <S.SectionTimeline>
            {cardTimeline.map(renderCardTimelines)}
          </S.SectionTimeline>
        </Container>
      </S.Wrapper>
    </Base>
  )
}

export default About
