import { gql } from 'graphql-request'

import {
  ContactLinksFragment,
  ProjectFragment,
  MenuFragment,
  FooterFragment,
} from 'graphql/fragments'

export const GET_HOME = gql`
  ${ContactLinksFragment}
  ${MenuFragment}
  ${FooterFragment}

  query getHome($menuSlug: String!, $footerSlug: String!) {
    menu(where: { slug: $menuSlug }) {
      ...MenuFragment
    }
    footer(where: { slug: $footerSlug }) {
      ...FooterFragment
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
