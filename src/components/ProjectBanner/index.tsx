import { OpenFolder } from '@styled-icons/fluentui-system-filled/OpenFolder'

import Heading from 'components/Heading'
import Button from 'components/Button'

import * as S from './styles'

export type ProjectBannerProps = {
  src: string
  projectName: string
  projectUrl: string
}

const ProjectBanner = ({
  src,
  projectName,
  projectUrl,
}: ProjectBannerProps) => {
  return (
    <>
      <S.Cover
        src={src}
        role="image"
        aria-label="Imagem de destaque do projeto"
        data-testid="cover"
      >
        <Heading>{projectName}</Heading>
        <Button
          as="a"
          role="button"
          href={projectUrl}
          target="_blank"
          variant="outline"
          icon={<OpenFolder />}
        >
          Visitar
        </Button>
      </S.Cover>
    </>
  )
}

export default ProjectBanner
