import {
  linksMapper,
  contactsLinksMapper,
  skillsMapper,
  toolsMapper,
  projectsRecentsMapper,
  timelinesMapper,
} from '.'
import {
  ContactLinksProps,
  MenuLinkProps,
  SkillsProps,
  ToolsProps,
  ProjectsRecentsProps,
  TimelinesProps,
} from 'types/mappers'

describe('linksMapper', () => {
  it('should return the right format when mapped', () => {
    const links = [
      {
        id: '1',
        path: '/',
        menuLabel: 'Home',
      },
      {
        id: '2',
        path: '/projects',
        menuLabel: 'Projetos',
      },
    ] as MenuLinkProps[]

    expect(linksMapper(links)).toStrictEqual([
      {
        id: '1',
        path: '/',
        text: 'Home',
      },
      {
        id: '2',
        path: '/projects',
        text: 'Projetos',
      },
    ])
  })
})

describe('contactLinksMapper', () => {
  it('should return the right format when mapped', () => {
    const contactLinks = [
      {
        name: 'Github',
        icon: {
          url: 'icon-url-github',
        },
        link: 'https://github.com',
      },
      {
        name: 'Linkedin',
        icon: {
          url: 'icon-url-linkedin',
        },
        link: 'https://linkedin.com',
      },
    ] as ContactLinksProps[]

    expect(contactsLinksMapper(contactLinks)).toStrictEqual([
      {
        name: 'Github',
        icon: 'icon-url-github',
        link: 'https://github.com',
      },
      {
        name: 'Linkedin',
        icon: 'icon-url-linkedin',
        link: 'https://linkedin.com',
      },
    ])
  })
})

describe('skillsMapper', () => {
  it('should return the right format when mapped ', () => {
    const skills = [
      {
        title: 'Desafios',
        icon: {
          url: 'icon-url-desafios',
        },
        description: 'Loren ipsum dolor',
      },
      {
        title: 'Persistência',
        icon: {
          url: 'icon-url-persistencia',
        },
        description: 'Loren ipsum dolor',
      },
    ] as SkillsProps[]

    expect(skillsMapper(skills)).toStrictEqual([
      {
        title: 'Desafios',
        icon: 'icon-url-desafios',
        description: 'Loren ipsum dolor',
      },
      {
        title: 'Persistência',
        icon: 'icon-url-persistencia',
        description: 'Loren ipsum dolor',
      },
    ])
  })
})

describe('toolsMapper', () => {
  it('should return the right format when mapped', () => {
    const tools = [
      {
        type: 'developer',
        name: 'React',
        src: {
          url: 'icon-url-react',
        },
      },
      {
        type: 'design',
        name: 'Figma',
        src: {
          url: 'icon-url-figma',
        },
      },
    ] as ToolsProps[]

    expect(toolsMapper(tools)).toStrictEqual({
      developer: [
        {
          name: 'React',
          src: 'icon-url-react',
        },
      ],
      design: [
        {
          name: 'Figma',
          src: 'icon-url-figma',
        },
      ],
    })
  })
})

describe('projectsRecentsMapper', () => {
  it('should return the right format when mapped', () => {
    const projects = [
      {
        thumbnail: {
          url: 'thumbnail-url-project-1',
        },
        name: 'Project 1',
        description: 'Loren ipsum dolor',
        slug: 'project-1',
      },
      {
        thumbnail: {
          url: 'thumbnail-url-project-2',
        },
        name: 'Project 2',
        description: 'Loren ipsum dolor',
        slug: 'project-2',
      },
    ] as ProjectsRecentsProps[]

    expect(projectsRecentsMapper(projects)).toStrictEqual([
      {
        src: 'thumbnail-url-project-1',
        name: 'Project 1',
        description: 'Loren ipsum dolor',
        slug: 'project-1',
      },
      {
        src: 'thumbnail-url-project-2',
        name: 'Project 2',
        description: 'Loren ipsum dolor',
        slug: 'project-2',
      },
    ])
  })
})

describe('timelinesMapper', () => {
  it('should return the right format when mapped', () => {
    const timelines = [
      {
        title: 'O início',
        content: {
          html: '<p>Loren ipsum dolor</p>',
        },
      },
      {
        title: 'Primeiro emprego',
        content: {
          html: '<p>Loren ipsum dolor</p>',
        },
      },
    ] as TimelinesProps[]

    expect(timelinesMapper(timelines)).toStrictEqual([
      {
        title: 'O início',
        content: '<p>Loren ipsum dolor</p>',
      },
      {
        title: 'Primeiro emprego',
        content: '<p>Loren ipsum dolor</p>',
      },
    ])
  })
})
