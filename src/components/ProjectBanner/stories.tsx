import { Story, Meta } from '@storybook/react'
import ProjectBanner, { ProjectBannerProps } from '.'

export default {
  title: 'Components/ProjectBanner',
  component: ProjectBanner,
  parameters: {
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/KIQWZ47GDrrNCIxysbEqOA/My-Portfolio?node-id=1167%3A1033',
    },
  },
  args: {
    src: '/img/project/my-portfolio.png',
    projectName: 'Won Games',
    projectUrl: 'https://www.google.com',
  },
} as Meta<ProjectBannerProps>

export const Default: Story<ProjectBannerProps> = (args) => {
  return (
    <div>
      <ProjectBanner {...args} />
    </div>
  )
}
