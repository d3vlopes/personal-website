import { gql } from 'graphql-request'

import { ContactLinksFragment, ProjectFragment } from 'graphql/fragments'

export const GET_HOME = gql`
  ${ContactLinksFragment}

  query getHome($menuSlug: String!, $footerSlug: String!) {
    menu(where: { slug: $menuSlug }) {
      links: pages {
        id
        path
        menuLabel
      }
      contactsLinks {
        ...ContactLinksFragment
      }
    }
    footer(where: { slug: $footerSlug }) {
      contactsLinks {
        ...ContactLinksFragment
      }
    }
    heroes {
      photo {
        url
      }
      helloMessage
      name
      description
      buttonText
    }
    skills {
      icon {
        url
      }
      title
      description
    }
    tools {
      type
      src {
        url
      }
      name
    }
  }
`

export const GET_RECENTS_PROJECTS = gql`
  ${ProjectFragment}

  query getRecentsProjects($first: Int) {
    projects(first: $first, orderBy: createdAt_DESC) {
      ...ProjectFragment
    }
  }
`
