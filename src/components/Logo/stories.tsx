import { Story, Meta } from '@storybook/react'
import Logo, { LogoProps } from '.'

export default {
  title: 'Components/Logo',
  component: Logo,
  args: {
    size: 'large',
  },
  parameters: {
    backgrounds: {
      default: 'secondary',
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/KIQWZ47GDrrNCIxysbEqOA/My-Portfolio?node-id=875%3A1072',
    },
  },
} as Meta<LogoProps>

export const Default: Story<LogoProps> = (args) => {
  return (
    <div>
      <Logo {...args} />
    </div>
  )
}

export const Small: Story<LogoProps> = (args) => {
  return (
    <div>
      <Logo {...args} />
    </div>
  )
}

Small.args = {
  size: 'small',
}
