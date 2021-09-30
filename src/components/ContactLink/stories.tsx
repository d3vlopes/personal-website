import { Story, Meta } from '@storybook/react'

import ContactLink, { ContactLinkProps } from '.'
import mock from './mock'

export default {
  title: 'Components/ContactLinks',
  component: ContactLink,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/KIQWZ47GDrrNCIxysbEqOA/My-Portfolio?node-id=874%3A1073',
    },
  },
  args: mock[0],
  argTypes: {
    icon: {
      type: '',
    },
  },
} as Meta<ContactLinkProps>

export const Default: Story<ContactLinkProps> = (args) => {
  return (
    <div style={{ display: 'flex', gap: '1.6rem' }}>
      <ContactLink {...args} />
    </div>
  )
}
