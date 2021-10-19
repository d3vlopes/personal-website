import { Story, Meta } from '@storybook/react'

import CardTimeline, { CardTimelineProps } from '.'
import mock from './mock'

export default {
  title: 'Components/CardTimeline',
  component: CardTimeline,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/KIQWZ47GDrrNCIxysbEqOA/My-Portfolio?node-id=1043%3A1149',
    },
  },
  args: mock[0],
} as Meta<CardTimelineProps>

export const Default: Story<CardTimelineProps> = (args) => {
  return (
    <div>
      <CardTimeline {...args} />
    </div>
  )
}
