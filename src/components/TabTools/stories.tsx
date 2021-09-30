import { Story, Meta } from '@storybook/react'
import TabTools, { TabToolsProps } from '.'
import mock from './mock'

export default {
  title: 'Components/TabTools',
  component: TabTools,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/KIQWZ47GDrrNCIxysbEqOA/My-Portfolio?node-id=657%3A1048',
    },
  },
  args: {
    developer: mock.developer,
    design: mock.design,
  },
} as Meta<TabToolsProps>

export const Default: Story<TabToolsProps> = (args) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <TabTools {...args} />
    </div>
  )
}
