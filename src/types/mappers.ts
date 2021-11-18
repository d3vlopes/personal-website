import { Tools } from 'graphql/generated/graphql'

export type MenuLinkProps = {
  id: string
  path: string
  menuLabel: string
}

export type ContactLinksProps = {
  name: string
  link: string
  icon: {
    url: string
  }
}

export type SkillsProps = {
  title: string
  description: string
  icon: {
    url: string
  }
}

export type ToolsProps = {
  type: Tools
  name: string
  src: {
    url: string
  }
}

export type ProjectsRecentsProps = {
  name?: string | null | undefined
  description?: string | null | undefined
  slug: string
  thumbnail?: { url: string } | null | undefined
}
