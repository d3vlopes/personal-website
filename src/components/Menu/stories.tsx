import { Story, Meta } from '@storybook/react'

import Menu, { MenuProps } from '.'
import mock from './mock'

export default {
  title: 'Components/Menu',
  component: Menu,
  args: mock,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

export const Default: Story<MenuProps> = (args) => {
  return (
    <>
      <div style={{ height: '100rem' }}>
        <Menu {...args} />
        <p style={{ padding: '13rem 0' }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus,
          dolorum aperiam. Qui deserunt molestiae nulla eum distinctio repellat
          quos, error recusandae dolores, quod porro blanditiis impedit quaerat
          repellendus soluta cumque. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Accusamus, dolorum aperiam. Qui deserunt molestiae
          nulla eum distinctio repellat quos, error recusandae dolores, quod
          porro blanditiis impedit quaerat repellendus soluta cumque. Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, dolorum
          aperiam. Qui deserunt molestiae nulla eum distinctio repellat quos,
          error recusandae dolores, quod porro blanditiis impedit quaerat
          repellendus soluta cumque. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Accusamus, dolorum aperiam. Qui deserunt molestiae
          nulla eum distinctio repellat quos, error recusandae dolores, quod
          porro blanditiis impedit quaerat repellendus soluta cumque. Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, dolorum
          aperiam. Qui deserunt molestiae nulla eum distinctio repellat quos,
          error recusandae dolores, quod porro blanditiis impedit quaerat
          repellendus soluta cumque. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Accusamus, dolorum aperiam. Qui deserunt molestiae
          nulla eum distinctio repellat quos, error recusandae dolores, quod
          porro blanditiis impedit quaerat repellendus soluta cumque. Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, dolorum
          aperiam. Qui deserunt molestiae nulla eum distinctio repellat quos,
          error recusandae dolores, quod porro blanditiis impedit quaerat
          repellendus soluta cumque. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Accusamus, dolorum aperiam. Qui deserunt molestiae
          nulla eum distinctio repellat quos, error recusandae dolores, quod
          porro blanditiis impedit quaerat repellendus soluta cumque. Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, dolorum
          aperiam. Qui deserunt molestiae nulla eum distinctio repellat quos,
          error recusandae dolores, quod porro blanditiis impedit quaerat
          repellendus soluta cumque. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Accusamus, dolorum aperiam. Qui deserunt molestiae
          nulla eum distinctio repellat quos, error recusandae dolores, quod
          porro blanditiis impedit quaerat repellendus soluta cumque. Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, dolorum
          aperiam. Qui deserunt molestiae nulla eum distinctio repellat quos,
          error recusandae dolores, quod porro blanditiis impedit quaerat
          repellendus soluta cumque. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Accusamus, dolorum aperiam. Qui deserunt molestiae
          nulla eum distinctio repellat quos, error recusandae dolores, quod
          porro blanditiis impedit quaerat repellendus soluta cumque. Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, dolorum
          aperiam. Qui deserunt molestiae nulla eum distinctio repellat quos,
          error recusandae dolores, quod porro blanditiis impedit quaerat
          repellendus soluta cumque. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Accusamus, dolorum aperiam. Qui deserunt molestiae
          nulla eum distinctio repellat quos, error recusandae dolores, quod
          porro blanditiis impedit quaerat repellendus soluta cumque. Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, dolorum
          aperiam. Qui deserunt molestiae nulla eum distinctio repellat quos,
          error recusandae dolores, quod porro blanditiis impedit quaerat
          repellendus soluta cumque. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Accusamus, dolorum aperiam. Qui deserunt molestiae
          nulla eum distinctio repellat quos, error recusandae dolores, quod
          porro blanditiis impedit quaerat repellendus soluta cumque.
        </p>
      </div>
    </>
  )
}

Default.args = {
  activeLink: '/',
}
