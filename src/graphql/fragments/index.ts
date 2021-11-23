import { gql } from 'graphql-request'

export const ContactLinksFragment = gql`
  fragment ContactLinksFragment on ContactLinks {
    name
    icon {
      url
    }
    link
  }
`

export const MenuFragment = gql`
  fragment MenuFragment on Menu {
    links: pages {
      id
      path
      menuLabel
    }
    contactsLinks {
      ...ContactLinksFragment
    }
  }
`

export const FooterFragment = gql`
  fragment FooterFragment on Footer {
    contactsLinks {
      ...ContactLinksFragment
    }
  }
`

export const ProjectsFragment = gql`
  fragment ProjectsFragment on Project {
    thumbnail {
      url
    }
    name
    description
    slug
  }
`
