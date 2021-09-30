import { Story, Meta } from '@storybook/react'

import Menu, { MenuProps } from '.'
import mock from './mock'

export default {
  title: 'Components/Menu',
  component: Menu,
  args: mock,
  parameters: {
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/KIQWZ47GDrrNCIxysbEqOA/My-Portfolio?node-id=874%3A1208',
    },
  },
} as Meta

export const Default: Story<MenuProps> = (args) => {
  return (
    <>
      <div style={{ height: '100rem' }}>
        <Menu {...args} />
      </div>
    </>
  )
}

Default.args = {
  activeLink: '/',
}
