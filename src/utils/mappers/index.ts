import {
  ContactLinksProps,
  MenuLinkProps,
  ProjectsProps,
  SkillsProps,
  TimelinesProps,
  ToolsProps,
} from 'types/mappers'

export const linksMapper = (links: MenuLinkProps[]) => {
  return links.map((link) => ({
    id: link.id,
    path: link.path,
    text: link.menuLabel,
  }))
}

export const contactsLinksMapper = (contactsLinks: ContactLinksProps[]) => {
  return contactsLinks.map((contactLink) => ({
    name: contactLink.name,
    icon: contactLink.icon.url,
    link: contactLink.link,
  }))
}

export const skillsMapper = (skills: SkillsProps[]) => {
  return skills.map((skill) => ({
    icon: skill.icon.url,
    title: skill.title,
    description: skill.description,
  }))
}

export const toolsMapper = (tools: ToolsProps[]) => {
  const developerTools = tools.filter((tool) => tool.type === 'developer')
  const designTools = tools.filter((tool) => tool.type === 'design')

  const developer = developerTools.map((tool: ToolsProps) => ({
    src: tool.src.url,
    name: tool.name,
  }))

  const design = designTools.map((tool: ToolsProps) => ({
    src: tool.src.url,
    name: tool.name,
  }))

  return {
    developer,
    design,
  }
}

export const projectsMapper = (projects: ProjectsProps[]) => {
  return projects.map((project) => ({
    src: project.thumbnail?.url,
    name: project.name,
    description: project.description,
    slug: project.slug,
  }))
}

export const timelinesMapper = (timelines: TimelinesProps[]) => {
  return timelines.map((timeline) => ({
    title: timeline.title,
    content: timeline.content.html,
  }))
}
