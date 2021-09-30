import { Story, Meta } from '@storybook/react'
import Heading, { HeadingProps } from '.'

export default {
  title: 'Components/Heading',
  component: Heading,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/KIQWZ47GDrrNCIxysbEqOA/My-Portfolio?node-id=874%3A1077',
    },
  },
  args: {
    children: 'Title',
    lineBottom: false,
    size: 'huge',
    as: 'h1',
  },
} as Meta<HeadingProps>

export const Default: Story<HeadingProps> = (args) => {
  return (
    <div>
      <Heading {...args} />
    </div>
  )
}

export const LineBottom: Story<HeadingProps> = (args) => {
  return (
    <div>
      <Heading {...args} />
    </div>
  )
}

LineBottom.args = {
  lineBottom: true,
}
