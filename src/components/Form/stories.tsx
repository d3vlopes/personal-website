import { Story, Meta } from '@storybook/react'
import Form from '.'

export default {
  title: 'Form/Form',
  component: Form,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/KIQWZ47GDrrNCIxysbEqOA/My-Portfolio?node-id=868%3A1191',
    },
  },
  args: {
    title: 'Form',
  },
} as Meta

export const Default: Story = (args) => {
  return (
    <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
      <Form {...args} />
    </div>
  )
}
