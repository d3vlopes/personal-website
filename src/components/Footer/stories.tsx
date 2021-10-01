import { Story, Meta } from '@storybook/react'
import mock from 'components/ContactLink/mock'
import Footer, { FooterProps } from '.'

export default {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/KIQWZ47GDrrNCIxysbEqOA/My-Portfolio?node-id=900%3A1140',
    },
  },
  args: {
    contactLinks: mock,
  },
} as Meta<FooterProps>

export const Default: Story<FooterProps> = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  )
}
