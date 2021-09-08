import { MenuProps } from '.'

export default {
  links: [
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
    {
      id: '3',
      path: '/about',
      text: 'Sobre',
    },
    {
      id: '4',
      path: '/learning',
      text: 'Aprendizado',
    },
    {
      id: '5',
      path: '/contact',
      text: 'Contato',
    },
  ],
  contactLinks: [
    {
      name: 'Github',
      link: 'https://github.com/d3vlopes',
    },
    {
      name: 'Linkedin',
      link: 'https://www.linkedin.com/in/d3vlopes/',
    },
    {
      name: 'Whatsapp',
      link: 'https://api.whatsapp.com/send?phone=5551997465898&text=Contato%20pelo%20site',
    },
  ],
} as MenuProps
