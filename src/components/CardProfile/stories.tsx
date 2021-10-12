import { Story, Meta } from '@storybook/react'

import CardProfile, { CardProfileProps } from '.'
import mock from './mock'

export default {
  title: 'Components/CardProfile',
  component: CardProfile,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/KIQWZ47GDrrNCIxysbEqOA/My-Portfolio?node-id=1017%3A1149',
    },
  },
  args: mock,
} as Meta<CardProfileProps>

export const Default: Story<CardProfileProps> = (args) => {
  return (
    <div>
      <CardProfile {...args} />
    </div>
  )
}
