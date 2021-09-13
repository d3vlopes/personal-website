import { Story, Meta } from '@storybook/react'
import { Github } from '@styled-icons/boxicons-logos'

import Button, { ButtonProps } from '.'

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  args: {
    size: 'medium',
    expand: false,
    hoverUp: false,
  },
  argTypes: {
    icon: {
      type: '',
    },
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'outline'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
  },
} as Meta<ButtonProps>

export const Primary: Story<ButtonProps> = (args) => {
  return (
    <div>
      <Button {...args} />
    </div>
  )
}

Primary.args = {
  children: 'Button',
  variant: 'primary',
}

export const Secondary: Story<ButtonProps> = (args) => {
  return (
    <div>
      <Button {...args} />
    </div>
  )
}

Secondary.args = {
  children: 'Button',
  variant: 'secondary',
  expand: false,
}

export const Expand: Story<ButtonProps> = (args) => {
  return (
    <div>
      <Button {...args} />
    </div>
  )
}

Expand.args = {
  children: 'Button',
  variant: 'primary',
  expand: true,
}

export const withIcon: Story<ButtonProps> = (args) => {
  return (
    <div>
      <Button {...args} />
    </div>
  )
}

withIcon.args = {
  children: 'Ver código',
  variant: 'outline',
  icon: <Github />,
}
