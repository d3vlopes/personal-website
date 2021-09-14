import { Story, Meta } from '@storybook/react'

import { Sword } from '@styled-icons/remix-fill/Sword'

import CardSkill, { CardSkillProps } from '.'
import mock from './mock'

export default {
  title: 'Components/CardSkill',
  component: CardSkill,
  args: {
    icon: <Sword />,
    title: mock[0].title,
    description: mock[0].description,
  },
  argTypes: {
    icon: {
      type: '',
    },
  },
  parameters: {
    layout: 'centered',
  },
} as Meta<CardSkillProps>

export const Default: Story<CardSkillProps> = (args) => {
  return (
    <div style={{ display: 'flex', gap: '3.2rem', justifyContent: 'center' }}>
      <CardSkill {...args} />
    </div>
  )
}
