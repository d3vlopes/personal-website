import { Story, Meta } from '@storybook/react'
import Heading, { HeadingProps } from '.'

export default {
  title: 'Components/Heading',
  component: Heading,
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
