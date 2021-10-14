import { Meta, Story } from '@storybook/react'
import TextContent, { TextContentProps } from '.'
import mock, { project, code } from './mock'

export default {
  title: 'Components/TextContent',
  component: TextContent,
  args: {
    content: mock,
  },
} as Meta

export const Default: Story<TextContentProps> = (args) => {
  return (
    <div style={{ maxWidth: '59.7rem', margin: '0 auto' }}>
      <TextContent {...args} />
    </div>
  )
}

export const Project: Story<TextContentProps> = () => {
  return (
    <div style={{ maxWidth: '59.7rem', margin: '0 auto' }}>
      <TextContent content={project} />
    </div>
  )
}

export const Blog: Story<TextContentProps> = () => {
  return (
    <div style={{ maxWidth: '59.7rem', margin: '0 auto' }}>
      <TextContent content={code} />
    </div>
  )
}
