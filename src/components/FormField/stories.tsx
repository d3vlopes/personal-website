import { Story, Meta } from '@storybook/react'
import FormField, { FormFieldProps } from '.'

export default {
  title: 'Form/FormField',
  component: FormField,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/KIQWZ47GDrrNCIxysbEqOA/My-Portfolio?node-id=813%3A1060',
    },
  },
  args: {
    type: 'input',
    label: 'Email',
    name: 'email',
    initialValue: '',
    disabled: false,
    error: undefined,
    fullWidth: false,
  },
  argTypes: {
    onInput: { action: 'changed' },
  },
} as Meta<FormFieldProps>

export const Default: Story<FormFieldProps> = (args) => {
  return (
    <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
      <FormField {...args} />
    </div>
  )
}

export const withError: Story<FormFieldProps> = (args) => {
  return (
    <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
      <FormField {...args} />
    </div>
  )
}

withError.args = {
  label: 'Email',
  value: 'test.com.br',
  error: 'Ops... something is wrong',
}

export const textarea: Story<FormFieldProps> = (args) => {
  return (
    <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
      <FormField {...args} />
    </div>
  )
}

textarea.args = {
  type: 'textarea',
  label: 'Message',
  value:
    'Lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit',
}
