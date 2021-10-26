import { Story, Meta } from '@storybook/react'
import Project, { ProjectProps } from '.'
import mock from './mock'

export default {
  title: 'Components/Project',
  component: Project,
  parameters: {
    backgrounds: {
      default: 'secondary-dark',
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/KIQWZ47GDrrNCIxysbEqOA/My-Portfolio?node-id=868%3A1189',
    },
  },
  args: {
    ...mock[1],
    variant: 'list',
  },
} as Meta<ProjectProps>

export const List: Story<ProjectProps> = (args) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '8rem',
      }}
    >
      <Project {...args} />
    </div>
  )
}

export const Grid: Story<ProjectProps> = (args) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '8rem',
      }}
    >
      <Project {...args} />
    </div>
  )
}

Grid.parameters = {
  backgrounds: {
    default: 'primary',
  },
}

Grid.args = {
  variant: 'grid',
}
