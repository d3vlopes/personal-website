import { Story, Meta } from '@storybook/react'

import Hero, { HeroProps } from '.'
import mock from './mock'

export default {
  title: 'Components/Hero',
  component: Hero,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'neutral',
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/KIQWZ47GDrrNCIxysbEqOA/My-Portfolio?node-id=868%3A1086',
    },
  },
  args: mock,
} as Meta<HeroProps>

export const Default: Story<HeroProps> = (args) => {
  return (
    <div>
      <Hero {...args} />
    </div>
  )
}
